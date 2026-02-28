// Mounted / Unmounted
// 1. Mounted / Unmounted
//2. useEffect hook
//---------------------------
// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [deps])
//----------------------------
// 1. callback: gọi sau khi component mounted
import { useState, useEffect } from "react";

function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  // 2. Callback chỉ gọi 1 lần sau khi component mounted
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  return (
    <div>
      <h1>Cố lên</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
