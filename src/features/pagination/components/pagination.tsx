import { Link } from 'gatsby';

import { Routing } from '@/constants/routing';
import { paginateUtil } from '@/features/pagination/utils';

interface PaginationProps {
  target: string;
  pageContext: {
    tag?: string;
    limit: number;
    skip: number;
    totalPagination: number;
    postsPerPage: number;
    currentPage: number;
  };
}

export const Pagination = ({ target, pageContext }: PaginationProps) => {
  const { totalPagination, postsPerPage, currentPage } = pageContext;
  const currentTag = Routing.slugifyTag(pageContext.tag);
  const maxSize = 5;

  const { pages } = paginateUtil(
    totalPagination * postsPerPage,
    currentPage,
    postsPerPage,
    maxSize
  );

  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPagination;
  const numLink = (num: number) => {
    if (!!currentTag) return num === 1 ? `${currentTag}` : `${currentTag}${num}/`;

    return num === 1 ? `${target}` : `${target}${num}/`;
  };
  let prev = currentPage === 2 ? `${target}` : `${target}${currentPage - 1}/`;
  let next = `${target}${currentPage + 1}/`;

  if (!!currentTag) {
    prev = currentPage === 2 ? `${currentTag}` : `${currentTag}${currentPage - 1}/`;
    next = `${currentTag}${currentPage + 1}/`;
  }

  return (
    <div className="flex justify-center gap-2 py-10 px-4 sm:py-12 md:py-14">
      {!isFirst && (
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
              to={numLink(num)}
            >
              {num}
            </Link>
          </li>
        ))}
      </ul>

      {!isLast && (
        <Link className="hover-text-amber px-1 tracking-wider" to={`${next}`} rel="next">
          Next
        </Link>
      )}
    </div>
  );
};
