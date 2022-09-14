import { StaticImage } from 'gatsby-plugin-image';

export const SiteInfo = () => {
  return (
    <div className="my-8 flex select-none items-center justify-center gap-2 px-3 py-5 drop-shadow-md 2xl:my-10">
      <StaticImage
        src="../../../../assets/images/blog.png"
        alt="blog-icon"
        placeholder="blurred"
        width={75}
        height={75}
      />
      <div className="flex flex-col gap-1">
        <span className="text-2xl font-bold text-emerald-400">GongZone</span>
        <p className="text-sm">웹 개발에 관한 글을 주로 씁니다.</p>
      </div>
    </div>
  );
};
