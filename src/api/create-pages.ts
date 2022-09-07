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
  root: string;
}

export const createPostPages = ({ graphQLData, createPage, path, root }: CreatePages) => {
  const nodes = graphQLData.data.posts.nodes;

  nodes.forEach((post) => {
    const { slug, series } = post.frontmatter;

    createPage({
      path: `/posts/${slug}`,
      component: path.join(root, 'src/templates', 'post-template.tsx'),
      context: {
        slug,
        seriesName: series?.seriesName,
        seriesIndex: series?.seriesIndex,
      },
    });
  });
};

export const createPostsPages = ({ graphQLData, createPage, path, root }: CreatePages) => {
  const totalCount = graphQLData.data.posts.totalCount;
  const postsPerPage = 2;
  const totalPagination = Math.ceil(totalCount / postsPerPage);

  Array.from({ length: totalPagination }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/posts` : `/posts/${i + 1}`,
      component: path.join(root, 'src/templates', 'posts-template.tsx'),
      context: {
        tag: 'ALL',
        limit: postsPerPage,
        skip: i * postsPerPage,
        totalPagination,
        postsPerPage,
        currentPage: i + 1,
      },
    });
  });
};

export const createPostsByTagPages = ({ graphQLData, createPage, path, root }: CreatePages) => {
  const tags = graphQLData.data.tags.group;
  const postsPerPage = 2;

  Array.from(tags).forEach(({ fieldValue, totalCount }) => {
    const totalPagination = Math.ceil(totalCount / postsPerPage);

    Array.from({ length: totalPagination }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `${Routing.slugifyTag(fieldValue)}`
            : `${Routing.slugifyTag(fieldValue)}/${i + 1}`,
        component: path.join(root, 'src/templates', 'posts-by-tag-template.tsx'),
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

export const createSeriesPages = ({ graphQLData, createPage, path, root }: CreatePages) => {
  const totalCount = Array.from(graphQLData.data.series.group).length;

  const postsPerPage = 2;
  const totalPagination = Math.ceil(totalCount / postsPerPage);

  Array.from({ length: totalPagination }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/series` : `/series/${i + 1}`,
      component: path.join(root, 'src/templates', 'series-template.tsx'),
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

export const createSeriesListPages = ({ graphQLData, createPage, path, root }: CreatePages) => {
  const nodes = graphQLData.data.series.group;

  nodes.forEach(({ fieldValue }) => {
    createPage({
      path: `${Routing.slugifySeries(fieldValue)}`,
      component: path.join(root, 'src/templates', 'series-list-template.tsx'),
      context: {
        seriesName: fieldValue,
      },
    });
  });
};
