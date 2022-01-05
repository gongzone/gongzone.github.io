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
      frontmatter: { title, description, date, image, embeddedImages, tags },
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
          <h1 className="post-title">{title}</h1>
          <h2 className="post-description">
            <span className="emoji">📝 </span>
            {description}
          </h2>
          <span className="post-date">Posted on: {date}</span>
          <div className="underline"></div>
          <ul className="post-ul">
            {tags.map((tag, index) => {
              return (
                <li className="post-tag" key={index}>
                  {tag}
                </li>
              );
            })}
          </ul>
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
  max-width: 75rem;
  width: 90vw;
  margin: 3rem auto;
  margin-bottom: 5.5rem;

  .post-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .post-image {
    max-width: 60rem;
    border-radius: 1rem;
  }

  .post-title {
    font-family: "Dongle";
    font-weight: lighter;
    font-size: 3.5rem;
    max-width: 54rem;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    word-break: break-all;
  }

  .post-description {
    font-size: 1.7rem;
    font-weight: bold;
    max-width: 54rem;
    margin-top: 0;
    margin-bottom: 1.5rem;
    word-break: break-all;
    .emoji {
      font-weight: normal;
    }
  }

  .post-date {
    font-size: 1.5rem;
    color: rgba(97, 125, 152, 69%);
    margin-bottom: 1rem;
  }

  .underline {
    width: 14em;
    height: 0.1rem;
    background: rgba(0, 0, 0, 12%);
  }

  .post-ul {
    max-width: 54rem;
    margin: 1rem;
  }
  .post-tag {
    display: inline-block;
    font-size: 1.25rem;
    font-weight: bold;
    color: #fcfcfc;
    background: #be3535;
    margin-right: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem 0.8rem;
    border-radius: 0.3rem;
  }

  .post-article {
    border-radius: 2rem;
    background-color: #ffffff;
    margin-bottom: 4rem;
  }

  @media screen and (min-width: 768px) {
    .post-title {
      font-size: 4.2rem;
    }

    .post-description {
      font-size: 1.8rem;
    }

    .post-date {
      font-size: 1.8rem;
    }
    .post-tag {
      font-size: 1.35rem;
      padding: 0.8rem 1.1rem;
    }
    .post-article {
      margin-top: 2rem;
      padding: 4rem 5rem 4rem 5rem;
      box-shadow: 0rem 0rem 0.4rem rgba(0, 0, 0, 25%);
    }
  }

  @media screen and (min-width: 1920px) {
    max-width: 85rem;
    .post-title {
      max-width: 60rem;
      font-size: 4.5rem;
    }
    .post-description {
      max-width: 60rem;
    }
    .post-ul {
      max-width: 60rem;
    }
    .post-image {
      max-width: 68rem;
    }
    .post-date {
      font-size: 1.9rem;
      margin-bottom: 1.5rem;
    }
    .post-tag {
      font-size: 1.45rem;
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
