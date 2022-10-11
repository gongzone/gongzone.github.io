import { graphql } from 'gatsby';

import { GridLayout } from '@/components/@layout/grid-layout';
import { SeriesCard } from './series-card';

type SeriesCardsProps = {
  series: Queries.SeriesCardsDataFragment['group'];
};

export const SeriesCards = ({ series }: SeriesCardsProps) => {
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
  fragment SeriesCardsData on MdxConnection {
    group(field: frontmatter___series___seriesName, limit: $limit, skip: $skip) {
      ...SeriesCardData
      nodes {
        frontmatter {
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, width: 517, height: 380)
            }
          }
        }
      }
    }
  }
`;
