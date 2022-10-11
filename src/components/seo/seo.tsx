import { useSiteMetadata } from './seo.hook';

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
  children?: React.ReactNode;
};

export const SEO = ({ title, description, image, pathname, children }: SEOProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="google-site-verification" content="srMmPMyGbl3JvdUGsGFJUbgLrbYqQiFZtrlF3ts-_0k" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <link rel="canonical" href={seo.url} />

      {children}
    </>
  );
};
