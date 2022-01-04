import React from "react";
import styled from "styled-components";

const Paragraph = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.p`
  font-size: 1.6rem;
  line-height: 1.7;
  letter-spacing: 0.05rem;

  @media screen and (min-width: 768px) {
    font-size: 1.7rem;
  }

  @media screen and (min-width: 1920px) {
    font-size: 1.85rem;
  }
`;

export default Paragraph;
