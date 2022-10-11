import { HeadFC } from 'gatsby';

import { Routing } from '@/fixtures/routing';

import { SEO } from '@/components/seo';
import { UnderDevelopment } from '@/components/under-development';

const ProjectsPage = () => {
  return <UnderDevelopment />;
};

export default ProjectsPage;

export const Head: HeadFC = () => (
  <SEO title="프로젝트 | 공존의 발자취" pathname={Routing.PROJECTS.toString()} />
);
