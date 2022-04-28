import React from 'react';
import styled from 'styled-components';

const H3: React.FC<{ children: string }> = ({ children }) => {
  return <H3Wrapper>{children}</H3Wrapper>;
};

const H4: React.FC<{ children: string }> = ({ children }) => {
  return <H4Wrapper>{children}</H4Wrapper>;
};

const H5: React.FC<{ children: string }> = ({ children }) => {
  return <H5Wrapper>{children}</H5Wrapper>;
};

const H3Wrapper = styled.h3`
  color: #2866b8;
  font-size: 2.5rem;
  margin: 3.5rem 0;
  font-family: 'IBM Plex Sans KR', 'Noto Sans', 'Noto Sans KR', arial, sans-serif;
  font-weight: bold;
  text-align: center;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 2.9rem;
    margin: 4rem 0;
  }
`;

const H4Wrapper = styled.h4`
  color: #2b2b2b;
  background-color: #f8ecc2;
  font-size: 2rem;
  margin: 2rem 0;
  font-family: 'IBM Plex Sans KR', 'Noto Sans', 'Noto Sans KR', arial, sans-serif;
  font-weight: bold;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 2.4rem;
  }
`;

const H5Wrapper = styled.h5`
  color: #2b2b2b;
  font-size: 1.75rem;
  margin: 1rem 0;
  font-weight: bold;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 1.85rem;
  }
`;

export { H3, H4, H5 };
