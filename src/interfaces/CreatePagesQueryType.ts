export interface QueryType {
  allMdx: {
    totalCount: number;
    distinct: string[];
    nodes: {
      frontmatter: {
        tags?: string[];
        slug: string;
      };
    }[];
  };
}
