import React from 'react';
import { Helmet } from 'react-helmet';

const defaultDescription = 'I am Shafi Rayhan, an experienced Front-End Web Developer from Sylhet, Bangladesh.';
const defaultKeywords = 'Front-End, Web Developer, Sylhet, React, GatsbyJS';

export default function Head({
  title, description, keywords, slug
}) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="description" content={description || defaultDescription} />
      <meta name="author" content="Shafi Rayhan" />
      <title>{title} | Shafi Rayhan</title>

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta name="image" content="https://www.shafi.ml/static/bg.png" />
      <meta property="og:image" content="https://www.shafi.ml/static/bg.png" />
      <meta property="og:url" content={slug ? `https://www.shafi.ml${slug}` : 'https://www.shafi.ml'} />
      <meta property="og:site_name" content="Shafi Rayhan" />


      <meta property="article:publisher" content="https://www.shafi.ml" />
      <meta property="twitter:image" content="https://www.shafi.ml/static/bg.png" />
      <meta property="twitter:site" content="@shafiemoji" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
