import { graphql, type PageProps, type HeadFC } from 'gatsby';
import { FaLayerGroup } from 'react-icons/fa';

import { Layout } from '@/components/layout';
import { SeriesCard } from '@/features/@series/components/series-card';
import { SEO } from '@/features/SEO/components';
import { Pagination } from '@/features/Pagination/components';

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
  console.log(data);
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
      {/* <GridLayoutForCard>
        {series.map((s) => (
          <SeriesCard
            key={s.fieldValue}
            title={s.fieldValue!}
            totalCount={s.totalCount}
            image={s.nodes[0]!.frontmatter?.image}
          />
        ))}
      </GridLayoutForCard> */}
      <Pagination pageContext={pageContext} />
    </Layout>
  );
};

export const query = graphql`
  query GetSeries($limit: Int, $skip: Int) {
    series: allMdx {
      group(field: frontmatter___series___seriesName, limit: $limit, skip: $skip) {
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

export default SeriesTemplate;

export const Head: HeadFC = () => <SEO title="Series - 공존의 발자취" />;
