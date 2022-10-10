import { Link, graphql } from 'gatsby';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

import { Routing } from '@/fixtures/routing';

import { CardImage } from '@/components/@shared/card-image';
import { CountOverlay, SeriesTitle } from '@/features/@series/components/series-card/atoms';

interface SeriesCardProps {
  title?: string;
  totalCount?: number;
  image?: {
    readonly childImageSharp: { readonly gatsbyImageData: IGatsbyImageData } | null;
  } | null;
}

export const SeriesCard = ({ title, totalCount, image }: SeriesCardProps) => {
  return (
    <li className="flex h-full w-full flex-col rounded-md">
      <Link to={Routing.slugifySeries(title)}>
        <CardImage title={title} image={image}>
          <CountOverlay count={totalCount} />
        </CardImage>
      </Link>

      <div className="mt-3 mb-2 flex flex-col gap-2">
        <Link to={Routing.slugifySeries(title)}>
          <SeriesTitle title={title} />
        </Link>
      </div>
    </li>
  );
};

export const query = graphql`
  fragment SeriesCardData on MdxGroupConnection {
    fieldValue
    totalCount
  }
`;
