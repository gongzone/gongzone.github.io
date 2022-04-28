import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { GatsbyBrowser } from 'gatsby';
import {
  Headings,
  HL,
  Block,
  CodeBlock,
  Paragraph,
  Videos,
  Links,
  Intro,
  Ul,
  Li,
} from './src/components/MDX-Design';

const components = {
  Block,
  Intro,
  inlineCode: HL,
  pre: CodeBlock,
  p: Paragraph,
  h3: Headings.H3,
  h4: Headings.H4,
  h5: Headings.H5,
  ul: Ul,
  li: Li,
  Link: Links.InternalLink,
  a: Links.ExternalLink,
  RegVideo: Videos.RegVideo,
};

export const wrapMDX: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
