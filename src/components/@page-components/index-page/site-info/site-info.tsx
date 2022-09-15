import { StaticImage } from 'gatsby-plugin-image';

export const SiteInfo = () => {
  return (
    <div className="my-8 flex select-none items-center justify-center gap-2 px-3 py-5 drop-shadow-md 2xl:my-10">
      <StaticImage
        className="h-[75px] w-[75px] 2xl:h-[90px] 2xl:w-[90px]"
        src="../../../../assets/images/blog.png"
        alt="blog-icon"
        placeholder="blurred"
      />
      <div className="flex flex-col gap-1">
        <span className="text-2xl font-bold text-emerald-400 2xl:text-3xl">GongZone</span>
        <p className="text-sm 2xl:text-base">웹 개발에 관한 글을 주로 씁니다.</p>
      </div>
    </div>
  );
};
