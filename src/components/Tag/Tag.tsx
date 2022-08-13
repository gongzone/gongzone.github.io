interface TagProps {
  tagName: string;
}

export const tagColorSet = {
  JavaScript: 'bg-yellow-400 text-black',
  React: 'bg-blue-500 text-black',
  Canvas: 'bg-red-700',
  YarnBerry: 'bg-emerald-700',
};

export const Tag = ({ tagName }: TagProps) => {
  return (
    <span
      className={`${tagColorSet[tagName] ?? 'bg-gray-700'} rounded-xl px-2 py-1 text-xs shadow-lg`}
    >
      {tagName}
    </span>
  );
};
