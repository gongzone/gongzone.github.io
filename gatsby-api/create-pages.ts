export const createPostPages = ({ graphQLData, createPage, path, root }) => {
  const nodes = graphQLData.data.allMdx.nodes;

  nodes.forEach((post) => {
    const { slug, series } = post.frontmatter;

    createPage({
      path: `/posts/${slug}`,
      component: path.join(root, 'src/templates', 'PostTemplate.tsx'),
      context: {
        slug,
        series,
      },
    });
  });
};

export const createPostsPages = ({ graphQLData, createPage, path, root }) => {
  const totalCount = graphQLData.data.allMdx.totalCount;
  const postsPerPage = 12;
  const totalPagination = Math.ceil(totalCount / postsPerPage);

  Array.from({ length: totalPagination }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/posts` : `/posts/${i + 1}`,
      component: path.join(root, 'src/templates', 'PostsTemplate.tsx'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        totalPagination,
        currentPage: i + 1,
      },
    });
  });
};
