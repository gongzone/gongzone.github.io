import { graphql, useStaticQuery, Link } from 'gatsby';
import { BsFillTagsFill } from 'react-icons/bs';

import { TagLink } from '@/components/Element/Tag';

interface TagsProps {
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

export const TagNavList = ({ currentTag }: TagsProps) => {
  const data = useStaticQuery<TagsQuery>(query);
  const totalCount = data.allMdx.totalCount;
  const tags = data.allMdx.group;

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
            to="/posts"
          >
            <span>All</span>
            <span> ({totalCount})</span>
          </Link>
        </li>
        {tags.map(({ fieldValue, totalCount }) => (
          <li key={fieldValue} className="mb-2 mr-2 flex">
            <TagLink currentTag={currentTag} fieldValue={fieldValue} totalCount={totalCount} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const query = graphql`
  query tags {
    allMdx {
      totalCount
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
