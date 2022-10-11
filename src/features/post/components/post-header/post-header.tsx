import { Link } from 'gatsby';
import { TiArrowBack } from 'react-icons/ti';

import { Routing } from '@/fixtures/routing';

export const PostHeader = () => {
  return (
    <div className="mb-8 flex items-center justify-between">
      <Link className="group inline-flex items-center gap-3" to={Routing.POSTS.toString()}>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-700 text-3xl shadow-lg duration-300 group-hover:-translate-x-1.5">
          <TiArrowBack />
        </span>
        <div className="flex flex-col text-sm text-zinc-200">
          <span>글 목록으로</span>
          <span>돌아가기</span>
        </div>
      </Link>
      <div className="flex flex-col">
        <span className="text-sm">Written by</span>
        <span className="text-lg font-bold">GongZone</span>
      </div>
    </div>
  );
};
