import { graphql, type PageProps, type HeadFC } from 'gatsby';
import { Link } from 'gatsby';
import { TiArrowBack } from 'react-icons/ti';

import { Routing } from '@/fixtures/routing';

import { SEO } from '@/features/seo/components';
import { BaseLayout } from '@/components/layout/base-layout';
import { SeriesList } from '@/features/@series/components/series-list';

interface SeriesListPageContext {
  limit: number;
  skip: number;
  totalPagination: number;
  postsPerPage: number;
  currentPage: number;
  seriesName: string;
}

const SeriesListTemplate = ({
  data,
  pageContext,
}: PageProps<Queries.GetPostsBySeriesQuery, SeriesListPageContext>) => {
  const {
    allMdx: { totalCount, nodes },
  } = data;

  const { seriesName } = pageContext;

  return (
    <BaseLayout className="py-10 px-5 xs:px-14 md:max-w-[768px] md:p-20 lg:max-w-[850px]">
      <div className="">
        <div className="flex flex-col gap-4">
          <Link className="group inline-flex items-center gap-3" to={Routing.SERIES.toString()}>
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
              <span>&bull; {totalCount}개의 포스트</span>
            </div>
          </div>
        </div>
        <SeriesList posts={nodes} />
      </div>
    </BaseLayout>
  );
};

export const query = graphql`
  query GetPostsBySeries($seriesName: String) {
    allMdx(
      filter: { frontmatter: { series: { seriesName: { eq: $seriesName } } } }
      sort: { fields: frontmatter___series___seriesIndex, order: ASC }
    ) {
      totalCount
      ...SeriesListData
    }
  }
`;

export default SeriesListTemplate;

export const Head: HeadFC<Queries.GetPostsBySeriesQuery, SeriesListPageContext> = ({
  pageContext,
}) => (
  <SEO
    title={`${pageContext.seriesName} - 공존의 발자취`}
    pathname={Routing.slugifySeries(pageContext.seriesName)}
  />
);
