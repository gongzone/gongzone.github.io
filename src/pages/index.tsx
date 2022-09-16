import { graphql, type HeadFC, type PageProps } from 'gatsby';

import { Routing } from '@/constants/routing';

import { SEO } from '@/features/seo/components';
import { BaseLayout } from '@/layout/base-layout';
import { Hero, HomeSection } from '@/components/@page-components/index-page';
import { Posts } from '@/features/@post/components/posts';
import { SeriesCards } from '@/features/@series/components/series-cards';

const IndexPage = ({ data }: PageProps<Queries.GetIndexQuery>) => {
  const { nodes: posts } = data.posts;
  const { group: series } = data.series;

  return (
    <BaseLayout>
      <Hero />

      <div className="mx-auto max-w-[1478px] px-5 xs:px-14">
        <HomeSection name="글" to={Routing.POSTS.toString()}>
          <Posts posts={posts} />
        </HomeSection>

        <HomeSection name="시리즈" to={Routing.SERIES.toString()}>
          <SeriesCards series={series} />
        </HomeSection>
      </div>
    </BaseLayout>
  );
};

export const query = graphql`
  query GetIndex($limit: Int = 8, $skip: Int = 0) {
    posts: allMdx(limit: $limit, sort: { fields: frontmatter___date, order: DESC }) {
      ...PostsData
    }
    series: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      ...SeriesCardsData
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <SEO title="공존의 발자취" />;
