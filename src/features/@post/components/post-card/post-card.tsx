import { Link, graphql } from 'gatsby';

import { Routing } from '@/constants/routing';
import { CardImage } from '@/components/@shared/card-image';
import { PostContents } from '@/features/@post/components/post-card/molecules';

interface PostCardProps {
  frontmatter: Queries.PostCardDataFragment['frontmatter'];
}

export const PostCard = ({ frontmatter }: PostCardProps) => {
  return (
    <li className="flex h-full w-full flex-col rounded-md  bg-gradient-to-tl from-zinc-900 to-slate-800">
      <Link className="group" to={Routing.POSTS.toString(`/${frontmatter?.slug}`)}>
        <CardImage title={frontmatter?.title} image={frontmatter?.image} />
      </Link>

      <PostContents
        title={frontmatter?.title!}
        description={frontmatter?.description!}
        slug={frontmatter?.slug!}
        date={frontmatter?.date!}
        tags={frontmatter?.tags as string[]}
      />
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
          gatsbyImageData(placeholder: TRACED_SVG, width: 517, height: 380)
        }
      }
    }
  }
`;
