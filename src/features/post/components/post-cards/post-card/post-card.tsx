import { Link, graphql } from 'gatsby';

import { Routing } from '@/fixtures/routing';

import { CardImage } from '@/components/@shared/card-image';
import { ColoredTag } from '@/components/@shared/tag/colored-tag';

type PostCardProps = {
  frontmatter: Queries.PostCardDataFragment['frontmatter'];
};

export const PostCard = ({ frontmatter }: PostCardProps) => {
  return (
    <li className="flex h-full w-full flex-col rounded-md  bg-gradient-to-tl from-zinc-900 to-slate-800">
      <Link to={Routing.POSTS.toString(frontmatter?.slug)}>
        <CardImage title={frontmatter?.title} image={frontmatter?.image} />
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <Link className="flex items-center gap-2" to={Routing.POSTS.toString(frontmatter?.slug)}>
          <h2 className="text-amber-300">{frontmatter?.title}</h2>
        </Link>

        <p className="relative text-ellipsis break-words line-clamp-2">
          {frontmatter?.description}
        </p>

        <ul className="mt-auto flex flex-wrap gap-2">
          {frontmatter?.tags?.map((tagName) => (
            <li key={tagName}>
              <ColoredTag tagName={tagName} />
            </li>
          ))}
        </ul>

        <div className="mt-1 self-end">
          <span className="text-sm">📅 {frontmatter?.date}</span>
        </div>
      </div>
    </li>
  );
};

export const query = graphql`
  fragment PostCardData on Mdx {
    frontmatter {
      title
      description
      slug
      tags
      date(formatString: "YYYY년 MM월 DD일")
      image {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, width: 517, height: 380)
        }
      }
    }
  }
`;
