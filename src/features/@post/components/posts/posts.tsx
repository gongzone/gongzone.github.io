import { graphql } from 'gatsby';

import { GridLayout } from '@/layout/grid-layout';
import { PostCard } from '@/features/@post/components/post-card';

interface PostsProps {
  posts: Queries.PostsDataFragment['nodes'];
}

export const Posts = ({ posts }: PostsProps) => {
  return (
    <GridLayout>
      {posts.map((p) => (
        <PostCard key={p.id} frontmatter={p.frontmatter} />
      ))}
    </GridLayout>
  );
};

export const query = graphql`
  fragment PostsData on MdxConnection {
    nodes {
      id
      ...PostCardData
    }
  }
`;
