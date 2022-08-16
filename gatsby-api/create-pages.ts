export const createPostPages = ({ graphQLData, createPage, path, root }) => {
  const nodes = graphQLData.data.posts.nodes;

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
  const totalCount = graphQLData.data.posts.totalCount;
  const postsPerPage = 2;
  const totalPagination = Math.ceil(totalCount / postsPerPage);

  Array.from({ length: totalPagination }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/posts` : `/posts/${i + 1}`,
      component: path.join(root, 'src/templates', 'PostsTemplate.tsx'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        totalPagination,
        postsPerPage,
        currentPage: i + 1,
      },
    });
  });
};

export const createPostsByTagPages = ({ graphQLData, createPage, path, root }) => {
  const tags = graphQLData.data.tags.group;
  const postsPerPage = 2;

  Array.from(tags).forEach(({ fieldValue, totalCount }) => {
    const totalPagination = Math.ceil(totalCount / postsPerPage);

    Array.from({ length: totalPagination }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `/posts/tags/${fieldValue.toLowerCase().replace('-', '')}`
            : `/posts/tags/${fieldValue.toLowerCase().replace('-', '')}/${i + 1}`,
        component: path.join(root, 'src/templates', 'PostsByTagTemplate.tsx'),
        context: {
          tag: fieldValue,
          limit: postsPerPage,
          skip: i * postsPerPage,
          totalPagination,
          postsPerPage,
          currentPage: i + 1,
        },
      });
    });
  });
};
