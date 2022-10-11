import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';

import { Routing } from '@/fixtures/routing';

import { SEO } from '@/components/seo';
import { BaseLayout } from '@/components/@layout/base-layout';
import { PostHeader } from '@/features/post/components/post-header';
import { PostImage } from '@/features/post/components/post-image';
import { PostInfo } from '@/features/post/components/post-info';
import { Toc } from '@/features/post/components/toc';
import { Comments } from '@/features/post/components/comments';
import { SeriesBox } from '@/features/series/components/series-box';
import { SeriesNextPrev } from '@/features/series/components/series-next-prev';
import { mdxComponents } from '@/features/post/components/mdx-components';

const PostTemplate = ({ data, pageContext, children }) => {
  const {
    tableOfContents,
    fields: { timeToRead },
  } = data.post;

  const { title, description, date, lastmod, tags, image } = data.post?.frontmatter;

  const { seriesName, seriesIndex } = pageContext;

  return (
    <BaseLayout className="max-w-[712px] py-10 px-5 xs:px-14 sm:px-16 lg:px-0 2xl:max-w-[768px] 3xl:max-w-[812px]">
      <PostHeader />

      <div className="relative mb-4">
        <Toc tableOfContents={tableOfContents} />
        <PostImage title={title} image={image} />
        <PostInfo
          postInfoData={{ title, description, date, lastmod, tags, timeToRead: timeToRead.text }}
        />
        <SeriesBox seriesName={seriesName} seriesIndex={seriesIndex} seriesData={data.series} />

        <article className="prose prose-invert mt-8 mb-8 max-w-none md:prose-lg">
          <MDXProvider components={mdxComponents}>{children}</MDXProvider>
        </article>

        <SeriesNextPrev seriesIndex={seriesIndex} seriesData={data.series} />
      </div>

      <Comments />
    </BaseLayout>
  );
};

export const query = graphql`
  query ($id: String!, $seriesName: String) {
    post: mdx(id: { eq: $id }) {
      tableOfContents
      fields {
        timeToRead {
          text
        }
      }
      frontmatter {
        title
        description
        slug
        date(formatString: "YYYY년 MM월 DD일")
        lastmod(formatString: "YYYY년 MM월 DD일")
        tags
        image {
          publicURL
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
        }
      }
    }
    series: allMdx(
      filter: { frontmatter: { series: { seriesName: { eq: $seriesName, ne: null } } } }
      sort: { fields: frontmatter___series___seriesIndex, order: ASC }
    ) {
      totalCount
      nodes {
        id
        frontmatter {
          title
          slug
        }
      }
    }
  }
`;

export default PostTemplate;

export const Head = ({ data }) => {
  const { title, description, image, slug } = data.post.frontmatter;

  return (
    <SEO
      title={title}
      description={description}
      image={image?.publicURL}
      pathname={Routing.POSTS.toString(slug)}
    />
  );
};
