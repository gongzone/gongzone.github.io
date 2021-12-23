import path from "path";

interface NodesType {
  frontmatter: {
    tags?: string[];
    slug: string;
  };
}

export const createPostPages = (graphQLData: any, createPage: any) => {
  const nodes: NodesType[] = graphQLData.data.allMdx.nodes;

  nodes.forEach((post) => {
    const slug = post.frontmatter.slug;

    createPage({
      path: `/${slug}`,
      component: path.resolve(`src/templates/post-template.tsx`),
      context: {
        slug,
      },
    });
  });
};
