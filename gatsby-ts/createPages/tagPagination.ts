import path from "path";

interface NodesType {
  frontmatter: {
    tags?: string[];
    slug: string;
  };
}

export const createTagPagination = (graphQLData: any, createPage: any) => {
  const nodes: NodesType[] = graphQLData.data.allMdx.nodes;
  const distinct: string[] = graphQLData.data.allMdx.distinct;

  const allTags = [];

  nodes.forEach((post) => {
    post.frontmatter.tags.forEach((tag) => {
      allTags.push(tag);
    });
  });

  distinct.forEach((distinctTag) => {
    const postsPerPage = 10;
    const postsByTag = allTags.filter((tag) => distinctTag === tag).length;
    const totalPagination = Math.ceil(postsByTag / postsPerPage);

    Array.from({ length: totalPagination }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/${distinctTag}` : `/${distinctTag}/${index + 1}`,
        component: path.resolve("./src/templates/tag-pagination-template.tsx"),
        context: {
          tag: distinctTag,
          limit: postsPerPage,
          skip: index * postsPerPage,
          totalPagination,
          currentPage: index + 1,
        },
      });
    });
  });
};
