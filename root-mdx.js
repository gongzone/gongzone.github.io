import React from "react";
import { MDXProvider } from "@mdx-js/react";
import {
  Headings,
  Code,
  DecoDiv,
  CodeBox,
  Paragraph,
  Videos,
  Link,
} from "./src/components/MDX-Design";

const components = {
  DecoDiv,
  h2: Headings.myH2,
  inlineCode: Code,
  pre: CodeBox,
  p: Paragraph,
  RegVideo: Videos.RegVideo,
  a: Link,
};

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
