import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setError(null);
        setLoading(true);

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );

        setPosts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="loading">Завантаження даних...</div>;
  }

  if (error) {
    return <div className="error">Помилка: {error}</div>;
  }

  return (
    <div className="post">
      <h1>Список постів</h1>

      <div className="post-feed">
        {posts.map((post) => (
          <div key={post.id} className="post-feed__item">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
