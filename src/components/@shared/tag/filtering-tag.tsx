import { Link } from 'gatsby';

import { Routing } from '@/fixtures/routing';

interface LinkTagProps {
  currentTag?: string;
  tagName: string;
  totalCount: number;
}

export const LinkTag = ({ currentTag, tagName, totalCount }: LinkTagProps) => {
  const currentStyle = currentTag === tagName && 'bg-[#232c42] text-amber-300';

  return (
    <Link
      className={`hover-text-amber rounded-3xl bg-[#2e3039] px-4 py-2 text-sm shadow-xl xs:text-base ${currentStyle} `}
      to={Routing.slugifyTag(tagName)}
    >
      <span>{tagName}</span>
      <span> ({totalCount})</span>
    </Link>
  );
};
