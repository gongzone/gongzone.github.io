import { BsFillTagsFill } from 'react-icons/bs';

export const TagNavTop = () => {
  return (
    <div className="mb-3 flex items-center gap-2">
      <span>
        <BsFillTagsFill />
      </span>
      <span>태그 목록</span>
    </div>
  );
};
