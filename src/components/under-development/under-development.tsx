import { BaseLayout } from '@/layout/base-layout';

export const UnderDevelopment = () => {
  return (
    <BaseLayout className="relative min-h-[calc(100vh-(172px+112px))]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-xl">현재 페이지는 개발 중입니다.</h2>
        <span>(Under Development)</span>
      </div>
    </BaseLayout>
  );
};
