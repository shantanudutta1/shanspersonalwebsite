import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { blogPosts } from '../data/blog/posts';
import './Blog.css';

const Blog = () => {
    const { language } = useLanguage();
    const t = translations[language].blog;
    const posts = blogPosts[language].slice(0, 3);

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString(language === 'de' ? 'de-DE' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <section id="blog" className="blog-section" aria-labelledby="blog-title">
            <div className="blog-glow" aria-hidden="true"></div>
            <div className="container">
                <h2 id="blog-title" className="section-title animate-fade-in">
                    {t.title}
                </h2>
                <p className="blog-subtitle animate-fade-in">{t.subtitle}</p>

                <div className="blog-grid">
                    {posts.map((post, index) => (
                        <Link
                            to={`/blog/${post.slug}`}
                            key={post.slug}
                            className="blog-card card animate-fade-in"
                            style={{ animationDelay: `${index * 0.15}s`, textDecoration: 'none' }}
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

                <div className="blog-view-all">
                    <Link to="/blog" className="btn-primary">
                        {t.allPosts} <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Blog;
