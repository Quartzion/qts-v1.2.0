import { Outlet } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import WelcomeBanner from '../components/WelcomeBanner';
import TeamSection from '../components/TeamSection';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Blogs from '../components/Blogs';

export default function Page1() {

    // structured data JSON-LD (SEO)
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Quartzion.com",
        "url": "https://www.quartzion.com/",
        "potentialAction":
        {
            "@type": "SearchAction",
            "target": "https://www.quartzion.com/?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    const blogPosts = [
        {
            "@type": "BlogPosting",
            "headline": "Empowering Non-Profits with Durable Technology: Reducing Overhead & Enhancing Donor Engagement",
            "author": { "@type": "Person", "name": "Peter Smith CEO" },
            "datePublished": "2025-06-30T00:00:00-04:00",
            "url": "https://www.quartzion.com/#blog-0",
            "image": "https://www.quartzion.com/blog_2.webp"
        },
        {
            "@type": "BlogPosting",
            "headline": "Effective Tech Analysis for Seamless Project Management",
            "author": { "@type": "Person", "name": "Peter Smith CEO" },
            "datePublished": "2025-06-30T00:00:00-04:00",
            "url": "https://www.quartzion.com/#blog-1",
            "image": "https://www.quartzion.com/images/blog_1.webp"
        },
        {
            "@type": "BlogPosting",
            "headline": "Strengthening Community Through Smart Technology Integration",
            "author": { "@type": "Person", "name": "Peter Smith CEO" },
            "datePublished": "2025-06-30T00:00:00-04:00",
            "url": "https://www.quartzion.com/#blog-2",
            "image": "https://www.quartzion.com/blog_3.webp"
        }
    ]

    return (
        <>
            <Helmet>
                <title>Quartzion.com</title>
                <link rel="canonical" href="https://www.quartzion.com" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [structuredData, ...blogPosts]
                    })}
                </script>
            </Helmet>
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <main id="main-content" className="py-2">
                <WelcomeBanner />
                <TeamSection />
                <AboutUs />
                <Services />
                <Blogs />
            </main>
            <Outlet />
        </>
    );
};