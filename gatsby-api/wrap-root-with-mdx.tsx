import React from 'react';
import type { WrapRootElementBrowserArgs } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

const mdxConponents = {};

export const wrapRootWithMdx = ({ element }: WrapRootElementBrowserArgs) => {
  return <MDXProvider components={mdxConponents}>{element}</MDXProvider>;
};
