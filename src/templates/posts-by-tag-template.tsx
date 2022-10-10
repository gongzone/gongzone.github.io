import { graphql, type PageProps, type HeadFC } from 'gatsby';

import { Routing } from '@/fixtures/routing';

import { SEO } from '@/features/seo/components';
import { BaseLayout } from '@/components/layout/base-layout';
import { TagNav } from '@/features/tag/components/tag-nav';
import { PostCards } from '@/features/@post/components/post-cards';
import { Pagination } from '@/features/pagination/components';

interface PostByTagPageContext {
  tag: string;
  limit: number;
  skip: number;
  totalPagination: number;
  postsPerPage: number;
  currentPage: number;
}

const PostsByTagTemplate = ({
  data,
  pageContext,
}: PageProps<Queries.GetPostsByTagQuery, PostByTagPageContext>) => {
  const { nodes: posts } = data.allMdx;

  return (
    <BaseLayout className="max-w-[1720px] py-10 px-6 sm:px-10 md:p-20">
      <TagNav currentTag={pageContext.tag} />
      <PostCards posts={posts} />
      <Pagination target={Routing.POSTS.toString()} pageContext={pageContext} />
    </BaseLayout>
  );
};

export const query = graphql`
  query GetPostsByTag($tag: String, $limit: Int, $skip: Int) {
    allMdx(
      limit: $limit
      skip: $skip
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      ...PostCardsData
    }
  }
`;

export default PostsByTagTemplate;

export const Head: HeadFC = () => (
  <SEO title="Posts - 공존의 발자취" pathname={Routing.POSTS.toString()} />
);
