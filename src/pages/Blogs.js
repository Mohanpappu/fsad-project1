import React, { useState } from 'react';
import './Blogs.css';

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "Understanding Mental Health: A Comprehensive Guide",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      category: "Mental Health",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "A detailed exploration of mental health awareness, common conditions, and available treatments...",
      content: "Mental health is a crucial aspect of our overall well-being. In this comprehensive guide, we'll explore various aspects of mental health, including common conditions, treatment options, and preventive measures. We'll also discuss the importance of seeking professional help and maintaining a healthy lifestyle..."
    },
    {
      id: 2,
      title: "The Impact of Technology on Modern Healthcare",
      author: "Dr. Michael Chen",
      date: "March 10, 2024",
      category: "Healthcare Technology",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "Exploring how technological advancements are revolutionizing healthcare delivery...",
      content: "Technology has transformed healthcare in unprecedented ways. From telemedicine to AI-powered diagnostics, we're witnessing a revolution in how healthcare is delivered. This article examines the latest technological innovations and their impact on patient care..."
    },
    {
      id: 3,
      title: "Nutrition and Mental Well-being",
      author: "Dr. Emily Rodriguez",
      date: "March 5, 2024",
      category: "Nutrition",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "Discover the connection between diet and mental health...",
      content: "The food we eat plays a vital role in our mental health. This article explores the relationship between nutrition and mental well-being, highlighting key nutrients that support brain health and discussing dietary patterns that can improve mood and cognitive function..."
    }
  ];

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleCloseBlog = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="blogs-container">
      <h1>Health & Wellness Blog</h1>
      <div className="blogs-grid">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-card" onClick={() => handleBlogClick(blog)}>
            <div className="blog-image">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="blog-content">
              <span className="blog-category">{blog.category}</span>
              <h2>{blog.title}</h2>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <div className="blog-meta">
                <span className="blog-author">By {blog.author}</span>
                <span className="blog-date">{blog.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedBlog && (
        <div className="blog-modal">
          <div className="blog-modal-content">
            <button className="close-btn" onClick={handleCloseBlog}>×</button>
            <div className="blog-modal-image">
              <img src={selectedBlog.image} alt={selectedBlog.title} />
            </div>
            <div className="blog-modal-details">
              <span className="blog-category">{selectedBlog.category}</span>
              <h2>{selectedBlog.title}</h2>
              <div className="blog-meta">
                <span className="blog-author">By {selectedBlog.author}</span>
                <span className="blog-date">{selectedBlog.date}</span>
              </div>
              <div className="blog-full-content">
                <p>{selectedBlog.content}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
 