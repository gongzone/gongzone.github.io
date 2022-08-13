import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Tag } from '@/components/Tag';

export const PostItem = ({ post }) => {
  const { title, description, image, slug, tags, date, lastmod } = post;

  return (
    <li className="flex h-full w-full flex-col rounded-md bg-slate-800">
      <Link className="group relative w-full overflow-hidden" to={`/posts/${slug}`}>
        <GatsbyImage
          className="rounded-t-md transition-all duration-300 group-hover:scale-110 group-hover:saturate-200"
          image={getImage(image)}
          alt={title}
          objectFit="cover"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <Link className="flex items-center gap-2" to={`/posts/${slug}`}>
          <h2 className="text-amber-300">{title}</h2>
        </Link>

        <p className="relative text-ellipsis break-words line-clamp-3">{description}</p>

        <div className="mt-auto flex flex-wrap gap-2">
          {tags.map((tag: string) => (
            <Tag key={tag} tagName={tag} />
          ))}
        </div>

        <div className="mt-1 self-end">
          <span className="text-sm">📅 {lastmod ? `${lastmod} (수정)` : `${date}`}</span>
        </div>
      </div>
    </li>
  );
};
