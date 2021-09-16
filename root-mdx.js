import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Headings, Code, DecoDiv, Example } from "./src/components/MDX-Design";

const components = {
  DecoDiv,
  h2: Headings.myH2,
  inlineCode: Code,
  pre: Example,
};

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
