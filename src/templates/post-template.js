import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

const PostTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, date, image },
      body,
    },
  } = data;

  return (
    <Layout>
      <Wrapper>
        <article className="post-header">
          <GatsbyImage
            image={getImage(image)}
            alt={title}
            className="post-image"
          />
          <h3 className="post-title">{title}</h3>
          <span className="post-date">Posted on: {date}</span>
          <div className="underline"></div>
        </article>
        <article>
          <MDXRenderer>{body}</MDXRenderer>
        </article>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  width: 90vw;
  margin: 2rem auto;

  .post-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .post-image {
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  .post-title {
    max-width: 90%;
    margin-bottom: 1.5rem;
  }

  .post-date {
    font-size: 1.4rem;
    color: rgba(97, 125, 152, 69%);
    margin-bottom: 1rem;
  }

  .underline {
    width: 15rem;
    height: 0.1rem;
    background: rgba(0, 0, 0, 8%);
  }
`;

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY년 MM월 DD일")
        tags
        slug
        image {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
        }
      }
      body
    }
  }
`;

export default PostTemplate;
