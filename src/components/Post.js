import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsCalendar } from "react-icons/bs";

const Post = ({ frontmatter }) => {
  const { title, description, slug, date, image, tags } = frontmatter;
  return (
    <Wrapper>
      <Link to={`/${slug}`}>
        <GatsbyImage
          image={getImage(image)}
          alt={title}
          className="post-image"
        />
      </Link>
      <div className="post-info">
        <Link to={`/${slug}`}>
          <h3>{title}</h3>
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
    margin: 1.5rem 0 2rem 0;
  }
  .tag-container {
  }
  .tag {
    display: inline-block;
    font-size: 1.2rem;
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
`;

export default Post;
