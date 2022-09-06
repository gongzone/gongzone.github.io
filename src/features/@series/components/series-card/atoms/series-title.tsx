import { CgAwards } from 'react-icons/cg';

interface SeriesTitleProps {
  title?: string;
}

export const SeriesTitle = ({ title }: SeriesTitleProps) => {
  return (
    <div className="flex items-center gap-1">
      <span className="text-lg">
        <CgAwards />
      </span>
      <h2 className="text-ellipsis break-words line-clamp-2">{title}</h2>
    </div>
  );
};
