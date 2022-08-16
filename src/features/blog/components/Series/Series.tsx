import { SeriesItem } from '@/features/blog/components/Series/SeriesItem.tsx';

interface SeriesProps {
  series: Queries.IndexPageQuery['series']['group'];
}

export const Series = ({ series }: SeriesProps) => {
  return (
    <ul className="grid w-full grid-cols-1 gap-5 drop-shadow-lg sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {series.map((item) => {
        const { fieldValue, totalCount, nodes } = item;
        const image = nodes[0]!.frontmatter?.image;
        const allTags = nodes.reduce<string[]>(
          (prev, acc) => [...prev, ...(acc.frontmatter!.tags as string[])],
          []
        );
        const tags = Array.from(new Set(allTags));

        const seriesItem = {
          fieldValue,
          totalCount,
          image,
          tags,
        };

        return <SeriesItem key={fieldValue} seriesItem={seriesItem} />;
      })}
    </ul>
  );
};
