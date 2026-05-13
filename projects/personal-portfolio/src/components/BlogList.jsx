import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { blogPosts } from '../data/blog/posts';
import Navbar from './Navbar';
import Footer from './Footer';
import './Blog.css';
import './BlogList.css';

const BlogList = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { language } = useLanguage();
    const t = translations[language].blog;

    const allPosts = [...blogPosts[language]].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    const filteredPosts = allPosts.filter(post => {
        const query = searchQuery.toLowerCase().trim();
        if (!query) return true;
        const haystack = [post.title, post.excerpt, post.tags.join(' ')]
            .join(' ').toLowerCase();
        return haystack.includes(query);
    });

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString(language === 'de' ? 'de-DE' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="blogpost-wrapper">
            <Helmet>
                <title>{t.allPostsTitle} | Shantanu Dutta</title>
                <meta name="description" content="Thoughts on Salesforce, CPQ, Revenue Cloud, and AI — from the field." />
                <link rel="canonical" href="https://shantanudutta.com/blog" />
            </Helmet>

            <Navbar />

            <main className="bloglist-main">
                <div className="container">
                    <h1 className="section-title animate-fade-in">{t.allPostsTitle}</h1>

                    <div className="bloglist-search">
                        <input
                            type="search"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            placeholder={t.searchPlaceholder}
                            className="bloglist-search-input"
                            aria-label={t.searchPlaceholder}
                        />
                    </div>

                    {filteredPosts.length === 0 ? (
                        <p className="bloglist-no-results">{t.noResults}</p>
                    ) : (
                        <div className="blog-grid">
                            {filteredPosts.map((post, index) => (
                                <Link
                                    to={`/blog/${post.slug}`}
                                    key={post.slug}
                                    className="blog-card card animate-fade-in"
                                    style={{ animationDelay: `${index * 0.1}s`, textDecoration: 'none' }}
                                >
                                    <div className="blog-card-image">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            loading="lazy"
                                            width="400"
                                            height="225"
                                        />
                                        <div className="blog-card-image-overlay"></div>
                                    </div>
                                    <div className="blog-card-content">
                                        <div className="blog-card-meta">
                                            <time dateTime={post.date}>{formatDate(post.date)}</time>
                                            <span className="blog-read-time">{post.readTime} {t.readTime}</span>
                                        </div>
                                        <h3 className="blog-card-title">{post.title}</h3>
                                        <p className="blog-card-excerpt">{post.excerpt}</p>
                                        <div className="blog-card-tags">
                                            {post.tags.map(tag => (
                                                <span key={tag} className="blog-tag">{tag}</span>
                                            ))}
                                        </div>
                                        <span className="blog-read-more">
                                            {t.readMore} <span aria-hidden="true">→</span>
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BlogList;
