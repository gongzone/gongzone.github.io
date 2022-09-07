import React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

const mdxConponents = {};

export const wrapRootWithMdx: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return <MDXProvider components={mdxConponents}>{element}</MDXProvider>;
};
