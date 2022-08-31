import React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

import { Paragraph } from '@/features/blog/components/Mdx';

const mdxConponents = {
  p: Paragraph,
};

export const wrapRootWithMdx: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return <MDXProvider components={mdxConponents}>{element}</MDXProvider>;
};
