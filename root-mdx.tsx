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
  Intro,
} from "./src/components/MDX-Design";

const components = {
  Block,
  Intro,
  inlineCode: HL,
  pre: CodeBlock,
  p: Paragraph,
  h3: Headings.H3,
  a: Link,
  RegVideo: Videos.RegVideo,
};

export const wrapMDX: GatsbyBrowser["wrapRootElement"] = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
