import type { IGatsbyImageData } from 'gatsby-plugin-image';

export type IndexPageQuery = Queries.IndexPageQuery;

export type IndexPagePostsQuery = Queries.IndexPageQuery['posts']['nodes'];
export type IndexPagePostFrontMatter = IndexPagePostsQuery[0]['frontmatter'];

export type IndexPageSeriesQuery = Queries.IndexPageQuery['series']['group'];
export type IndexPageSeriesItem = {
  fieldValue: string | null;
  totalCount: number;
  image:
    | {
        readonly childImageSharp: {
          readonly gatsbyImageData: IGatsbyImageData;
        } | null;
      }
    | null
    | undefined;
  tags: string[];
};
