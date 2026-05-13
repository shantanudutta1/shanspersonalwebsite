import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { blogPosts, blogPostContent } from '../../data/blog/posts';
import './BlogPost.css';

const formatDate = (dateStr, language) => {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString(language === 'de' ? 'de-DE' : 'en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
};

const BlogPost = () => {
    const { slug } = useParams();
    const { language } = useLanguage();

    const posts = blogPosts[language];
    const post = posts.find(p => p.slug === slug);
    const content = blogPostContent[language]?.[slug];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [slug]);

    if (!post || !content) {
        return <Navigate to="/blog" replace />;
    }

    const readLabel = language === 'de' ? 'Min. Lesezeit' : 'min read';
    const backLabel = language === 'de' ? 'Zurück zum Blog' : 'Back to Blog';
    const breadcrumbBlog = language === 'de' ? 'Blog' : 'Blog';
    const ctaText = language === 'de'
        ? 'Bereit, das auf Ihre Salesforce-Organisation anzuwenden?'
        : 'Ready to apply this to your Salesforce org?';
    const ctaBtn = language === 'de' ? 'Kontakt aufnehmen' : 'Get in touch';

    return (
        <article className="blog-post-page">
            <div className="blog-post-hero-wrapper">
                <img
                    src={post.image}
                    alt={post.title}
                    className="blog-post-hero-img"
                />
                <div className="blog-post-hero-overlay" aria-hidden="true" />
            </div>

            <div className="container blog-post-container">
                <nav className="blog-breadcrumb" aria-label="Breadcrumb">
                    <a href="/">Home</a>
                    <span aria-hidden="true">›</span>
                    <Link to="/blog">{breadcrumbBlog}</Link>
                    <span aria-hidden="true">›</span>
                    <span aria-current="page">{post.title}</span>
                </nav>

                <header className="blog-post-header">
                    <div className="blog-card-tags blog-post-tags">
                        {post.tags.map(tag => (
                            <span key={tag} className="blog-tag">{tag}</span>
                        ))}
                    </div>
                    <h1 className="blog-post-title">{post.title}</h1>
                    <div className="blog-post-meta">
                        <span className="blog-post-author">{post.author}</span>
                        <span aria-hidden="true">·</span>
                        <span>{formatDate(post.date, language)}</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.readTime} {readLabel}</span>
                    </div>
                </header>

                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: content }}
                />

                <div className="blog-post-cta card">
                    <p>{ctaText}</p>
                    <a href="/#contact" className="btn-primary">{ctaBtn}</a>
                </div>

                <Link to="/blog" className="blog-back-link">
                    <span aria-hidden="true">←</span> {backLabel}
                </Link>
            </div>
        </article>
    );
};

export default BlogPost;
