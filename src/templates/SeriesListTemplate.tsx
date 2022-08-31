import { graphql, type PageProps, type HeadFC } from 'gatsby';
import { GatsbyImage, getImage, type ImageDataLike } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { TiArrowBack } from 'react-icons/ti';

import { Layout } from '@/components/Layout';
import { SEO } from '@/features/SEO/components';
import { SeriesList } from '@/features/blog/components/SeriesList';

interface SeriesPageContext {
  limit: number;
  skip: number;
  totalPagination: number;
  postsPerPage: number;
  currentPage: number;
}

const SeriesListTemplate = ({
  data,
  pageContext,
}: PageProps<Queries.GetPostsBySeries, SeriesPageContext>) => {
  console.log(data);
  const {
    allMdx: { nodes },
  } = data;
  const firstPost = nodes[0].frontmatter;
  const { seriesName } = pageContext;

  return (
    <Layout className="py-10 px-5 xs:px-14 md:max-w-[768px] md:p-20 lg:max-w-[850px]">
      <div className="">
        <div className="flex flex-col gap-4">
          <Link className="group inline-flex items-center gap-3" to="/series">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-700 text-3xl shadow-lg duration-300 group-hover:-translate-x-1.5">
              <TiArrowBack />
            </span>
            <div className="flex flex-col text-sm text-zinc-200">
              <span>시리즈 목록으로</span>
              <span>돌아가기</span>
            </div>
          </Link>
          <div className="mx-4 my-6 border-b-[3px] border-b-zinc-400 pb-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold text-emerald-400">{seriesName}</h1>
              <span>&bull; {nodes.length}개의 포스트</span>
            </div>
          </div>
        </div>
        <SeriesList posts={nodes} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query GetPostsBySeries($seriesName: String) {
    allMdx(
      filter: { frontmatter: { series: { seriesName: { eq: $seriesName } } } }
      sort: { fields: frontmatter___series___seriesIndex, order: ASC }
    ) {
      totalCount
      nodes {
        id
        frontmatter {
          title
          slug
          date(formatString: "YYYY년 MM월 DD일")
          description
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export default SeriesListTemplate;

export const Head: HeadFC = () => <SEO title="Series | 공존의 발자취" />;
