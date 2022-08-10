import type { HeadFC } from 'gatsby';

import { Layout } from '@/components/Layout';

const IndexPage = () => {
  return (
    <div>
      <Layout>HomePage</Layout>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
