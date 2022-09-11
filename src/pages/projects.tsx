import { HeadFC } from 'gatsby';

import { UnderDevelopment } from '@/components/under-development';
import { SEO } from '@/features/seo/components';

const ProjectsPage = () => {
  return <UnderDevelopment />;
};

export default ProjectsPage;

export const Head: HeadFC = () => <SEO title="공존의 발자취" pathname="/projects" />;
