import { Link, graphql } from 'gatsby';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import { CgList, CgAwards } from 'react-icons/cg';

import { Routing } from '@/fixtures/routing';

import { CardImage } from '@/components/@shared/card-image';

type SeriesCardProps = {
  title?: string;
  totalCount?: number;
  image?: {
    readonly childImageSharp: { readonly gatsbyImageData: IGatsbyImageData } | null;
  } | null;
};

export const SeriesCard = ({ title, totalCount, image }: SeriesCardProps) => {
  return (
    <li className="flex h-full w-full flex-col rounded-md">
      <Link to={Routing.slugifySeries(title!)}>
        <CardImage title={title} image={image}>
          <div className="absolute top-0 bottom-0 right-0 flex w-[44.8%] items-center justify-center gap-3 rounded-tr-md bg-black/80 text-xl">
            <CgList />
            <span>{totalCount}</span>
          </div>
        </CardImage>
      </Link>

      <div className="mt-3 mb-2 flex flex-col gap-2">
        <Link to={Routing.slugifySeries(title!)}>
          <div className="flex items-center gap-1">
            <span className="text-lg">
              <CgAwards />
            </span>
            <h2 className="text-ellipsis break-words line-clamp-2">{title}</h2>
          </div>
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
