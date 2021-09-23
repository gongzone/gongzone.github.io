import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import TagSelector from "../components/TagSelector";
import Posts from "../components/Posts";
import Pagination from "../components/Pagination";

const index = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data;

  const {
    allCount: { totalCount },
  } = data;

  const postsPerPage = 10;
  const totalPagination = Math.ceil(totalCount / postsPerPage);

  return (
    <Layout>
      <Hero />
      <TagSelector tag="ALL" />
      <Posts posts={posts} />
      <Pagination
        currentPage="1"
        totalPagination={totalPagination.toString()}
      />
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(limit: 10, sort: { fields: frontmatter___date, order: DESC }) {
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
    allCount: allMdx {
      totalCount
    }
  }
`;

export default index;
