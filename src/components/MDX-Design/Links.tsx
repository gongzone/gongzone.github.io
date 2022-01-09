import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const ExternalLink: React.FC<{ children: string; href: string }> = ({
  children,
  href,
}) => {
  return <EWrapper href={href}>{children}</EWrapper>;
};

const EWrapper = styled.a`
  font-weight: bold;
  color: blue;

  &:hover {
    color: green;
  }
`;

const InternalLink: React.FC<{ children: string; to: string }> = ({
  children,
  to,
}) => {
  return <IWrapper to={to}>{children}</IWrapper>;
};

const IWrapper = styled(Link)`
  font-weight: bold;
  color: blue;

  &:hover {
    color: green;
  }
`;

export { ExternalLink, InternalLink };
