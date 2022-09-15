import { graphql, type PageProps, type HeadFC } from 'gatsby';
import { FaLayerGroup } from 'react-icons/fa';

import { Routing } from '@/constants/routing';

import { BaseLayout } from '@/layout/base-layout';
import { SeriesCards } from '@/features/@series/components/series-cards';
import { SEO } from '@/features/seo/components';
import { Pagination } from '@/features/pagination/components';

interface SeriesPageContext {
  limit: number;
  skip: number;
  totalPagination: number;
  postsPerPage: number;
  currentPage: number;
}

const SeriesTemplate = ({
  data,
  pageContext,
}: PageProps<Queries.GetSeriesQuery, SeriesPageContext>) => {
  const { group: series } = data.series;

  return (
    <BaseLayout className="max-w-[1720px] py-10 px-5 xs:px-14 md:p-20">
      <div className="mb-4">
        <div className="mb-2 inline-flex items-center gap-2 rounded-3xl bg-[#2e3039] px-4 py-2">
          <FaLayerGroup />
          <span className="text-lg">전체 시리즈 목록</span>
        </div>
        <div className="pl-4">
          <span className="text-zinc-400">&bull; 시리즈 별로 포스트를 탐방해보세요.</span>
        </div>
      </div>

      <SeriesCards series={series} />
      <Pagination target={Routing.SERIES.toString()} pageContext={pageContext} />
    </BaseLayout>
  );
};

export const query = graphql`
  query GetSeries($limit: Int = 8, $skip: Int = 0) {
    series: allMdx {
      ...SeriesCardsData
    }
  }
`;

export default SeriesTemplate;

export const Head: HeadFC = () => (
  <SEO title="Series - 공존의 발자취" pathname={Routing.SERIES.toString()} />
);
