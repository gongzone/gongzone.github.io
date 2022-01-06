const path = require("path");

const createIndexPagination = (graphQLData, createPage) => {
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
        skip: (index + 1) * postsPerPage,
        totalPagination: totalPagination + 1,
        currentPage: index + 2,
      },
    });
  });
};

const createTagPagination = (graphQLData, createPage) => {
  const nodes = graphQLData.data.allMdx.nodes;
  const allTags = [];

  nodes.forEach((post) => {
    post.frontmatter.tags.forEach((tag) => {
      allTags.push(tag);
    });
  });

  const distinctTags = [
    ...new Set(allTags.map((tag) => JSON.stringify(tag))),
  ].map((result) => JSON.parse(result));

  distinctTags.forEach(({ name, slug }) => {
    const postsPerPage = 10;
    const postsByTag = allTags.filter((tag) => tag.name === name).length;
    const totalPagination = Math.ceil(postsByTag / postsPerPage);

    Array.from({ length: totalPagination }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/${slug}` : `/${slug}/${index + 1}`,
        component: path.resolve("./src/templates/tag-pagination-template.tsx"),
        context: {
          tag: name,
          tagSlug: slug,
          limit: postsPerPage,
          skip: index * postsPerPage,
          totalPagination,
          currentPage: index + 1,
        },
      });
    });
  });
};

const createPostPages = (graphQLData, createPage) => {
  const nodes = graphQLData.data.allMdx.nodes;

  nodes.forEach((post) => {
    const slug = post.frontmatter.slug;

    createPage({
      path: `/${slug}`,
      component: path.resolve(`src/templates/post-template.tsx`),
      context: {
        slug,
      },
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const graphQLData = await graphql(`
    {
      allMdx {
        totalCount
        nodes {
          frontmatter {
            tags {
              name
              slug
            }
            slug
          }
        }
      }
    }
  `);

  createIndexPagination(graphQLData, createPage);
  createTagPagination(graphQLData, createPage);
  createPostPages(graphQLData, createPage);
};
