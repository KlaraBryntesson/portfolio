import { useEffect, useState } from "react";
// import Moment from "react-moment";
import moment from "moment";
function Blog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([
    { title: "Välkommen", content: "Det här är mitt första inlägg" },
  ]);

  const thisDate = moment().format("YYYY-MM-DD");

  function handleSubmit() {
    setPosts([...posts, { title: title, date: thisDate, content: content }]);
    console.log(title);
    console.log(posts);
  }

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div>
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
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
