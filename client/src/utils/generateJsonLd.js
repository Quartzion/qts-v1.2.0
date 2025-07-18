import slugify from 'slugify';

export const generateBlogJsonLd = (blog, url) => {
  const slug = slugify(blog.title, { lower: true, strict: true });
  const fullUrl = `${url}/blogs?slug=${slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.description || blog.content.slice(0, 160),
    "image": [`${url}${blog.img}`],
    "url": fullUrl,
    "author": {
      "@type": "Person",
      "name": "Peter Smith",
      "image": `${url}/pete-ceo-2.webp`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Quartzion Technology Solutions Corp.",
      "logo": {
        "@type": "ImageObject",
        "url": `${url}/qts-icon-2.webp`
      }
    },
    "articleSection": "Technology",
    "articleBody": blog.content,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    },
    "inLanguage": "en-US",
    "keywords": "technology, nonprofit, innovation, Quartzion, community, development, 501c3",
    "datePublished": blog.date || "2025-07-01"
  };
};
