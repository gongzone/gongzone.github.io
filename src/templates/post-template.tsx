import { useState } from 'react';
import { graphql, Link, type HeadFC, type PageProps } from 'gatsby';
import { GatsbyImage, getImage, type ImageDataLike } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { TiArrowBack } from 'react-icons/ti';
import {
  FaAsterisk,
  FaPencilAlt,
  FaClock,
  FaPenNib,
  FaChevronUp,
  FaChevronDown,
  FaAngleDoubleRight,
} from 'react-icons/fa';

import { Routing } from '@/constants/routing';

import { BaseLayout } from '@/layout/base-layout';
import { SEO } from '@/features/seo/components';
import { ColorTag } from '@/features/tag/components/tag';
import { Toc } from '@/features/@post/components/toc';

interface PostPageContext {
  slug: string;
  seriesName: string;
  seriesIndex: number;
}

const PostTemplate = ({
  data,
  pageContext,
}: PageProps<Queries.GetSinglePostQuery, PostPageContext>) => {
  const [isSeriesOpen, setIsSeriesOpen] = useState(false);
  const { body, tableOfContents, timeToRead } = data.post!;
  const { title, description, date, lastmod, tags, image, embeddedImages } =
    data.post?.frontmatter!;

  const { seriesName, seriesIndex } = pageContext;

  return (
    <BaseLayout className="max-w-[768px] py-10 px-5 xs:px-14 sm:px-20 lg:max-w-[859px]">
      <div className="mb-8 flex items-center justify-between">
        <Link className="group inline-flex items-center gap-3" to="/posts">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-700 text-3xl shadow-lg duration-300 group-hover:-translate-x-1.5">
            <TiArrowBack />
          </span>
          <div className="flex flex-col text-sm text-zinc-200">
            <span>글 목록으로</span>
            <span>돌아가기</span>
          </div>
        </Link>
        <div className="flex flex-col">
          <span className="text-sm">Written by</span>
          <span className="text-lg font-bold">GongZone</span>
        </div>
      </div>

      <div className="relative">
        <Toc tableOfContents={tableOfContents} />
        <div>
          <div>
            <GatsbyImage
              className="rounded-lg"
              image={getImage(image as ImageDataLike)!}
              alt={title}
            />
          </div>

          <div className="mx-auto flex flex-col sm:max-w-[90%] md:max-w-[82%] lg:max-w-[75%]">
            <div className="my-8 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-2xl font-bold">
                <span className="rounded-full bg-zinc-700 p-2 text-base text-amber-300">
                  <FaAsterisk />
                </span>
                <h1>{title}</h1>
              </div>
              <div className="flex items-center gap-2 font-bold text-zinc-400">
                <div className="flex items-center gap-2">
                  <span>
                    <FaPencilAlt />
                  </span>
                  <span>{date}</span>
                </div>
                <span>/</span>
                <div className="flex items-center gap-2">
                  <span>
                    <FaClock />
                  </span>
                  <span>{timeToRead} min read</span>
                </div>
              </div>
              <h2>{description}</h2>
              <ul className="flex flex-wrap">
                {tags?.map((tag) => (
                  <li className="mb-2 mr-2" key={tag}>
                    <ColorTag className="block rounded-3xl px-4 py-2 text-base" tagName={tag} />
                  </li>
                ))}
              </ul>
              <div className="flex flex-col self-end font-bold text-zinc-400">
                {lastmod && (
                  <div className="flex items-center gap-2 text-sm">
                    <span>
                      <FaPenNib />
                    </span>
                    <span>이 게시글은 {lastmod} 수정되었습니다. </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {data.series.totalCount > 1 && (
            <div className="gap-8md:px-16 mt-10 mb-16 flex w-full justify-center">
              <div>
                <div className="mb-2 flex flex-col bg-zinc-800 p-5 shadow-md md:p-8">
                  <Link
                    to={Routing.slugifySeries(seriesName)}
                    className="mb-2 break-words text-xl font-bold text-emerald-400"
                  >
                    {seriesName}
                  </Link>

                  <button
                    className="flex items-center gap-2 text-zinc-400 hover:text-zinc-300"
                    onClick={() => setIsSeriesOpen(!isSeriesOpen)}
                  >
                    <div className="flex items-center gap-1">
                      <span>{data.series.totalCount}개의 게시글 (시리즈)</span>
                      <span>{isSeriesOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
                    </div>
                  </button>
                </div>

                {isSeriesOpen && (
                  <ol className="flex flex-col items-center justify-center gap-1 rounded-md py-5 text-zinc-400">
                    {data.series.nodes.map(({ id, frontmatter }, i) => {
                      return (
                        <li key={id} className="text-zinc-400 hover:text-zinc-300">
                          <Link
                            className={i + 1 === seriesIndex ? 'font-bold text-emerald-400' : ''}
                            to={`/posts/${frontmatter?.slug}`}
                          >
                            {i + 1}. {frontmatter?.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ol>
                )}
              </div>
            </div>
          )}
        </div>

        <article className="prose prose-invert my-8 max-w-none">
          <MDXRenderer embeddedImages={embeddedImages}>{body}</MDXRenderer>
        </article>

        {data.series.totalCount > 1 && (
          <div className="py-12">
            {seriesIndex > 1 && (
              <div className="flex items-center justify-center gap-2">
                <span className="text-emerald-400">이전 글 링크</span>
                <span className="text-emerald-400">
                  <FaAngleDoubleRight />
                </span>
                <Link
                  className="text-lg text-zinc-400 transition-colors duration-300 hover:text-zinc-300"
                  to={`/posts/${data.series.nodes[seriesIndex - 2]?.frontmatter?.slug}`}
                >
                  {data.series.nodes[seriesIndex - 2]?.frontmatter?.title}
                </Link>
              </div>
            )}

            {data.series.nodes.length !== seriesIndex && (
              <div className="flex items-center justify-center gap-2">
                <span className="text-emerald-400">다음 글 링크</span>
                <span className="text-emerald-400">
                  <FaAngleDoubleRight />
                </span>
                <Link
                  className="text-lg text-zinc-400 transition-colors duration-300 hover:text-zinc-300"
                  to={`/posts/${data.series.nodes[seriesIndex]?.frontmatter?.slug}`}
                >
                  {data.series.nodes[seriesIndex]?.frontmatter?.title}
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </BaseLayout>
  );
};

export const query = graphql`
  query GetSinglePost($slug: String, $seriesName: String) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      tableOfContents
      timeToRead
      frontmatter {
        title
        description
        date(formatString: "YYYY년 MM월 DD일")
        lastmod(formatString: "YYYY년 MM월 DD일")
        tags
        image {
          publicURL
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
    series: allMdx(
      filter: { frontmatter: { series: { seriesName: { eq: $seriesName } } } }
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

export const Head: HeadFC<Queries.GetSinglePostQuery, PostPageContext> = ({ data }) => {
  const { title, description, image } = data.post?.frontmatter!;

  return <SEO title={title} description={description!} image={image?.publicURL!} />;
};
