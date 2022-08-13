import { graphql } from 'gatsby';
import { Posts } from '@/features/blog/components/Posts';

const PostsTemplate = ({ data }) => {
  const { nodes: posts } = data.posts;

  return (
    <div>
      <Posts posts={posts} />
    </div>
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
