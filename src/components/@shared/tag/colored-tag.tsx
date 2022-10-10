const tagColorSet: {
  [key: string]: string;
} = {
  JavaScript: 'bg-yellow-400 text-black',
  React: 'bg-blue-500 text-black',
  Canvas: 'bg-red-700',
  Web: 'bg-teal-600',
  YarnBerry: 'bg-emerald-700',
  'Package-Manager': 'bg-orange-700',
};

type ColoredTagProps = {
  tagName: string | null;
  className?: string;
};

export const ColoredTag = ({ tagName, className }: ColoredTagProps) => {
  return (
    <span
      className={`rounded-xl px-2 py-1 text-xs shadow-lg ${
        tagColorSet[tagName!] ?? 'bg-gray-700'
      } ${className}`}
    >
      {tagName}
    </span>
  );
};
