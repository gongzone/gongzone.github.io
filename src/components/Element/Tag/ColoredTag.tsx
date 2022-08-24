export const tagColorSet: {
  [key: string]: string;
} = {
  JavaScript: 'bg-yellow-400 text-black',
  React: 'bg-blue-500 text-black',
  Canvas: 'bg-red-700',
  YarnBerry: 'bg-emerald-700',
};

interface TagProps {
  tagName: string | null;
  className?: string;
}

export const ColoredTag = ({ tagName, className }: TagProps) => {
  const tagColor = tagColorSet[tagName!] ?? 'bg-gray-700';

  return (
    <span className={`rounded-xl px-2 py-1 text-xs shadow-lg ${tagColor} ${className}`}>
      {tagName}
    </span>
  );
};
