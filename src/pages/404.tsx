import { HeadFC, Link } from 'gatsby';

import { SEO } from '@/features/seo/components';
import { HeaderLogo } from '@/components/header/atoms';

const NotFoundPage = () => {
  return (
    <div className="flex h-screen w-full items-center p-6 md:p-20">
      <div className="mx-auto ">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-7xl">404</h2>
          <span className="text-xl">해당 페이지를 찾을 수 없습니다. 🤔</span>
          <HeaderLogo />
        </div>

        <div className="mt-8 flex flex-col items-center">
          <Link className="hover-text-amber rounded-md bg-zinc-700 px-4 py-2 shadow-sm" to="/">
            홈페이지로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <SEO title="공존의 발자취" />;
