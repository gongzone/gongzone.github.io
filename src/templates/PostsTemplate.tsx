import { graphql, type PageProps, type HeadFC } from 'gatsby';

import { Layout } from '@/components/layout';
import { TagNav } from '@/features/tag/components/tag-nav';
import { Posts } from '@/features/@post/components/posts';
import { SEO } from '@/features/SEO/components';
import { Pagination } from '@/features/Pagination/components';

interface PostsPageContext {
  limit: number;
  skip: number;
  totalPagination: number;
  postsPerPage: number;
  currentPage: number;
}

const PostsTemplate = ({
  data,
  pageContext,
}: PageProps<Queries.GetPostsQuery, PostsPageContext>) => {
  const { nodes: posts } = data.posts;

  return (
    <Layout className="py-10 px-5 xs:px-14 md:p-20">
      <TagNav currentTag="ALL" />
      <Posts posts={posts} />
      <Pagination pageContext={pageContext} />
    </Layout>
  );
};

export const query = graphql`
  query GetPosts($limit: Int, $skip: Int) {
    posts: allMdx(limit: $limit, skip: $skip, sort: { fields: frontmatter___date, order: DESC }) {
      ...PostsData
    }
  }
`;

export default PostsTemplate;

export const Head: HeadFC = () => <SEO title="Posts - 공존의 발자취" />;
