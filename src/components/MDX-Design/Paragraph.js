import React from "react";
import styled from "styled-components";

const Paragraph = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.p`
  font-size: 1.7rem;
  line-height: 1.7;

  @media screen and (min-width: 2000px) {
    font-size: 1.9rem;
  }
`;

export default Paragraph;
