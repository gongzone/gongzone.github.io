import { useState } from 'react';

import { Link } from 'gatsby';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

import { Routing } from '@/fixtures/routing';

type SeriesBoxProps = {
  seriesName: string;
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

export const SeriesBox = ({ seriesName, seriesIndex, seriesData }: SeriesBoxProps) => {
  const [isSeriesOpen, setIsSeriesOpen] = useState(false);

  if (seriesData.totalCount <= 1) return;

  return (
    <div className="gap-8md:px-16 mt-10 mb-16 flex w-full justify-center">
      <div>
        <div className="mb-2 flex flex-col bg-zinc-800 p-5 shadow-md md:p-8">
          <Link
            to={Routing.slugifySeries(seriesName)}
            className="mb-2 break-words text-xl font-bold text-emerald-400"
          >
            {seriesName}
          </Link>

          <button
            className="flex items-center gap-2 text-zinc-400 hover:text-zinc-300"
            onClick={() => setIsSeriesOpen(!isSeriesOpen)}
          >
            <div className="flex items-center gap-1">
              <span>{seriesData.totalCount}개의 게시글 (시리즈)</span>
              <span>{isSeriesOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
          </button>
        </div>

        {isSeriesOpen && (
          <ol className="flex flex-col items-center justify-center gap-1 rounded-md py-5 text-zinc-400">
            {seriesData.nodes.map(({ id, frontmatter }, i) => {
              return (
                <li key={id} className="text-zinc-400 hover:text-zinc-300">
                  <Link
                    className={i + 1 === seriesIndex ? 'font-bold text-emerald-400' : ''}
                    to={Routing.POSTS.toString(frontmatter?.slug)}
                  >
                    {i + 1}. {frontmatter?.title}
                  </Link>
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </div>
  );
};
