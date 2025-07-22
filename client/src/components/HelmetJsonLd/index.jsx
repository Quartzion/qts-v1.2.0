import React from 'react';
import { Helmet } from 'react-helmet';
import slugify from 'slugify';
import blogs from '../../utils/blogData';
import { generateBlogJsonLd } from '../../utils/generateJsonLd';
import { useSearchParams } from 'react-router-dom';
const baseUrl = import.meta.env.VITE_BASE_URL;

export default function HelmetJsonLd() {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get('slug');
//   const fullUrl = `${url}/blogs?slug=${slug}`;
//   const baseUrl = "https://www.quartzion.com";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Quartzion.com",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const expandedBlog = blogs.find(blog => slugify(blog.title, { lower: true, strict: true }) === slug);

  const jsonLd = expandedBlog
    ? generateBlogJsonLd(expandedBlog, baseUrl)
    : {
        "@context": "https://schema.org",
        "@graph": [
          structuredData,
          ...blogs.map(blog => ({
            "@type": "BlogPosting",
            "headline": blog.title,
            "description": blog.description || blog.content.slice(0, 160),
            // "image": [`${url}${blog.img}`],
            "author": {
              "@type": "Person",
              "name": "Peter Smith",
            //   "image": `${url}/pete-ceo-2.webp`,
              "url": `${baseUrl}/#peter-smith`,

            },
            // "publisher": {
            // "@type": "Organization",
            // "name": "Quartzion Technology Solutions Corp.",
            // "logo": {
            // "@type": "ImageObject",
            // "url": `${url}/qts-icon-2.webp`
            // }
            //  },
            // "articleSection": "Technology",
            // "articleBody": blog.content,
            // "mainEntityOfPage": {
            // "@type": "WebPage",
            // "@id": fullUrl
            // },
            "inLanguage": "en-US",
            "keywords": "technology, nonprofit, innovation, Quartzion, community, development, 501c3",
            "datePublished": blog.date || "2025-07-01",
            "url": `${baseUrl}/blogs?slug=${slugify(blog.title, { lower: true, strict: true })}`,
            "image": `${baseUrl}${blog.img}`
          }))
        ]
      };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

