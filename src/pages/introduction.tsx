import { HeadFC } from 'gatsby';

import { UnderDevelopment } from '@/components/under-development';
import { SEO } from '@/features/seo/components';

const IntroductionPage = () => {
  return <UnderDevelopment />;
};

export default IntroductionPage;

export const Head: HeadFC = () => <SEO title="공존의 발자취" />;
