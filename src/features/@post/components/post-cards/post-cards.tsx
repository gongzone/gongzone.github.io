import { graphql } from 'gatsby';

import { GridLayout } from '@/components/layout/grid-layout';
import { PostCard } from './post-card';

interface PostCardsProps {
  posts: Queries.PostsDataFragment['nodes'];
}

export const PostCards = ({ posts }: PostCardsProps) => {
  return (
    <GridLayout>
      {posts.map((post) => (
        <PostCard key={post.id} frontmatter={post.frontmatter} />
      ))}
    </GridLayout>
  );
};

export const query = graphql`
  fragment PostCardsData on MdxConnection {
    nodes {
      id
      ...PostCardData
    }
  }
`;
