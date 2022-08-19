import { Link, graphql, type HeadFC, type PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { Layout } from '@/components/Layout';
import { Posts } from '@/features/blog/components/Posts';
import { Series } from '@/features/blog/components/Series';
import { Hero } from '@/components/Layout/Hero';
import { SEO } from '@/features/SEO/components';

const SECTION_KIND = {
  posts: {
    name: '글',
    to: '/posts',
  },
  series: {
    name: '시리즈',
    to: '/series',
  },
};

interface SectionProps {
  kind: typeof SECTION_KIND.posts;
  data: Queries.IndexPageQuery['posts']['nodes'] | Queries.IndexPageQuery['series']['group'];
}

const Section = ({ kind, data }: SectionProps) => {
  return (
    <section className="mb-8 flex flex-col justify-center">
      <div>
        <div className="mb-4">
          <span className="font-bold">✨ 최신 {kind.name} 목록</span>
        </div>
      </div>

      {kind.name === SECTION_KIND.posts.name && (
        <Posts posts={data as Queries.IndexPageQuery['posts']['nodes']} />
      )}
      {kind.name === SECTION_KIND.series.name && (
        <Series series={data as Queries.IndexPageQuery['series']['group']} />
      )}

      <div className="my-6 text-center">
        <Link className="group inline-flex items-center gap-1 p-2" to={kind.to}>
          <span>
            <FaExternalLinkAlt />
          </span>
          <span className="text-sm text-neutral-300 transition-colors duration-300 group-hover:text-amber-300">
            전체 {kind.name} 보러가기
          </span>
        </Link>
      </div>
    </section>
  );
};

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  const { nodes: posts } = data.posts;
  const { group: series } = data.series;

  return (
    <Layout>
      <div className="py-10 px-5 xs:px-14 lg:px-20">
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

        <Section kind={SECTION_KIND.posts} data={posts} />
        <Section kind={SECTION_KIND.series} data={series} />
      </div>
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
