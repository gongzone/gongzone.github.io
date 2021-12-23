import { GatsbyNode } from "gatsby";
import * as path from "path";

interface GraphQL_Interface {
  allMdx: {
    totalCount: number;
    distinct: string[];
    nodes: {
      frontmatter: {
        tags: string[];
        slug: string;
      };
    }[];
  };
}

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
        skip: index * postsPerPage,
        totalPagination,
        currentPage: index + 2,
      },
    });
  });
};

const createTagPagination = (graphQLData, createPage) => {
  const nodes = graphQLData.data.allMdx.nodes;
  const distinct = graphQLData.data.allMdx.distinct;

  const allTags = [];

  nodes.forEach((post) => {
    post.frontmatter.tags.forEach((tag) => {
      allTags.push(tag);
    });
  });

  distinct.forEach((distinctTag) => {
    const postsPerPage = 10;
    const postsByTag = allTags.filter((tag) => distinctTag === tag).length;
    const totalPagination = Math.ceil(postsByTag / postsPerPage);

    Array.from({ length: totalPagination }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/${distinctTag}` : `/${distinctTag}/${index + 1}`,
        component: path.resolve("./src/templates/tag-pagination-template.tsx"),
        context: {
          tag: distinctTag,
          limit: postsPerPage,
          skip: index * postsPerPage,
          totalPagination,
          currentPage: index + 1,
        },
      });
    });
  });
};

const createPostPage = (graphQLData, createPage) => {
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

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const graphQLData = await graphql<GraphQL_Interface>(`
    {
      allMdx {
        totalCount
        distinct(field: frontmatter___tags)
        nodes {
          frontmatter {
            tags
            slug
          }
        }
      }
    }
  `);

  createIndexPagination(graphQLData, createPage);
  createTagPagination(graphQLData, createPage);
  createPostPage(graphQLData, createPage);
};
