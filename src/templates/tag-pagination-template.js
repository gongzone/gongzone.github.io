import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import TagSelector from "../components/TagSelector";
import Posts from "../components/Posts";
import Pagination from "../components/Pagination";
import SEO from "../components/SEO";

const PaginationTemplate = (props) => {
  const {
    data: {
      allMdx: { nodes: posts },
    },
  } = props;

  const {
    pageContext: { tag, currentPage, totalPagination },
  } = props;

  return (
    <Layout>
      <SEO title={tag} />
      <Hero />
      <TagSelector tag={tag} />
      <Posts posts={posts} />
      <Pagination
        tag={tag}
        currentPage={currentPage}
        totalPagination={totalPagination}
      />
    </Layout>
  );
};

export const query = graphql`
  query GetPostByTag($tag: String, $skip: Int, $limit: Int) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        frontmatter {
          title
          tags
          slug
          description
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

export default PaginationTemplate;
