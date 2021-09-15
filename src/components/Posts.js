import React from "react";
import styled from "styled-components";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <Wrapper>
      <div>
        {posts.map((post) => {
          return <Post key={post.id} {...post} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 90vw;
  margin: 2rem auto;
`;

export default Posts;
