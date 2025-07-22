import { useParams } from 'react-router-dom';
import blogs from '../../utils/blogData';
// import { generateBlogJsonLd } from '../../utils/generateJsonLd';
import { useEffect } from 'react';

const slugify = str =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function BlogDetails() {
  const { slug } = useParams();

  const blog = blogs.find(b =>
    slugify(b.title) === slug
  );

  // useEffect(() => {
  //   if (blog) {
  //     const jsonLd = generateBlogJsonLd(blog, window.location.origin);
  //     const script = document.createElement('script');
  //     script.type = 'application/ld+json';
  //     script.innerHTML = JSON.stringify(jsonLd, null, 2);
  //     document.head.appendChild(script);

  //     return () => {
  //       document.head.removeChild(script);
  //     };
  //   }
  // }, [blog]);

  if (!blog) return <div>Blog not found</div>;

  return (
    <article className="blog-details">
      <h2>{blog.title}</h2>
      <img src={blog.img} alt={blog.title} />
      <p>{blog.content}</p>
    </article>
  );
}
