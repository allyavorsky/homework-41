import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Posts.css";

const PostViewer = ({ postId }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!postId) {
      return;
    }

    const fetchPost = async () => {
      try {
        setError(null);
        setLoading(true);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        setPost(response.data);
      } catch (err) {
        setError(err.message);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) {
    return <div className="loading">Завантаження поста...</div>;
  }

  if (error) {
    return <div className="error">Помилка: {error}</div>;
  }

  if (!post) {
    return <div>Виберіть ID поста, щоб побачити дані.</div>;
  }

  return (
    <div className="post-feed__item">
      <h2>
        {post.title} (ID: {post.id})
      </h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostViewer;
