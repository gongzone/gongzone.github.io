import { graphql, type HeadFC, type PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { SECTION_KIND_ENUM } from '@/components/PageComponent/IndexPage/Section/enums';
import type { IndexPageQuery } from '@/types/graphql';

import { SEO } from '@/features/SEO/components';
import { Layout } from '@/components/layout';
import { Hero } from '@/components/@page-components/index-page/hero';
import { Section } from '@/components/PageComponent/IndexPage';

const IndexPage = ({ data }: PageProps<IndexPageQuery>) => {
  const { nodes: posts } = data.posts;
  const { group: series } = data.series;

  return (
    <Layout className="py-10 px-5 xs:px-14 lg:px-20">
      <Hero />
      <div className="my-8 flex items-center justify-center gap-2 px-3 py-5 drop-shadow-md">
        <StaticImage
          src="../assets/images/blog.png"
          alt="blog-icon"
          placeholder="blurred"
          width={75}
          height={75}
        />
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-bold text-emerald-400">GongZone</span>
          <p className="text-sm">웹 개발에 관한 글을 주로 씁니다.</p>
        </div>
      </div>

      <Section kind={SECTION_KIND_ENUM.POSTS} data={posts} />
      <Section kind={SECTION_KIND_ENUM.SERIES} data={series} />
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
