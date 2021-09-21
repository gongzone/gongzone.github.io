import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import TagSelector from "../components/TagSelector";
import Posts from "../components/Posts";

const TagTemplate = (props) => {
  const {
    data: {
      allMdx: { nodes: posts },
    },
  } = props;

  const {
    pageContext: { tag },
  } = props;

  return (
    <Layout>
      <Hero />
      <TagSelector tag={tag} />
      <Posts posts={posts} />
    </Layout>
  );
};

export const query = graphql`
  query GetPostByTag($tag: String) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
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
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export default TagTemplate;
