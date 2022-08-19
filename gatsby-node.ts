import path from 'path';
import type { GatsbyNode } from 'gatsby';
import {
  createPostPages,
  createPostsPages,
  createPostsByTagPages,
} from './gatsby-api/create-pages';

const root = process.cwd();

// babel config
export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({ actions }) => {
  actions.setBabelPreset({
    name: 'babel-preset-gatsby',
    options: {
      reactRuntime: 'automatic',
    },
  });
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const graphQLData = await graphql(`
    {
      posts: allMdx {
        totalCount
        nodes {
          frontmatter {
            slug
            series {
              seriesName
              seriesIndex
            }
          }
        }
      }
      tags: allMdx {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
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
    root,
  };

  createPostPages(createPagesData);
  createPostsPages(createPagesData);
  createPostsByTagPages(createPagesData);
};
