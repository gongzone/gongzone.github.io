import type { Actions } from 'gatsby';
import type { PlatformPath } from 'path';

import { Routing } from '../constants/routing';

interface CreatePages {
  graphQLData: {
    errors?: any;
    data?: unknown;
  };
  createPage: Actions['createPage'];
  path: PlatformPath;
}

export const createPostPages = ({ graphQLData, createPage, path }: CreatePages) => {
  const nodes = graphQLData.data.posts.nodes;

  nodes.forEach((post) => {
    const { slug, series } = post.frontmatter;

    createPage({
      path: `/posts/${slug}/`,
      component: `${path.resolve(`./src/templates/post-template.jsx`)}?__contentFilePath=${
        post.internal.contentFilePath
      }`,
      context: {
        id: post.id,
        seriesName: series ? series.seriesName : null,
        seriesIndex: series ? series.seriesIndex : null,
      },
    });
  });
};

export const createPostsPages = ({ graphQLData, createPage, path }: CreatePages) => {
  const totalCount = graphQLData.data.posts.totalCount;
  const postsPerPage = 8;
  const totalPagination = Math.ceil(totalCount / postsPerPage);

  Array.from({ length: totalPagination }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/posts/` : `/posts/${i + 1}/`,
      component: path.resolve('./src/templates/posts-template.tsx'),
      context: {
        tag: 'ALL',
        isCanonical: i === 0 ? true : false,
        limit: postsPerPage,
        skip: i * postsPerPage,
        totalPagination,
        postsPerPage,
        currentPage: i + 1,
      },
    });
  });
};

export const createPostsByTagPages = ({ graphQLData, createPage, path }: CreatePages) => {
  const tags = graphQLData.data.tags.group;
  const postsPerPage = 8;

  Array.from(tags).forEach(({ fieldValue, totalCount }) => {
    const totalPagination = Math.ceil(totalCount / postsPerPage);

    Array.from({ length: totalPagination }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `${Routing.slugifyTag(fieldValue)}`
            : `${Routing.slugifyTag(fieldValue)}${i + 1}/`,
        component: path.resolve('./src/templates/posts-by-tag-template.tsx'),
        context: {
          tag: fieldValue,
          isCanonical: false,
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

export const createSeriesPages = ({ graphQLData, createPage, path }: CreatePages) => {
  const totalCount = Array.from(graphQLData.data.series.group).length;

  const postsPerPage = 8;
  const totalPagination = Math.ceil(totalCount / postsPerPage);

  Array.from({ length: totalPagination }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/series/` : `/series/${i + 1}/`,
      component: path.resolve('./src/templates/series-template.tsx'),
      context: {
        isCanonical: i === 0 ? true : false,
        limit: postsPerPage,
        skip: i * postsPerPage,
        totalPagination,
        postsPerPage,
        currentPage: i + 1,
      },
    });
  });
};

export const createSeriesListPages = ({ graphQLData, createPage, path, root }: CreatePages) => {
  const nodes = graphQLData.data.series.group;

  nodes.forEach(({ fieldValue }) => {
    createPage({
      path: `${Routing.slugifySeries(fieldValue)}`,
      component: path.resolve('./src/templates/series-list-template.tsx'),
      context: {
        seriesName: fieldValue,
      },
    });
  });
};
