import path from 'path';
import type { CreateBabelConfigArgs, CreatePagesArgs } from 'gatsby';
import { createPostPages, createPostsPages } from './gatsby-api';

const root = process.cwd();

// babel config
export const onCreateBabelConfig = ({ actions }: CreateBabelConfigArgs) => {
  actions.setBabelPreset({
    name: 'babel-preset-gatsby',
    options: {
      reactRuntime: 'automatic',
    },
  });
};

export const createPages = async ({ graphql, actions, reporter }: CreatePagesArgs) => {
  const { createPage } = actions;

  const graphQLData = await graphql(`
    {
      allMdx {
        totalCount
        nodes {
          frontmatter {
            slug
            series
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
    root,
  };

  createPostPages(createPagesData);
  createPostsPages(createPagesData);
};
