import React from "react";
import { BsTriangleFill } from "react-icons/bs";
import styled from "styled-components";
import Card from "./UI/Card";

const TagSelector = () => {
  return (
    <Wrapper>
      <Card
        w="83.3%"
        h="4.8rem"
        border="0.2rem solid #E25050"
        borderRadius="1rem"
        boxShadow="on"
      >
        <span className="current-tag">Tag: ALL</span>
        <BsTriangleFill className="triangle-down" />
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;
  font-size: 1.9rem;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 15%);

  .current-tag {
    font-family: imprima, arial, sans-serif;
    margin-left: 2rem;
  }

  .triangle-down {
    transform: rotate(180deg);
    color: #d83232;
    margin-right: 2rem;
  }
`;

export default TagSelector;
