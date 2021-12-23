import path from "path";

export const createIndexPagination = (graphQLData: any, createPage: any) => {
  const totalCount = graphQLData.data.allMdx.totalCount;
  const postsPerPage = 10;
  let totalPagination = Math.ceil(totalCount / postsPerPage);
  totalPagination--;

  if (totalPagination === 0) {
    return;
  }

  Array.from({ length: totalPagination }).forEach((_, index) => {
    createPage({
      path: `/${index + 2}`,
      component: path.resolve("./src/templates/index-pagination-template.tsx"),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        totalPagination,
        currentPage: index + 2,
      },
    });
  });
};
