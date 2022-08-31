import { graphql, useStaticQuery, Link } from 'gatsby';
import { BsFillTagsFill } from 'react-icons/bs';

import { useTagData } from '@/components/TagNavList/queries';
import { TAG_QUERY_KIND_ENUM } from '@/components/TagNavList/enums';
import type { TagQueryKind } from '@/components/TagNavList/types';

import { TagLink } from '@/components/Element/Tag';

interface TagsProps {
  kind: TagQueryKind;
  currentTag?: string;
}

interface TagsQuery {
  allMdx: {
    totalCount: number;
    group: {
      fieldValue: string;
      totalCount: number;
    }[];
  };
}

export const TagNavList = ({ kind, currentTag }: TagsProps) => {
  const { totalCount, tags } = useTagData(kind);
  console.log(totalCount, tags);
  const to = kind === TAG_QUERY_KIND_ENUM.ALL ? 'posts' : 'series';

  return (
    <div className="lg:w-2/3">
      <div className="mb-3 flex items-center gap-2">
        <span>
          <BsFillTagsFill />
        </span>
        <span>태그 목록</span>
      </div>
      <ul className="flex flex-wrap pb-4">
        <li className="mb-2 mr-2 flex">
          <Link
            className={`rounded-3xl bg-[#2e3039] px-4 py-2 text-sm xs:text-base ${
              currentTag ?? 'bg-[#232c42] text-amber-300 shadow-xl'
            }`}
            to={`/${to}`}
          >
            <span>All</span>
            <span> ({totalCount})</span>
          </Link>
        </li>
        {tags.map(({ fieldValue, totalCount }) => (
          <li key={fieldValue} className="mb-2 mr-2 flex">
            <TagLink
              kind={kind}
              currentTag={currentTag}
              fieldValue={fieldValue}
              totalCount={totalCount}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
