import { graphql } from 'gatsby';

import { GridLayout } from '@/layout/grid-layout';
import { SeriesCard } from '@/features/@series/components/series-card';

interface SeriesCardProps {
  series: Queries.SeriesListDataFragment['group'];
}

export const SeriesList = ({ series }: SeriesCardProps) => {
  return (
    <GridLayout>
      {series.map((s) => (
        <SeriesCard
          key={s.fieldValue}
          title={s.fieldValue!}
          totalCount={s.totalCount}
          image={s.nodes[0]!.frontmatter?.image}
        />
      ))}
    </GridLayout>
  );
};

export const query = graphql`
  fragment SeriesListData on MdxConnection {
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
`;
