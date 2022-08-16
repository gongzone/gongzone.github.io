import { graphql, type HeadFC, type PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Layout } from '@/components/Layout';
import { SEO } from '@/features/SEO/components';

const PostTemplate = ({ data }: PageProps<Queries.GetSinglePostQuery>) => {
  const { body } = data.post!;
  const { title, description, date, lastmod, tags, image, embeddedImages } =
    data.post?.frontmatter!;

  return (
    <Layout>
      {title} : {description}
    </Layout>
  );
};

export const query = graphql`
  query GetSinglePost($slug: String) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        description
        date(formatString: "YYYY년 MM월 DD일")
        lastmod(formatString: "YYYY년 MM월 DD일")
        tags
        image {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
        }
        embeddedImages {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default PostTemplate;

export const Head: HeadFC = ({ data }) => {
  const { title, description, date, lastmod, tags, image, embeddedImages } =
    data.post?.frontmatter!;

  return <SEO title={title} description={description} />;
};
