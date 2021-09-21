const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      tags: allMdx {
        distinct(field: frontmatter___tags)
      }
    }
  `);

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

  result.data.tags.distinct.forEach((tag) => {
    createPage({
      path: `/${tag}`,
      component: path.resolve(`src/templates/tag-template.js`),
      context: {
        tag,
      },
    });
  });
};
