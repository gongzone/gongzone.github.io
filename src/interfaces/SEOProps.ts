export interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  article?: boolean;
  canonical?: boolean;
}

export interface QueryTypes {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      image: string;
      siteUrl: string;
    };
  };
}
