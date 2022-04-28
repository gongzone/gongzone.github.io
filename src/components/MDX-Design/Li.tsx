import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Li: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <LiWrapper>{children}</LiWrapper>;
};

const LiWrapper = styled.li`
  margin: 0.5rem 0;
`;

export default Li;
