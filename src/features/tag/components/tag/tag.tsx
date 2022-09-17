import { Link } from 'gatsby';
import { Routing } from '@/constants/routing';

const tagColorSet: {
  [key: string]: string;
} = {
  JavaScript: 'bg-yellow-400 text-black',
  React: 'bg-blue-500 text-black',
  Canvas: 'bg-red-700',
  Browser: 'bg-teal-600',
  YarnBerry: 'bg-emerald-700',
  'Package-Manager': 'bg-orange-700',
};

interface ColorTagProps {
  tagName: string | null;
  className?: string;
}

export const ColorTag = ({ tagName, className }: ColorTagProps) => {
  const tagColor = tagColorSet[tagName!] ?? 'bg-gray-700';

  return (
    <span className={`rounded-xl px-2 py-1 text-xs shadow-lg ${tagColor} ${className}`}>
      {tagName}
    </span>
  );
};

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
