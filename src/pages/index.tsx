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
  allMdx: {
    totalCount: number;
    nodes: AllMdxNodes[];
  };
}

const IndexPage: React.FC<PageProps<QueryType>> = ({ data }) => {
  const { nodes: posts } = data.allMdx;
  const { totalCount } = data.allMdx;

  const postsPerPage = 10;
  const totalPagination = Math.ceil(totalCount / postsPerPage);

  return (
    <Layout>
      <SEO title="GongZone DevBlog" />
      <Hero />
      <Navigation tag="ALL" />
      <Posts posts={posts} />
      <Pagination currentPage={1} totalPagination={totalPagination} />
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(limit: 10, sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
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

export default IndexPage;
