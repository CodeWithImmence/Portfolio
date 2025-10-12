import React from "react";
import { Helmet } from "react-helmet-async";
import metaData from "../data/meta.json";

const SEO = ({ pageTitle }) => {
  const title = pageTitle
    ? `${metaData.name} | ${pageTitle}`
    : `${metaData.name} | ${metaData.jobTitle}`;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={metaData.description} />
      <meta name="keywords" content={metaData.knowsAbout.join(", ")} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={metaData.url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaData.description} />
      <meta property="og:image" content={metaData.image} />
      <meta property="og:url" content={metaData.url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaData.description} />
      <meta name="twitter:image" content={metaData.image} />

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(metaData)}</script>
    </Helmet>
  );
};

export default SEO;
