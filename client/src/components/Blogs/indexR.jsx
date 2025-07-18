import React from 'react';
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import slugify from 'slugify';
import { FaEye, FaHeart } from "react-icons/fa";
import ReactDOM from "react-dom";
import Overlay from "../Overlay";
import blogs from '../../utils/blogData'
import { generateBlogJsonLd } from '../../utils/generateJsonLd';

export default function Blogs() {
    const [hearts, setHearts] = useState([137, 61, 745]);
    // const [expanded, setExpanded] = useState([false, false, false]);
    const [searchParams, setSearchParams] = useSearchParams();
    const slug = searchParams.get('slug');

    const [views, setViews] = useState([123, 98, 76]);
    const cardRefs = useRef([]);

    const navigate = useNavigate();

    const closeOverlay = () => {
        setSearchParams({});
    };


    const handleHeartClick = (index) => {
        setHearts((prev) => {
            const updated = [...prev];
            updated[index] += 1;
            return updated;
        });
    };

    // const handleToggle = (index) => {
    //     setExpanded((prev) => {
    //         const updated = [...prev];
    //         // If expanding, increment views
    //         if (!prev[index]) {
    //             setViews((v) => {
    //                 const vUpdated = [...v];
    //                 vUpdated[index] += 1;
    //                 return vUpdated;
    //             });
    //         }
    //         updated[index] = !prev[index];
    //         return updated;
    //     });
    // };
    const handleToggle = (index) => {
        const slug = slugify(blogs[index].title, { lower: true, strict: true });
        setSearchParams({ slug });
    };

    // Find which card is expanded
    // const expandedIdx = expanded.findIndex(Boolean);
    const expandedIdx = blogs.findIndex(blog => slugify(blog.title, { lower: true, strict: true }) === slug);
    useEffect(() => {
        if (expandedIdx !== -1) {
            const blog = blogs[expandedIdx];
            const jsonLd = generateBlogJsonLd(blog, window.location.origin);
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.innerHTML = JSON.stringify(jsonLd, null, 2);
            document.head.appendChild(script);

            return () => {
                document.head.removeChild(script);
            };
        }
    }, [expandedIdx]);


    // Card rendering function
    const renderCard = (blog, idx, isOverlay = false) => (
        <section
            aria-labelledby={`blog-${idx}`}
            ref={el => cardRefs.current[idx] = el}
            // className={`blog-card${expanded.some(Boolean) && !expanded[idx] ? " blurred" : ""}${expanded[idx] ? " expanded" : ""}${isOverlay ? " overlay" : ""}`}
            className={`blog-card${expandedIdx !== -1 && expandedIdx !== idx ? " blurred" : ""}${expandedIdx === idx ? " expanded" : ""}${isOverlay ? " overlay" : ""}`}
            key={idx}
        >
            <img
                src={blog.img}
                alt={`Thumbnail for blog-${idx}`}
                className="blog-image"
                loading='lazy'
            />
            <article id={`blog-${idx}`} className="blog-card-content">
                <header>
                    <h4>{blog.title}</h4>
                </header>
                <p>
                    {expanded[idx]
                        ? blog.content
                        : blog.content.slice(0, 250) + (blog.content.length > 250 ? "..." : "")}
                </p>
                <div className="blog-card-footer">
                    <Link
                        to={`/blogs/${slugify(blog.title, { lower: true, strict: true })}`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleToggle(idx);
                            navigate('/blogs', { replace: false });
                        }}
                    >
                        {expanded[idx] ? "Show less" : "Read more"}
                    </Link>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                            <FaEye /> {views[idx]}
                        </span>
                        <button
                            style={{
                                background: "none",
                                border: "none",
                                color: "inherit",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                            }}
                            onClick={() => handleHeartClick(idx)}
                            aria-label="Like"
                        >
                            <FaHeart color="red" /> {hearts[idx]}
                        </button>
                    </div>
                </div>
            </article>
        </section>
    );

    return (
        <section className="blogs-section" role="region" aria-labelledby="blogs">
            <header className="blogs-header">
                <h3 id="blogs">blogs</h3>
            </header>
            <div className="blogs-content">
                {blogs.map((blog, idx) =>
                    expandedIdx === idx
                        ? null // Don't render in normal flow if overlayed
                        : renderCard(blog, idx)
                )}
            </div>
            {expandedIdx !== -1 &&

                ReactDOM.createPortal(

                    // Render the expanded card as an overlay
                    <Overlay
                        className="blog-overlay-bg"
                        onClose={() => handleToggle(expandedIdx)}
                    >
                        {renderCard(blogs[expandedIdx], expandedIdx, true)}
                    </Overlay>,
                    document.body
                )
            }

        </section>
    );
};