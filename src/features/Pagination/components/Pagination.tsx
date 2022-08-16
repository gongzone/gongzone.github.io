import { Link } from 'gatsby';

import { paginateUtil } from '@/features/Pagination/utils';

export const Pagination = ({ pageContext }) => {
  const { totalPagination, postsPerPage, currentPage } = pageContext;
  const currentTag = pageContext.tag ? pageContext.tag.toLowerCase().replace('-', '') : undefined;
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
    if (!!currentTag)
      return num === 1 ? `/posts/tags/${currentTag}` : `/posts/tags/${currentTag}/${num}`;

    return num === 1 ? '/posts' : `/posts/${num}`;
  };
  let prev = currentPage === 2 ? '/posts' : `/posts/${currentPage - 1}`;
  let next = `/posts/${currentPage + 1}`;

  if (!!currentTag) {
    prev =
      currentPage === 2
        ? `/posts/tags/${currentTag}`
        : `/posts/tags/${currentTag}/${currentPage - 1}`;
    next = `posts/tags/${currentTag}/${currentPage + 1}`;
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
                num === currentPage ? 'rounded-md bg-[#232c42]' : ''
              }`}
              to={numLink(num)}
            >
              {num}
            </Link>
          </li>
        ))}
      </ul>

      {!isLast && (
        <Link className="hover-text-amber px-1 tracking-wider" to={`/posts/${next}`} rel="next">
          Next
        </Link>
      )}
    </div>
  );
};
