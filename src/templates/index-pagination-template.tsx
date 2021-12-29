import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Posts from "../components/Posts";
import Pagination from "../components/Pagination";
import SEO from "../components/SEO";

import { AllMdxNodes } from "../interfaces/AllMdxNodes";

interface QueryType {
  allMdx: { nodes: AllMdxNodes[] };
}

interface PageContextType {
  currentPage: number;
  totalPagination: number;
}

const IndexPaginationTemplate: React.FC<PageProps<QueryType, PageContextType>> =
  ({ data, pageContext }) => {
    const { nodes: posts } = data.allMdx;
    const { currentPage, totalPagination } = pageContext;

    return (
      <Layout>
        <SEO title="GongZone DevBlog" canonical={false} />
        <Hero />
        <Navigation tag="ALL" />
        <Posts posts={posts} />
        <Pagination
          currentPage={currentPage}
          totalPagination={totalPagination}
        />
      </Layout>
    );
  };

export const query = graphql`
  query GetPosts($limit: Int, $skip: Int) {
    allMdx(
      limit: $limit
      skip: $skip
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          title
          description
          tags
          slug
          date(formatString: "YYYY년 MM월 DD일")
          image {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG)
            }
          }
        }
      }
    }
  }
`;

export default IndexPaginationTemplate;
