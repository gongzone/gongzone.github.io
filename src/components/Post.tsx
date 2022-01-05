import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { BsCalendar3 } from "react-icons/bs";

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
      <Link to={`/${slug}`} className="post-link">
        <GatsbyImage
          image={getImage(image)}
          alt={title}
          className="post-image"
        />
        <div className="post-info">
          <h1 className="title">{title}</h1>
          <h2 className="description">{description}</h2>
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
            <BsCalendar3 className="date-icon" />
            <span>{date} 작성</span>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-bottom: 3rem;
  border: 0.1rem solid rgba(0, 0, 0, 15%);
  border-radius: 1rem;
  box-shadow: 0 0.3rem 0.4rem rgba(0, 0, 0, 25%);
  background: #ffffff;
  line-height: 1.7;
  letter-spacing: 0.05rem;

  &:last-child {
    margin-bottom: 0;
  }

  .post-link {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
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

  .title {
    font-size: 1.75rem;
    font-weight: bold;
    line-height: 1.6;
    margin: 0rem;
    word-break: break-all;
  }

  .description {
    font-size: 1.6rem;
    font-weight: normal;
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
    max-width: 85rem;
    width: 90vw;

    .post-link {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
    }
    .post-info {
      width: auto;
    }
    .post-image {
      max-width: 25rem;
      min-width: 25rem;
      min-height: 25rem;
      height: 100%;
      margin-bottom: 0rem;
    }

    .title {
      font-size: 1.9rem;
      margin: 2rem 6rem;
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
`;

export default Post;
