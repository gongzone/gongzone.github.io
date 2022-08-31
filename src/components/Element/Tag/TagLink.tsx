import { Link } from 'gatsby';

import { TAG_QUERY_KIND_ENUM } from '@/components/TagNavList/enums';
import type { TagQueryKind } from '@/components/TagNavList/types';
import { slugifyTag } from '@/utils/slugify-tag';

interface TagLink {
  kind: TagQueryKind;
  currentTag?: string;
  fieldValue: string;
  totalCount: number;
}

export const TagLink = ({ kind, currentTag, fieldValue, totalCount }: TagLink) => {
  const currentStyle = currentTag === fieldValue && 'bg-[#232c42] text-amber-300';
  const to = kind === TAG_QUERY_KIND_ENUM.ALL ? 'posts' : 'series';

  return (
    <Link
      className={`hover-text-amber rounded-3xl bg-[#2e3039] px-4 py-2 text-sm shadow-xl xs:text-base ${currentStyle} `}
      to={`/${to}/tags/${slugifyTag(fieldValue)}`}
    >
      <span>{fieldValue}</span>
      <span> ({totalCount})</span>
    </Link>
  );
};
