import React from "react";
import { graphql, PageProps } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../components/SEO";
import Utterance from "../components/Utterance";

import { MdxFrontmatter } from "../interfaces/MdxFrontmatter";

interface QueryType {
  mdx: {
    body: string;
    frontmatter: MdxFrontmatter;
  };
}

const PostTemplate: React.FC<PageProps<QueryType>> = ({ data }) => {
  const {
    mdx: {
      body,
      frontmatter: { title, description, date, image, embeddedImages },
    },
  } = data;

  return (
    <Layout>
      <SEO title={title} description={description} article={true} />
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
        <article className="post-article">
          <MDXRenderer embeddedImages={getImage(embeddedImages)}>
            {body}
          </MDXRenderer>
        </article>
        <Utterance />
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  max-width: 70rem;
  width: 90vw;
  margin: 3rem auto;
  margin-bottom: 5.5rem;

  .post-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 6rem;
  }

  .post-image {
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  .post-title {
    font-size: 2rem;
    max-width: 90%;
    margin-bottom: 2.5rem;
  }

  .post-date {
    font-size: 1.6rem;
    color: rgba(97, 125, 152, 69%);
    margin-bottom: 1rem;
  }

  .underline {
    width: 18rem;
    height: 0.1rem;
    background: rgba(0, 0, 0, 8%);
  }

  .post-article {
    margin-bottom: 4rem;
  }

  @media screen and (min-width: 1920px) {
    max-width: 75rem;

    .post-title {
      font-size: 2.5rem;
      margin-bottom: 3rem;
    }
    .post-date {
      font-size: 1.9rem;
      margin-bottom: 1.5rem;
    }
  }
`;

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        description
        date(formatString: "YYYY년 MM월 DD일")
        tags
        slug
        image {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
        }
        embeddedImages {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default PostTemplate;
