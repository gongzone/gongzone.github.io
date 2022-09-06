import { graphql, type HeadFC, type PageProps } from 'gatsby';

import type { IndexPageQuery } from '@/types/graphql';
import { Routing } from '@/constants/routing';

import { SEO } from '@/features/SEO/components';
import { BaseLayout } from '@/layout/base-layout';
import { Hero, SiteInfo, HomeSection } from '@/components/@page-components/index-page';
import { Posts } from '@/features/@post/components/posts';
import { SeriesList } from '@/features/@series/components/series-list';

const IndexPage = ({ data }: PageProps<IndexPageQuery>) => {
  const { nodes: posts } = data.posts;
  const { group: series } = data.series;

  return (
    <BaseLayout className="py-10 px-5 xs:px-14 lg:px-20">
      <Hero />
      <SiteInfo />

      <HomeSection name="글" to={Routing.POSTS.toString()}>
        <Posts posts={posts} />
      </HomeSection>

      <HomeSection name="시리즈" to={Routing.SERIES.toString()}>
        <SeriesList series={series} />
      </HomeSection>
    </BaseLayout>
  );
};

export const query = graphql`
  query IndexPage {
    posts: allMdx(limit: 8, sort: { fields: frontmatter___date, order: DESC }) {
      ...PostsData
    }
    series: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      ...SeriesListData
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <SEO title="공존의 발자취" />;
