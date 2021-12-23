import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { BsCalendar } from "react-icons/bs";

interface frontmatterProps {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  date: string;
  image: ImageDataLike;
}

const Post: React.FC<{ frontmatter: frontmatterProps }> = ({ frontmatter }) => {
  const { title, description, slug, date, image, tags } = frontmatter;
  return (
    <Wrapper>
      <Link to={`/${slug}`} className="image-link">
        <GatsbyImage
          image={getImage(image)}
          alt={title}
          className="post-image"
        />
      </Link>

      <div className="post-info">
        <Link to={`/${slug}`}>
          <h3 className="title">{title}</h3>
        </Link>
        <p className="description">{description}</p>
        <div className="tag-container">
          {tags.map((tag, index) => {
            return (
              <span className="tag" key={index}>
                {tag}
              </span>
            );
          })}
        </div>
        <div className="post-date">
          <BsCalendar className="date-icon" />
          <span>{date} 작성</span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-bottom: 3rem;
  border: 0.1rem solid rgba(0, 0, 0, 15%);
  border-radius: 1rem;
  box-shadow: 0 0.3rem 0.4rem rgba(0, 0, 0, 25%);
  background: white;

  &:last-child {
    margin-bottom: 0;
  }

  .post-image {
    border-radius: 0.8rem;
    margin-bottom: 2rem;
  }

  .post-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 0 auto;
  }

  .description {
    font-size: 1.6rem;
    line-height: 1.3;
    margin: 1.5rem 0 2rem 0;
    word-break: break-all;
  }

  .tag {
    display: inline-block;
    font-size: 1.26rem;
    font-weight: bold;
    color: #2a90ef;
    background: #f6f6f6;
    margin-right: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem 0.8rem;
    border-radius: 0.3rem;
  }

  .post-date {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 1.2rem;
    margin-bottom: 1.5rem;
    font-style: italic;
    font-size: 1.3rem;
  }

  .date-icon {
    margin-top: 0.1rem;
    margin-right: 0.5rem;
    color: #e25050;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    max-width: 85rem;
    width: 90vw;

    .post-image {
      width: 25rem;
      min-height: 25rem;
      height: 100%;
      margin-bottom: 0rem;
    }

    .title {
      font-size: 1.9rem;
      margin: 2rem 4rem;
    }

    .description {
      font-size: 1.65rem;
      margin: 0 2.5rem;
      margin-bottom: 1.5rem;
    }

    .post-date {
      font-size: 1.45rem;
      margin-bottom: 2rem;
    }

    .tag-container {
      margin: 0 2.5rem;
    }

    .tag {
      font-size: 1.5rem;
      margin-right: 1.3rem;
      margin-bottom: 1.3rem;
      padding: 0.7rem 1rem;
    }
  }

  @media screen and (min-width: 2000px) {
    max-width: 105rem;
    .post-image {
      width: 32rem;
      min-height: 32rem;
    }
    .title {
      font-size: 2.4rem;
      margin: 2rem 5.5rem;
    }

    .description {
      font-size: 2rem;
      margin: 0 3.5rem;
      margin-bottom: 2.2rem;
    }

    .post-date {
      font-size: 1.8rem;
    }

    .tag-container {
      margin: 0 3.5rem;
    }

    .tag {
      font-size: 1.75rem;
      margin-right: 1.7rem;
      margin-bottom: 1.7rem;
      padding: 1rem 1.3rem;
      border-radius: 0.6rem;
    }
  }
`;

export default Post;
