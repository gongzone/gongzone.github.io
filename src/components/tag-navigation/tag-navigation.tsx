import { graphql, useStaticQuery } from 'gatsby';
import { BsFillTagsFill } from 'react-icons/bs';

import { FilteringTag } from '@/components/@shared/tag/filtering-tag';

type TagNavigationProps = {
  currentTag: string;
};

type TagNavigationData = {
  allMdx: {
    totalCount: number;
    group: {
      fieldValue: string;
      totalCount: number;
    }[];
  };
};

export const TagNavigation = ({ currentTag }: TagNavigationProps) => {
  const data = useStaticQuery<TagNavigationData>(graphql`
    query {
      allMdx {
        totalCount
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  const { group: tags, totalCount: allCount } = data.allMdx;

  return (
    <div className="lg:w-2/3">
      <div className="mb-3 flex items-center gap-2">
        <BsFillTagsFill />
        <span>태그 목록</span>
      </div>

      <ul className="flex flex-wrap pb-4">
        <li className="mb-2 mr-2 flex">
          <FilteringTag currentTag={currentTag} tagName="ALL" totalCount={allCount} />
        </li>
        {tags.map(({ fieldValue, totalCount }) => (
          <li key={fieldValue} className="mb-2 mr-2 flex">
            <FilteringTag currentTag={currentTag} tagName={fieldValue} totalCount={totalCount} />
          </li>
        ))}
      </ul>
    </div>
  );
};
