import React, { useState } from "react";
import "./App.css";
import PostViewer from "./components/Posts";

function App() {
  const [selectedPostId, setSelectedPostId] = useState(1);

  return (
    <div className="post">
      <h1>Переглядач постів</h1>

      <div className="post-control">
        <button onClick={() => setSelectedPostId(1)}>Пост 1</button>
        <button onClick={() => setSelectedPostId(8)}>Пост 8</button>
        <button onClick={() => setSelectedPostId(16)}>Пост 16</button>
        <button onClick={() => setSelectedPostId(32)}>Пост 32</button>
      </div>

      <PostViewer postId={selectedPostId} />
    </div>
  );
}

export default App;
