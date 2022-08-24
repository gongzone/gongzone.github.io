import { Link } from 'gatsby';

import { slugifyTag } from '@/utils/slugify-tag';

interface TagLink {
  currentTag?: string;
  fieldValue: string;
  totalCount: number;
}

export const TagLink = ({ currentTag, fieldValue, totalCount }: TagLink) => {
  const currentStyle = currentTag === fieldValue && 'bg-[#232c42] text-amber-300';

  return (
    <Link
      className={`hover-text-amber rounded-3xl bg-[#2e3039] px-4 py-2 text-sm shadow-xl xs:text-base ${currentStyle} `}
      to={`/posts/tags/${slugifyTag(fieldValue)}`}
    >
      <span>{fieldValue}</span>
      <span> ({totalCount})</span>
    </Link>
  );
};
