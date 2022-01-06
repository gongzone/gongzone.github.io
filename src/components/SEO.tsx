import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { SEOProps, QueryTypes } from "../interfaces/SEOProps";

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  article,
  canonical = true,
}) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery<QueryTypes>(SEOStaticQuery);

  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title}>
      {/* meta tags */}
      <meta
        name="google-site-verification"
        content="srMmPMyGbl3JvdUGsGFJUbgLrbYqQiFZtrlF3ts-_0k"
      />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {/* meta tags OpenGraph  */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      {article && <meta property="og:type" content="article" />}
      {/* meta tags Twitter  */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {/* link tags  */}
      {canonical === true && <link rel="canonical" href={seo.url} />}
      {canonical === false && <link rel="canonical" href={siteUrl} />}
    </Helmet>
  );
};

export default SEO;

const SEOStaticQuery = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        image
        siteUrl
      }
    }
  }
`;
