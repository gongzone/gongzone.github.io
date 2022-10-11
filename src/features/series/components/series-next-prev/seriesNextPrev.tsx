import { Link } from 'gatsby';
import { FaAngleDoubleRight } from 'react-icons/fa';

import { Routing } from '@/fixtures/routing';

type SeriesNextPrevProps = {
  seriesIndex: number;
  seriesData: {
    totalCount: number;
    nodes: {
      id: string;
      frontmatter: {
        title: string;
        slug: string;
      };
    }[];
  };
};

export const SeriesNextPrev = ({ seriesIndex, seriesData }: SeriesNextPrevProps) => {
  if (seriesData.totalCount <= 1) return;

  const prevData = seriesData.nodes[seriesIndex - 2]?.frontmatter;
  const nextData = seriesData.nodes[seriesIndex]?.frontmatter;

  return (
    <div className="py-12">
      {seriesIndex > 1 && (
        <div className="flex flex-col items-center justify-center gap-2 ">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">이전 글 링크</span>
            <span className="text-emerald-400">
              <FaAngleDoubleRight />
            </span>
          </div>
          <Link
            className="text-lg text-zinc-400 transition-colors duration-300 hover:text-zinc-300"
            to={Routing.POSTS.toString(prevData?.slug)}
          >
            {prevData?.title}
          </Link>
        </div>
      )}

      {seriesData.nodes.length !== seriesIndex && (
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">다음 글 링크</span>
            <span className="text-emerald-400">
              <FaAngleDoubleRight />
            </span>
          </div>
          <Link
            className="text-lg text-zinc-400 transition-colors duration-300 hover:text-zinc-300"
            to={Routing.POSTS.toString(nextData?.slug)}
          >
            {nextData?.title}
          </Link>
        </div>
      )}
    </div>
  );
};
