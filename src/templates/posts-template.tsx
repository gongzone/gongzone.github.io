import { graphql, type PageProps, type HeadFC } from 'gatsby';

import { Routing } from '@/fixtures/routing';

import { SEO } from '@/components/seo';
import { BaseLayout } from '@/components/@layout/base-layout';
import { TagNavigation } from '@/components/tag-navigation';
import { PostCards } from '@/features/post/components/post-cards';
import { Pagination } from '@/components/pagination';

type PostsPageContext = {
  tag: string;
  limit: number;
  skip: number;
  totalPagination: number;
  postsPerPage: number;
  currentPage: number;
};

const PostsTemplate = ({
  data,
  pageContext,
}: PageProps<Queries.GetPostsQuery, PostsPageContext>) => {
  const { nodes: posts } = data.allMdx;

  return (
    <BaseLayout className="max-w-[1720px] py-10 px-6 sm:px-10 md:p-20">
      <TagNavigation currentTag={pageContext.tag} />
      <PostCards posts={posts} />
      <Pagination to={Routing.POSTS.toString()} pageContext={pageContext} />
    </BaseLayout>
  );
};

export const query = graphql`
  query GetPosts($limit: Int, $skip: Int) {
    allMdx(limit: $limit, skip: $skip, sort: { fields: frontmatter___date, order: DESC }) {
      ...PostCardsData
    }
  }
`;

export default PostsTemplate;

export const Head: HeadFC = () => (
  <SEO title="포스트 | 공존의 발자취" pathname={Routing.POSTS.toString()} />
);
