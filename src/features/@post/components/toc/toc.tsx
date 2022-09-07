import { useState } from 'react';
import { Link } from 'gatsby';

import { useIntersectionObserver } from '@/features/@post/hooks/use-intersection-observer';

import { FaAlignLeft } from 'react-icons/fa';

const Heading = ({ entry, activeId }) => {
  const activeStyle = activeId === `${entry.url.replace('#', '')}` ? 'text-[#d1d5db]' : '';
  console.log(activeStyle);
  return (
    <>
      <Link className={`transition-colors duration-300 ${activeStyle}`} to={entry.url}>
        {entry.title}
      </Link>
      {entry.items && (
        <ul className="flex list-disc flex-col gap-1 pl-6 pt-1">
          {entry.items.map((heading) => (
            <li key={heading.title}>
              <Heading entry={heading} activeId={activeId} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export const Toc = ({ tableOfContents }) => {
  const [activeId, setActiveId] = useState();
  useIntersectionObserver(setActiveId);

  const { items } = tableOfContents;

  return (
    <nav
      className="absolute left-full ml-20 hidden h-full w-[240px] 2xl:block"
      aria-label="table-of-contents"
    >
      <div className="sticky top-14">
        <div className="flex items-center gap-2 text-xl">
          <span>
            <FaAlignLeft />
          </span>
          <span>Table of Contents</span>
        </div>

        <ul className="scrollbar flex max-h-[calc(100vh-248px)] flex-col gap-2 overflow-auto rounded-lg p-5 text-sm text-zinc-400">
          {items.map((heading) => (
            <li key={heading.title}>
              <Heading entry={heading} activeId={activeId} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
