import React from "react";
import { useEffect, useState } from "react";
// import Moment from "react-moment";
import moment from "moment";
function Blog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/klara.json")
      .then((response) => response.json())
      .then((result) => {
        setPosts(result.blog);
        console.log(result.blog);
      });
  }, []);

  const thisDate = moment().format("YYYY-MM-DD");

  function handleSubmit() {
    setPosts([{ title: title, date: thisDate, content: content }, ...posts]);
    console.log(title);
    console.log(posts);
  }

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <main>
      <h1>Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          placeholder="Title"
        />
        <input
          onChange={(event) => setContent(event.target.value)}
          value={content}
          placeholder="Content"
        />
        <button type="submit">Publish</button>
      </form>
      {posts.map((post) => (
        <div key={post.title}>
          <h2>{post.title}</h2>
          <p>{post.date}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </main>
  );
}

export default Blog;
