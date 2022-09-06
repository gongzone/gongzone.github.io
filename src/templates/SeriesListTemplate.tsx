import { graphql, type PageProps, type HeadFC } from 'gatsby';
import { FaLayerGroup } from 'react-icons/fa';

import { Layout } from '@/components/layout';
import { SeriesList } from '@/features/@series/components/series-list';
import { SEO } from '@/features/seo/components';
import { Pagination } from '@/features/Pagination/components';

interface SeriesListPageContext {
  limit: number;
  skip: number;
  totalPagination: number;
  postsPerPage: number;
  currentPage: number;
}

const SeriesListTemplate = ({
  data,
  pageContext,
}: PageProps<Queries.GetSeriesListQuery, SeriesListPageContext>) => {
  const { group: series } = data.series;

  return (
    <Layout className="py-10 px-5 xs:px-14 md:p-20">
      <div className="mb-4">
        <div className="mb-2 inline-flex items-center gap-2 rounded-3xl bg-[#2e3039] px-4 py-2">
          <FaLayerGroup />
          <span className="text-lg">전체 시리즈 목록</span>
        </div>
        <div className="pl-4">
          <span className="text-zinc-400">&bull; 시리즈 별로 포스트를 탐방해보세요.</span>
        </div>
      </div>
      <SeriesList series={series} />
      <Pagination pageContext={pageContext} />
    </Layout>
  );
};

export const query = graphql`
  query GetSeriesList($limit: Int = 8, $skip: Int = 0) {
    series: allMdx {
      ...SeriesListData
    }
  }
`;

export default SeriesListTemplate;

export const Head: HeadFC = () => <SEO title="Series - 공존의 발자취" />;
