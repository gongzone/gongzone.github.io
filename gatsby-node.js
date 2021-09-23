const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMdx {
        totalCount
        nodes {
          frontmatter {
            slug
          }
        }
      }
      tags: allMdx {
        distinct(field: frontmatter___tags)
      }
      allTags: allMdx {
        nodes {
          frontmatter {
            tags
          }
        }
      }
    }
  `);
  // createPages for post-template
  result.data.allMdx.nodes.forEach((post) => {
    const slug = post.frontmatter.slug;

    createPage({
      path: `/${slug}`,
      component: path.resolve(`src/templates/post-template.js`),
      context: {
        slug,
      },
    });
  });
  // createPages for index-pagination
  const totalCount = result.data.allMdx.totalCount;
  const postsPerPage = 10;
  const totalPagination = Math.ceil(totalCount / postsPerPage);

  Array.from({ length: totalPagination }).forEach((_, index) => {
    if (index > 0) {
      createPage({
        path: `/${index + 1}`,
        component: path.resolve("./src/templates/index-pagination-template.js"),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          totalPagination,
          currentPage: index + 1,
        },
      });
    }
  });
  // createPages for tag-template && tag-pagination
  const {
    data: { allTags },
  } = result;

  const tagArray = [];

  allTags.nodes.forEach((el) => {
    el.frontmatter.tags.forEach((tag) => {
      tagArray.push(tag);
    });
  });

  result.data.tags.distinct.forEach((tag) => {
    const postsPerPage = 10;
    const postsByTag = tagArray.filter((el) => tag === el).length;
    const totalPagination = Math.ceil(postsByTag / postsPerPage);
    // createPage for pagination
    Array.from({ length: totalPagination }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/${tag}` : `/${tag}/${index + 1}`,
        component: path.resolve("./src/templates/tag-pagination-template.js"),
        context: {
          tag: tag,
          limit: postsPerPage,
          skip: index * postsPerPage,
          totalPagination,
          currentPage: index + 1,
        },
      });
    });
  });
};
