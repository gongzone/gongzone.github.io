import { PostItem } from '@/features/blog/components/Posts/PostItem';

export const Posts = ({ posts }) => {
  return (
    <ul className="grid w-full grid-cols-1 gap-5 drop-shadow-lg sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {posts.map((post) => (
        <PostItem key={post.id} post={post.frontmatter} />
      ))}
    </ul>
  );
};
