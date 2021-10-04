import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import TagSelector from "../components/TagSelector";
import Posts from "../components/Posts";
import Pagination from "../components/Pagination";
import SEO from "../components/SEO";

const IndexPaginationTemplate = (props) => {
  const {
    data: {
      allMdx: { nodes: posts },
    },
  } = props;

  const {
    pageContext: { currentPage, totalPagination },
  } = props;

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <TagSelector tag="ALL" />
      <Posts posts={posts} />
      <Pagination currentPage={currentPage} totalPagination={totalPagination} />
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
