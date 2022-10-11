import { Link, graphql } from 'gatsby';
import { Routing } from '@/fixtures/routing';

import { GatsbyImage, getImage, type ImageDataLike } from 'gatsby-plugin-image';

type SeriesListProps = {
  posts: Queries.SeriesListDataFragment['nodes'];
};

export const SeriesList = ({ posts }: SeriesListProps) => {
  return (
    <ul className="my-8">
      {posts.map(({ id, frontmatter }, i) => (
        <li key={id} className="mb-16 flex flex-col gap-4 sm:flex-row">
          <div className="flex flex-col sm:self-center">
            <Link className="hover-text-amber p-2" to={Routing.POSTS.toString(frontmatter?.slug)}>
              <span className="text-2xl font-bold">{i + 1}. </span>
              <span className="text-lg font-bold">{frontmatter?.title}</span>
            </Link>

            <span className="hidden text-sm text-zinc-400 sm:block">
              &bull; {frontmatter?.date} 작성
            </span>
          </div>

          <div className="mx-auto flex w-[90%] flex-col gap-3">
            <Link to={Routing.POSTS.toString(frontmatter?.slug)}>
              <GatsbyImage
                className="rounded-lg"
                image={getImage(frontmatter?.image as ImageDataLike)!}
                alt={frontmatter?.title as string}
              />
            </Link>

            <div className="flex flex-col gap-2">
              <h3 className="relative text-ellipsis break-words line-clamp-2">
                {frontmatter?.description}
              </h3>
              <span className="self-end text-sm sm:hidden">📅 {frontmatter?.date}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export const query = graphql`
  fragment SeriesListData on MdxConnection {
    nodes {
      id
      frontmatter {
        title
        slug
        date(formatString: "YYYY년 MM월 DD일")
        description
        image {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG, width: 517, height: 380)
          }
        }
      }
    }
  }
`;
