import { Link } from 'gatsby';

import { Routing } from '@/fixtures/routing';

type FilteringTagProps = {
  currentTag?: string;
  tagName: string;
  totalCount: number;
};

export const FilteringTag = ({ currentTag, tagName, totalCount }: FilteringTagProps) => {
  return (
    <Link
      className={`hover-text-amber rounded-3xl bg-[#2e3039] px-4 py-2 text-sm shadow-xl xs:text-base ${
        currentTag === tagName ? 'bg-[#232c42] text-amber-300' : ''
      }`}
      to={Routing.slugifyTag(tagName)}
    >
      <span>{tagName}</span>
      <span> ({totalCount})</span>
    </Link>
  );
};
