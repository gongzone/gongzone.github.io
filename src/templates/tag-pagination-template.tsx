import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation/Navigation";
import Posts from "../components/Posts";
import Pagination from "../components/Pagination/Pagination";
import SEO from "../components/SEO";

import { AllMdxNodes } from "../interfaces/AllMdxNodes";

interface QueryType {
  allMdx: { nodes: AllMdxNodes[] };
}

interface PageContextType {
  tag: string;
  tagSlug: string;
  currentPage: number;
  totalPagination: number;
}

const PaginationTemplate: React.FC<PageProps<QueryType, PageContextType>> = ({
  data,
  pageContext,
}) => {
  const { nodes: posts } = data.allMdx;
  const { tag, tagSlug, currentPage, totalPagination } = pageContext;

  const tagObject = {
    name: tag,
    slug: tagSlug,
  };

  return (
    <Layout>
      <SEO title={`GongZone DevBlog | ${tag}`} canonical={false} />
      <Hero />
      <Navigation tag={tag} />
      <Posts posts={posts} />
      <Pagination
        tag={tagObject}
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
      limit: $limit
      skip: $skip
      filter: { frontmatter: { tags: { elemMatch: { name: { eq: $tag } } } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          tags {
            name
            slug
          }
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
