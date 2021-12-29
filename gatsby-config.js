module.exports = {
  siteMetadata: {
    title: `GongZone DevBlog`,
    description: `웹 개발자 공존의 기술 블로그입니다. 여러가지 실험을 좋아합니다.`,
    siteUrl: `https://gongzone.netlify.app`,
    image: `/profile.png`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://gongzone.netlify.app`,
        sitemap: `https://gongzone.netlify.app/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-PSX7X3K",
        includeInDevelopment: false,
      },
    },
  ],
};
