import { CgList } from 'react-icons/cg';

interface CountOverlayProps {
  count?: number;
}

export const CountOverlay = ({ count }: CountOverlayProps) => {
  return (
    <div className="absolute top-0 bottom-0 right-0 flex w-[44.8%] items-center justify-center gap-3 rounded-tr-md bg-black/80 text-xl">
      <span>
        <CgList />
      </span>
      <span>{count}</span>
    </div>
  );
};
