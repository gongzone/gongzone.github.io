import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { GatsbyBrowser } from "gatsby";
import {
  Headings,
  HL,
  Block,
  CodeBlock,
  Paragraph,
  Videos,
  Link,
} from "./src/components/MDX-Design";

const components = {
  Block,
  inlineCode: HL,
  h3: Headings.H3,
  pre: CodeBlock,
  p: Paragraph,
  RegVideo: Videos.RegVideo,
  a: Link,
};

export const wrapMDX: GatsbyBrowser["wrapRootElement"] = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
