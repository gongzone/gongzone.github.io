import { Link } from 'gatsby';

import { Routing } from '@/constants/routing';
import { ColorTag } from '@/components/tag';
import { PostTitle, PostDescription, PostDate } from '@/features/@post/components/post-card/atoms';

interface PostContents {
  title?: string;
  description?: string;
  slug?: string;
  date?: string;
  tags?: string[];
}

export const PostContents = ({ title, description, slug, date, tags }: PostContents) => {
  return (
    <div className="flex flex-1 flex-col gap-2 p-5">
      <Link className="flex items-center gap-2" to={Routing.POSTS.toString(slug)}>
        <PostTitle title={title} />
      </Link>

      <PostDescription description={description} />

      <ul className="mt-auto flex flex-wrap gap-2">
        {tags?.map((tag) => (
          <li key={tag}>
            <ColorTag tagName={tag} />
          </li>
        ))}
      </ul>

      <div className="mt-1 self-end">
        <PostDate date={date} />
      </div>
    </div>
  );
};
