import { graphql, useStaticQuery } from 'gatsby';

interface TagsDataQuery {
  allMdx: {
    totalCount: number;
    group: {
      fieldValue: string;
      totalCount: number;
    }[];
  };
}

export const useTagData = () => {
  const data = useStaticQuery<TagsDataQuery>(graphql`
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

  return { tags: data.allMdx.group, totalCount: data.allMdx.totalCount };
};
