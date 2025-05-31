// src/components/BlogSummary.jsx
import React from 'react';
// import { Link } from 'react-router-dom'; // If you want a link to a dedicated blog page
import { blogPostsData } from '../data/blogData'; // Create this file if you use it
import './BlogSummary.css';

const BlogSummary = () => {
  // If not using blogData.js yet, you can hardcode a simple message
  const hasBlogData = typeof blogPostsData !== 'undefined' && blogPostsData.length > 0;

  return (
    <section id="blog-summary" className="page-section blog-summary-section">
      <h2>Project Journeys & Tutorials</h2>

      {hasBlogData ? (
        <div className="blog-posts-list">
          {blogPostsData.slice(0, 2).map(post => ( // Show first 2 for summary
            <div key={post.id} className="blog-post-item-summary">
              <h3>
                {/* If you had slugs for full posts:
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                */}
                {post.title}
              </h3>
              <p className="post-summary-text">{post.summary}</p>
              {post.status && <p className="post-status"><em>Status: {post.status}</em></p>}
            </div>
          ))}
          {blogPostsData.length > 2 && (
             <div className="view-all-blog-container">
                {/* <Link to="/blog" className="button-secondary">Read More on the Blog</Link> */}
                <p><em>More posts coming soon...</em></p>
             </div>
          )}
        </div>
      ) : (
        <div className="blog-coming-soon">
          <p>
            I'm passionate about sharing my development experiences and tutorials.
            Soon, this section will feature insights from my project journeys and helpful mini-tutorials. Stay tuned!
          </p>
          {/* Optional: Link to a "Blog" page that also says "Coming Soon" */}
          {/* <Link to="/blog" className="button-secondary">Visit Blog Page (Coming Soon)</Link> */}
        </div>
      )}
    </section>
  );
};

export default BlogSummary;