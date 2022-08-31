import { Link } from 'gatsby';
import { GatsbyImage, getImage, type ImageDataLike } from 'gatsby-plugin-image';
import { CgList, CgAwards } from 'react-icons/cg';

import type { IndexPageSeriesItem } from '@/types/graphql';
import { slugifySeriesName } from '@/utils/slugify-series-name';

import { ColoredTag } from '@/components/Element/Tag';

interface SeriesItemProps {
  seriesItem: IndexPageSeriesItem;
}

export const SeriesItem = ({ seriesItem }: SeriesItemProps) => {
  const { fieldValue, totalCount, image, tags } = seriesItem;

  return (
    <li className="flex h-full w-full flex-col rounded-md">
      <Link
        className="group relative w-full overflow-hidden"
        to={`/series/${slugifySeriesName(fieldValue)}`}
      >
        <GatsbyImage
          className="rounded-md"
          image={getImage(image as ImageDataLike)!}
          alt={fieldValue!}
          objectFit="cover"
        />
        <div className="absolute top-0 bottom-0 right-0 flex w-[44.8%] items-center justify-center gap-3 rounded-r-md bg-black/80 text-xl transition-all duration-300 group-hover:text-3xl">
          <span>
            <CgList />
          </span>
          <span>{totalCount}</span>
        </div>
      </Link>

      <div className="mt-3 mb-2 flex flex-col gap-2">
        <Link className="flex items-center gap-1" to={`/posts/`}>
          <span className="text-lg">
            <CgAwards />
          </span>
          <h2 className="text-ellipsis break-words line-clamp-2">{fieldValue}</h2>
        </Link>
      </div>

      {/* <ul className="flex flex-wrap gap-2">
        {tags.map((tag: string) => (
          <li key={tag}>
            <ColoredTag tagName={tag} />
          </li>
        ))}
      </ul> */}
    </li>
  );
};
