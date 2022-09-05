import { graphql, type HeadFC, type PageProps } from 'gatsby';

import type { IndexPageQuery } from '@/types/graphql';
import { Routing } from '@/constants/routing';

import { SEO } from '@/features/SEO/components';
import { Layout } from '@/components/layout';
import { Hero, SiteInfo, HomeSection } from '@/components/@page-components/index-page';
import { Posts } from '@/features/blog/components/Posts';
import { Series } from '@/features/blog/components/Series';

const IndexPage = ({ data }: PageProps<IndexPageQuery>) => {
  const { nodes: posts } = data.posts;
  const { group: series } = data.series;

  return (
    <Layout className="py-10 px-5 xs:px-14 lg:px-20">
      <Hero />
      <SiteInfo />

      <HomeSection name="글" to={Routing.POSTS.toString}>
        <Posts posts={posts} />
      </HomeSection>

      <HomeSection name="시리즈" to={Routing.SERIES.toString}>
        <Series series={series} />
      </HomeSection>
    </Layout>
  );
};

export const query = graphql`
  query IndexPage {
    posts: allMdx(limit: 8, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          description
          slug
          tags
          date(formatString: "YYYY년 MM월 DD일")
          lastmod(formatString: "YYYY년 MM월 DD일")
          image {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG, width: 517, height: 380)
            }
          }
        }
      }
    }
    series: allMdx {
      group(field: frontmatter___series___seriesName, limit: 8) {
        fieldValue
        totalCount
        nodes {
          frontmatter {
            tags
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
