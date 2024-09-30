import React from 'react';
import { blogPosts } from '../utils/data';
import { AnimatedComponent } from '../components/AnimatedComponent';

const Blog = () => {
  return (
    <AnimatedComponent>
      <div className="blog">
        <h2>Blog</h2>
        {blogPosts.map((post, index) => (
          <article key={index}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a href={`/blog/${post.id}`}>Leer más</a>
          </article>
        ))}
      </div>
    </AnimatedComponent>
  );
};

export default Blog;