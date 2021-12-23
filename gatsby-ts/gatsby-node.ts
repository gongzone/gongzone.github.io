import { GatsbyNode } from "gatsby";
import { QueryType } from "../src/interfaces/CreatePagesQueryType";

import { createIndexPagination } from "./createPages/indexPagination";
import { createTagPagination } from "./createPages/tagPagination";
import { createPostPages } from "./createPages/postPages";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const graphQLData = await graphql<QueryType>(`
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
  createPostPages(graphQLData, createPage);
};
