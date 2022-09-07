import { graphql, type PageProps, type HeadFC } from 'gatsby';

import { Routing } from '@/constants/routing';

import { BaseLayout } from '@/layout/base-layout';
import { TagNav } from '@/features/tag/components/tag-nav';
import { Posts } from '@/features/@post/components/posts';
import { SEO } from '@/features/seo/components';
import { Pagination } from '@/features/pagination/components';

interface PostsPageContext {
  tag: string;
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
    <BaseLayout className="py-10 px-5 xs:px-14 md:p-20">
      <TagNav currentTag={pageContext.tag} />
      <Posts posts={posts} />
      <Pagination target={Routing.POSTS.toString()} pageContext={pageContext} />
    </BaseLayout>
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