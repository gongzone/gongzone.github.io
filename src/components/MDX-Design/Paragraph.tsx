import React from "react";
import styled from "styled-components";

const Paragraph: React.FC<{ children: string }> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.p`
  font-size: 1.7rem;
  line-height: 1.7;
  letter-spacing: 0.05rem;
  margin: 2.5rem 0rem;

  @media screen and (min-width: 768px) {
    font-size: 1.75rem;
    margin: 2.75rem 0rem;
  }

  @media screen and (min-width: 1920px) {
    font-size: 1.8rem;
  }
`;

export default Paragraph;
