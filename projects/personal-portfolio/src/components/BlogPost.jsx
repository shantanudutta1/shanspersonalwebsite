import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { blogPosts, blogPostContent } from '../data/blog/posts';
import Navbar from './Navbar';
import Footer from './Footer';
import './BlogPost.css';

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { language } = useLanguage();
    const t = translations[language].blog;

    const post = blogPosts[language].find(p => p.slug === slug);
    const content = blogPostContent[language]?.[slug];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post || !content) {
        return (
            <div className="blogpost-wrapper">
                <Navbar />
                <main className="blogpost-not-found container">
                    <h1>{t.notFound}</h1>
                    <Link to="/#blog" className="btn-primary">{t.backToBlog}</Link>
                </main>
                <Footer />
            </div>
        );
    }

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString(language === 'de' ? 'de-DE' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": `https://shantanudutta.com${post.image}`,
        "author": {
            "@type": "Person",
            "name": "Shantanu Dutta",
            "url": "https://shantanudutta.com"
        },
        "publisher": {
            "@type": "Person",
            "name": "Shantanu Dutta"
        },
        "datePublished": post.date,
        "dateModified": post.date,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://shantanudutta.com/blog/${post.slug}`
        }
    };

    return (
        <div className="blogpost-wrapper">
            <Helmet>
                <title>{post.title} | Shantanu Dutta</title>
                <meta name="description" content={post.excerpt} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={`https://shantanudutta.com${post.image}`} />
                <meta property="og:url" content={`https://shantanudutta.com/blog/${post.slug}`} />
                <meta property="og:type" content="article" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={post.title} />
                <meta name="twitter:description" content={post.excerpt} />
                <meta name="twitter:image" content={`https://shantanudutta.com${post.image}`} />
                <link rel="canonical" href={`https://shantanudutta.com/blog/${post.slug}`} />
                <script type="application/ld+json">
                    {JSON.stringify(articleSchema)}
                </script>
            </Helmet>

            <Navbar />

            <main className="blogpost-main">
                <article className="blogpost-article container">
                    <button
                        onClick={() => navigate('/#blog')}
                        className="blogpost-back"
                    >
                        {t.backToBlog}
                    </button>

                    <div className="blogpost-hero-image">
                        <img
                            src={post.image}
                            alt={post.title}
                            loading="eager"
                            fetchpriority="high"
                            width="1200"
                            height="630"
                        />
                        <div className="blogpost-hero-overlay"></div>
                    </div>

                    <header className="blogpost-header">
                        <div className="blogpost-tags">
                            {post.tags.map(tag => (
                                <span key={tag} className="blog-tag">{tag}</span>
                            ))}
                        </div>
                        <h1 className="blogpost-title">{post.title}</h1>
                        <div className="blogpost-meta">
                            <div className="blogpost-author">
                                <img
                                    src="/og-image.jpg"
                                    alt={post.author}
                                    className="blogpost-author-avatar"
                                    width="40"
                                    height="40"
                                />
                                <span>{post.author}</span>
                            </div>
                            <time dateTime={post.date}>{formatDate(post.date)}</time>
                            <span className="blogpost-readtime">⏱ {post.readTime} {t.readTime}</span>
                        </div>
                    </header>

                    <div className="blogpost-content">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {content}
                        </ReactMarkdown>
                    </div>

                    <footer className="blogpost-footer">
                        <div className="blogpost-author-card card">
                            <img
                                src="/og-image.jpg"
                                alt={post.author}
                                className="blogpost-author-photo"
                                width="80"
                                height="80"
                            />
                            <div className="blogpost-author-info">
                                <h3>{post.author}</h3>
                                <p>{t.authorBio}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => navigate('/#blog')}
                            className="btn-primary blogpost-back-btn"
                        >
                            {t.backToBlog}
                        </button>
                    </footer>
                </article>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPost;
