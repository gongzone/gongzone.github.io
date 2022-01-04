import React from "react";
import styled from "styled-components";

const Link: React.FC<{ children: string; href: string }> = ({
  children,
  href,
}) => {
  return <Wrapper href={href}>{children}</Wrapper>;
};

const Wrapper = styled.a`
  font-weight: bold;
  color: blue;

  &:hover {
    color: green;
  }
`;

export default Link;
