import { graphql, type HeadFC, type PageProps } from 'gatsby';

import { Routing } from '@/fixtures/routing';

import { SEO } from '@/features/seo/components';
import { BaseLayout } from '@/components/layout/base-layout';
import { Hero, HomeSection } from '@/components/page/index-page/index';
import { PostCards } from '@/features/@post/components/post-cards';
import { SeriesCards } from '@/features/@series/components/series-cards';

const IndexPage = ({ data }: PageProps<Queries.GetIndexPageDataQuery>) => {
  const { nodes: posts } = data.posts;
  const { group: series } = data.series;

  return (
    <BaseLayout>
      <Hero />

      <div className="mx-auto max-w-[1720px] px-6 sm:px-10 md:px-14 lg:px-[66px]">
        <HomeSection name="글" to={Routing.POSTS.toString()}>
          <PostCards posts={posts} />
        </HomeSection>

        <HomeSection name="시리즈" to={Routing.SERIES.toString()}>
          <SeriesCards series={series} />
        </HomeSection>
      </div>
    </BaseLayout>
  );
};

export const query = graphql`
  query GetIndexPageData($limit: Int = 8, $skip: Int = 0) {
    posts: allMdx(limit: $limit, sort: { fields: frontmatter___date, order: DESC }) {
      ...PostCardsData
    }
    series: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      ...SeriesCardsData
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <SEO title="공존의 발자취" />;
