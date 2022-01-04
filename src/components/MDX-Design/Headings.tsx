import React from "react";
import styled from "styled-components";

const H3: React.FC<{ children: string }> = ({ children }) => {
  return <H3Wrapper>{children}</H3Wrapper>;
};

const H3Wrapper = styled.h3`
  color: #2866b8;
  font-size: 2.5rem;
  margin: 3.65rem 0;
  font-family: "IBM Plex Sans KR", "Noto Sans", "Noto Sans KR", arial,
    sans-serif;
  font-weight: bold;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 2.9rem;
    margin: 5rem 0;
  }
`;

export { H3 };
