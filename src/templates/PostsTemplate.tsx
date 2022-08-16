import { graphql, type PageProps, type HeadFC } from 'gatsby';

import { Layout } from '@/components/Layout';
import { Tags } from '@/components/Tags';
import { Posts } from '@/features/blog/components/Posts';
import { SEO } from '@/features/SEO/components';
import { Pagination } from '@/features/Pagination/components';

const PostsTemplate = ({ data, pageContext }: PageProps<Queries.GetPostsQuery>) => {
  const { nodes: posts } = data.posts;
  console.log(pageContext);

  return (
    <Layout className="py-10 px-5 xs:px-14 md:p-20">
      <Tags />
      <Posts posts={posts} />
      <Pagination pageContext={pageContext} />
    </Layout>
  );
};

export const query = graphql`
  query GetPosts($limit: Int, $skip: Int) {
    posts: allMdx(limit: $limit, skip: $skip, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          description
          date(formatString: "YYYY년 MM월 DD일")
          lastmod(formatString: "YYYY년 MM월 DD일")
          slug
          tags
          image {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG, width: 517, height: 380)
            }
          }
        }
      }
    }
  }
`;

export default PostsTemplate;

export const Head: HeadFC = () => <SEO title="Posts | 공존의 발자취" />;
