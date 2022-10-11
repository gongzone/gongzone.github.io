import { Link } from 'gatsby';

import { Routing } from '@/fixtures/routing';
import { getPaginationData } from './pagination.util';

interface PaginationProps {
  to: string;
  pageContext: {
    tag?: string;
    limit: number;
    skip: number;
    totalPagination: number;
    postsPerPage: number;
    currentPage: number;
  };
}

export const Pagination = ({ to, pageContext }: PaginationProps) => {
  const { totalPagination, postsPerPage, currentPage } = pageContext;
  const maxSize = 5;

  const { pages } = getPaginationData(
    totalPagination * postsPerPage,
    currentPage,
    postsPerPage,
    maxSize
  );

  let prev = currentPage === 2 ? `${to}` : `${to}${currentPage - 1}/`;
  let next = `${to}${currentPage + 1}/`;

  if (pageContext.tag) {
    prev =
      currentPage === 2
        ? `${Routing.slugifyTag(pageContext.tag)}`
        : `${Routing.slugifyTag(pageContext.tag)}${currentPage - 1}/`;

    next = `${Routing.slugifyTag(pageContext.tag)}${currentPage + 1}/`;
  }

  const getLink = (num: number) => {
    if (pageContext.tag) {
      return num === 1
        ? `${Routing.slugifyTag(pageContext.tag)}`
        : `${Routing.slugifyTag(pageContext.tag)}${num}/`;
    }

    return num === 1 ? `${to}` : `${to}${num}/`;
  };

  return (
    <div className="flex justify-center gap-2 py-10 px-4 sm:py-12 md:py-14">
      {currentPage !== 1 && (
        <Link className="hover-text-amber px-1 tracking-wider" to={prev} rel="prev">
          Prev
        </Link>
      )}

      <ul className="flex justify-center gap-1">
        {Array.from(pages).map((num) => (
          <li key={num}>
            <Link
              className={`hover-text-amber px-2 py-1 ${
                num === currentPage ? 'rounded-md bg-[#2e3039]' : ''
              }`}
              to={getLink(num)}
            >
              {num}
            </Link>
          </li>
        ))}
      </ul>

      {currentPage !== totalPagination && (
        <Link className="hover-text-amber px-1 tracking-wider" to={next} rel="next">
          Next
        </Link>
      )}
    </div>
  );
};
