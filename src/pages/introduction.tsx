import { HeadFC } from 'gatsby';

import { Routing } from '@/fixtures/routing';

import { SEO } from '@/components/seo';
import { UnderDevelopment } from '@/components/under-development';

const IntroductionPage = () => {
  return <UnderDevelopment />;
};

export default IntroductionPage;

export const Head: HeadFC = () => (
  <SEO title="소개 | 공존의 발자취" pathname={Routing.INTRODUCTION.toString()} />
);
