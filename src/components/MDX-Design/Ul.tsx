import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Ul: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <UlWrapper>{children}</UlWrapper>;
};

const UlWrapper = styled.ul`
  font-size: 1.6rem;
  font-family: 'Noto Sans', 'Noto Sans KR', arial, sans-serif;
  line-height: 1.7;

  @media screen and (min-width: 768px) {
    font-size: 1.65rem;
  }
`;

export default Ul;
