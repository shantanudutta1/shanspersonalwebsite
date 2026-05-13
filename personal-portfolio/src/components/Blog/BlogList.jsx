import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { blogPosts } from '../../data/blog/posts';
import './BlogList.css';

const formatDate = (dateStr, language) => {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString(language === 'de' ? 'de-DE' : 'en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
};

const BlogList = () => {
    const { language } = useLanguage();
    const posts = blogPosts[language];
    const readLabel = language === 'de' ? 'Min. Lesezeit' : 'min read';
    const readMoreLabel = language === 'de' ? 'Weiterlesen' : 'Read more';
    const subtitleText = language === 'de'
        ? 'Praxisnahe Einblicke eines erfahrenen Salesforce-Beraters für Unternehmenskunden in ganz Europa.'
        : 'Practical advice from a senior Salesforce consultant working with enterprise clients across Europe.';

    return (
        <section className="blog-list-section">
            <div className="blog-list-hero">
                <div className="blob blob-teal blog-blob-1" aria-hidden="true" />
                <div className="blob blob-orange blog-blob-2" aria-hidden="true" />
            </div>
            <div className="container">
                <h1 className="section-title blog-list-title">
                    Salesforce <span className="highlight-teal">Insights</span>
                </h1>
                <p className="blog-list-subtitle">{subtitleText}</p>

                {posts.length === 0 ? (
                    <p className="blog-empty">No posts yet. Check back soon.</p>
                ) : (
                    <div className="blog-grid">
                        {posts.map(post => (
                            <article key={post.slug} className="blog-card card">
                                <Link to={`/blog/${post.slug}`} className="blog-card-image-link" tabIndex="-1" aria-hidden="true">
                                    <div className="blog-card-image-wrapper">
                                        <img
                                            src={post.image}
                                            alt=""
                                            className="blog-card-image"
                                            loading="lazy"
                                        />
                                    </div>
                                </Link>
                                <div className="blog-card-body">
                                    <div className="blog-card-meta">
                                        <span className="blog-card-date">{formatDate(post.date, language)}</span>
                                        <span className="blog-card-sep" aria-hidden="true">·</span>
                                        <span className="blog-card-read-time">{post.readTime} {readLabel}</span>
                                    </div>
                                    <Link to={`/blog/${post.slug}`} className="blog-card-title-link">
                                        <h2 className="blog-card-title">{post.title}</h2>
                                    </Link>
                                    <p className="blog-card-excerpt">{post.excerpt}</p>
                                    <div className="blog-card-tags">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="blog-tag">{tag}</span>
                                        ))}
                                    </div>
                                    <Link to={`/blog/${post.slug}`} className="blog-read-more">
                                        {readMoreLabel} <span aria-hidden="true">→</span>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogList;
