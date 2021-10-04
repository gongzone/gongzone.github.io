module.exports = {
  siteMetadata: {
    title: `GongZone DevBlog`,
    titleTemplate: `%s | GongZone`,
    description: "공존의 개발블로그입니다.",
    url: "https://www.doe.com",
    image: "/profile.png",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
  ],
};
