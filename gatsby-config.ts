import type { GatsbyConfig } from 'gatsby';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `공존의 발자취`,
    description: `공존의 개발 블로그입니다. 웹 애플리케이션 설계 및 구현에 관심이 많습니다.`,
    image: `/meta-image.png`,
    siteUrl: `https://gongzone.github.io`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `공존의 발자취`,
        short_name: `공존의 발자취`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/images/main-logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@': path.join(__dirname, 'src'),
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.TRACKING_ID, // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [`gatsby-remark-autolink-headers`],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: './src/data/posts/',
      },
      __key: 'posts',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'series',
        path: './src/data/series/',
      },
      __key: 'series',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};

export default config;
