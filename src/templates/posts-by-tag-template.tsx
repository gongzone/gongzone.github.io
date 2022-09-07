import { graphql, type PageProps, type HeadFC } from 'gatsby';

import { Layout } from '@/components/layout';
import { TagNav } from '@/features/tag/components/tag-nav';
import { Posts } from '@/features/@post/components/posts';
import { SEO } from '@/features/seo/components';
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
  const { nodes: posts } = data.posts;

  return (
    <Layout className="py-10 px-5 xs:px-14 md:p-20">
      <TagNav currentTag={pageContext.tag} />
      <Posts posts={posts} />
      <Pagination pageContext={pageContext} />
    </Layout>
  );
};

export const query = graphql`
  query GetPostsByTag($tag: String, $limit: Int, $skip: Int) {
    posts: allMdx(
      limit: $limit
      skip: $skip
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      ...PostsData
    }
  }
`;

export default PostsByTagTemplate;

export const Head: HeadFC = () => <SEO title="Posts - 공존의 발자취" />;
