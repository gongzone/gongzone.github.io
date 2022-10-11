import * as path from 'path';
import type { Actions } from 'gatsby';

import { Routing } from '../src/fixtures/routing';

type CreatePostPages = {
  createPage: Actions['createPage'];
  posts?: {
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

export const createPostPages = ({ createPage, posts }: CreatePostPages) => {
  posts?.forEach((post) => {
    const { slug, series } = post.frontmatter;

    createPage({
      path: Routing.POSTS.toString(slug),
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

type CreatePostsPages = {
  createPage: Actions['createPage'];
  totalCount?: number;
};

export const createPostsPages = ({ createPage, totalCount }: CreatePostsPages) => {
  if (!totalCount) return;

  const postsPerPage = 12;
  const totalPagination = Math.ceil(totalCount / postsPerPage);

  Array.from({ length: totalPagination }).forEach((_, i) => {
    createPage({
      path: i === 0 ? Routing.POSTS.toString() : Routing.POSTS.toString(`${i + 1}`),
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

type CreatePostsByTagPages = {
  createPage: Actions['createPage'];
  tags?: {
    fieldValue: string;
    totalCount: number;
  }[];
};

export const createPostsByTagPages = ({ createPage, tags }: CreatePostsByTagPages) => {
  if (!tags) return;

  const postsPerPage = 12;

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

type CreateSeriesPages = {
  createPage: Actions['createPage'];
  totalCount?: number;
};

export const createSeriesPages = ({ createPage, totalCount }: CreateSeriesPages) => {
  if (!totalCount) return;

  const postsPerPage = 12;
  const totalPagination = Math.ceil(totalCount / postsPerPage);

  Array.from({ length: totalPagination }).forEach((_, i) => {
    createPage({
      path: i === 0 ? Routing.SERIES.toString() : Routing.SERIES.toString(`${i + 1}`),
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

type CreateSeriesListPages = {
  createPage: Actions['createPage'];
  series?: {
    fieldValue: string;
    group: {
      fieldValue: string;
    }[];
  }[];
};

export const createSeriesListPages = ({ createPage, series }: CreateSeriesListPages) => {
  series?.forEach(({ fieldValue }) => {
    createPage({
      path: Routing.slugifySeries(fieldValue),
      component: path.resolve('./src/templates/series-list-template.tsx'),
      context: {
        seriesName: fieldValue,
      },
    });
  });
};
