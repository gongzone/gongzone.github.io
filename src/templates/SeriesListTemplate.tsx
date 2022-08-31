import { graphql, type PageProps, type HeadFC } from 'gatsby';

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

  return (
    <Layout className="py-10 px-5 xs:px-14 md:p-20">
      <SeriesList posts={nodes} />
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
