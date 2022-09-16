import path from 'path';
import readingTime from 'reading-time';
import type { GatsbyNode } from 'gatsby';
import {
  createPostPages,
  createPostsPages,
  createPostsByTagPages,
  createSeriesPages,
  createSeriesListPages,
} from './src/api/create-pages';

export const onCreateNode: GatsbyNode['onCreateNode'] = async ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body as string),
    });
  }
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const graphQLData = await graphql(`
    {
      posts: allMdx {
        totalCount
        nodes {
          id
          frontmatter {
            slug
            series {
              seriesName
              seriesIndex
            }
          }
          internal {
            contentFilePath
          }
        }
      }
      tags: allMdx {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
      series: allMdx {
        group(field: frontmatter___series___seriesName) {
          fieldValue
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    }
  `);

  if (graphQLData.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const createPagesData = {
    graphQLData,
    createPage,
    path,
  };

  createPostPages(createPagesData);
  createPostsPages(createPagesData);
  createPostsByTagPages(createPagesData);
  createSeriesPages(createPagesData);
  createSeriesListPages(createPagesData);
};
