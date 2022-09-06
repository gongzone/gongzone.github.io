import { graphql, type HeadFC, type PageProps } from 'gatsby';

import type { IndexPageQuery } from '@/types/graphql';
import { Routing } from '@/constants/routing';

import { SEO } from '@/features/SEO/components';
import { BaseLayout } from '@/layout/base-layout';
import { Hero, SiteInfo, HomeSection } from '@/components/@page-components/index-page';
import { GridLayoutForCard } from '@/layout/grid-layout-for-card';
import { PostCard } from '@/features/@post/components/post-card';
import { SeriesCard } from '@/features/@series/components/series-card';

const IndexPage = ({ data }: PageProps<IndexPageQuery>) => {
  const { nodes: posts } = data.posts;
  const { group: series } = data.series;

  return (
    <BaseLayout className="py-10 px-5 xs:px-14 lg:px-20">
      <Hero />
      <SiteInfo />

      <HomeSection name="글" to={Routing.POSTS.toString()}>
        <GridLayoutForCard>
          {posts.map((p) => (
            <PostCard key={p.id} frontmatter={p.frontmatter} />
          ))}
        </GridLayoutForCard>
      </HomeSection>

      <HomeSection name="시리즈" to={Routing.SERIES.toString()}>
        <GridLayoutForCard>
          {series.map((s) => (
            <SeriesCard
              key={s.fieldValue}
              title={s.fieldValue!}
              totalCount={s.totalCount}
              image={s.nodes[0]!.frontmatter?.image}
            />
          ))}
        </GridLayoutForCard>
      </HomeSection>
    </BaseLayout>
  );
};

export const query = graphql`
  query IndexPage {
    posts: allMdx(limit: 8, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        ...PostCardData
      }
    }
    series: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      group(field: frontmatter___series___seriesName, limit: 8) {
        ...SeriesCardData
        nodes {
          frontmatter {
            image {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG, width: 517, height: 380)
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <SEO title="공존의 발자취" />;
