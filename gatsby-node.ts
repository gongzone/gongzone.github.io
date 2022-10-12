import readingTime from 'reading-time';
import type { GatsbyNode } from 'gatsby';
import {
  createPostPages,
  createPostsPages,
  createPostsByTagPages,
  createSeriesPages,
  createSeriesListPages,
} from './gatsby-node-apis/create-pages';
import cloneDeep from 'lodash/cloneDeep';

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

export const onCreatePage: GatsbyNode['onCreatePage'] = ({ page, actions }) => {
  if (page?.context?.frontmatter && !page?.context?.didCreateClone) {
    actions.createPage({
      ...page,
      context: {
        ...page.context,
        frontmatter: cloneDeep(page.context.frontmatter),
        didCreateClone: true,
      },
    });
  }
};

type PostsData = {
  allMdx: {
    totalCount: number;
    nodes: {
      id: string;
      internal: {
        contentFilePath: string;
      };
      frontmatter: {
        slug: string;
        series: {
          seriesName: string;
          seriesIndex: number;
        };
      };
    }[];
  };
};

type TagsData = {
  allMdx: {
    group: {
      fieldValue: string;
      totalCount: number;
    }[];
  };
};

type SeriesData = {
  allMdx: {
    group: {
      fieldValue: string;
      group: {
        fieldValue: string;
      }[];
    }[];
  };
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const postsData = await graphql<PostsData>(`
    {
      allMdx {
        totalCount
        nodes {
          id
          internal {
            contentFilePath
          }
          frontmatter {
            slug
            series {
              seriesName
              seriesIndex
            }
          }
        }
      }
    }
  `);

  const tagsData = await graphql<TagsData>(`
    {
      allMdx {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  const seriesData = await graphql<SeriesData>(`
    {
      allMdx {
        group(field: frontmatter___series___seriesName) {
          fieldValue
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    }
  `);

  if (postsData.errors || tagsData.errors || seriesData.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  createPostPages({ createPage, posts: postsData.data?.allMdx.nodes });
  createPostsPages({ createPage, totalCount: postsData.data?.allMdx.totalCount });
  createPostsByTagPages({ createPage, tags: tagsData.data?.allMdx.group });
  createSeriesPages({ createPage, totalCount: seriesData.data?.allMdx.group.length });
  createSeriesListPages({ createPage, series: seriesData.data?.allMdx.group });
};
