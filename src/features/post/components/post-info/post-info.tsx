import { FaAsterisk, FaPencilAlt, FaClock, FaPenNib } from 'react-icons/fa';

import { ColoredTag } from '@/components/@shared/tag/colored-tag';

type PostInfoProps = {
  postInfoData: {
    title: string;
    description: string;
    date: string;
    lastmod: string;
    tags: string[];
    timeToRead: string;
  };
};

export const PostInfo = ({ postInfoData }: PostInfoProps) => {
  const { title, description, timeToRead, date, lastmod, tags } = postInfoData;

  return (
    <div className="mx-auto flex flex-col sm:max-w-[90%] md:max-w-[82%] lg:max-w-[75%]">
      <div className="my-8 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-zinc-700 p-2 text-base text-amber-300">
            <FaAsterisk />
          </span>
          <h1 className="text-2xl font-bold md:text-3xl">{title}</h1>
        </div>
        <div className="flex items-center gap-2 font-bold text-zinc-400">
          <div className="flex items-center gap-2">
            <span>
              <FaPencilAlt />
            </span>
            <span>{date}</span>
          </div>
          <span>/</span>
          <div className="flex items-center gap-2">
            <span>
              <FaClock />
            </span>
            <span>{timeToRead}</span>
          </div>
        </div>
        <h2 className="md:text-lg">{description}</h2>
        <ul className="flex flex-wrap">
          {tags?.map((tag) => (
            <li className="mb-2 mr-2" key={tag}>
              <ColoredTag className="block rounded-3xl px-4 py-2 text-base" tagName={tag} />
            </li>
          ))}
        </ul>
        <div className="flex flex-col self-end font-bold text-zinc-400">
          {lastmod && (
            <div className="flex items-center gap-2 text-sm">
              <span>
                <FaPenNib />
              </span>
              <span>이 게시글은 {lastmod} 수정되었습니다. </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
