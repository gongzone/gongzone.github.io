import React from "react";
import Layout from "../components/Layout";
import { graphql, PageProps } from "gatsby";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Posts from "../components/Posts";
import Pagination from "../components/Pagination";
import SEO from "../components/SEO";

import { AllMdxNodes } from "../interfaces/AllMdxNodes";

interface GraphQLResult {
  allMdx: { nodes: AllMdxNodes[] };
}

interface PageContextProps {
  currentPage: number;
  totalPagination: number;
}

const IndexPaginationTemplate: React.FC<
  PageProps<GraphQLResult, PageContextProps>
> = ({ data, pageContext }) => {
  const { nodes: posts } = data.allMdx;
  const { currentPage, totalPagination } = pageContext;

  return (
    <Layout>
      <SEO title="Home" canonical={false} />
      <Hero />
      <Navigation tag="ALL" />
      <Posts posts={posts} />
      <Pagination
        tag={null}
        currentPage={currentPage}
        totalPagination={totalPagination}
      />
    </Layout>
  );
};

export const query = graphql`
  query GetPostByPagination($limit: Int, $skip: Int) {
    allMdx(
      limit: $limit
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
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
