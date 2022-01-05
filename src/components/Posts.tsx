import React from "react";
import styled from "styled-components";
import Post from "./Post";

import { AllMdxNodes } from "../interfaces/AllMdxNodes";

interface PostsProps {
  posts: AllMdxNodes[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <Wrapper>
      {posts.map((post) => {
        return <Post key={post.id} {...post} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 90vw;
  max-width: 50.7rem;
  margin: 3rem auto;
  margin-bottom: 4rem;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 85rem;
  }
`;

export default Posts;
