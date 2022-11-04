import React from "react";
import { useState } from "react";

const BlogForm = ({ createBlog }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const addBlog = (event) => {
    event.preventDefault();

    createBlog({
      title: title,
      author: author,
      url: url,
    });

    setTitle("");
    setAuthor("");
    setUrl("");
  };

  return (
    <form onSubmit={addBlog}>
      <h1>create a Blog</h1>
      <div>
        Title:{""}
        <input
          type="text"
          name="title"
          value={title}
          placeholder="title"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>

      <div>
        Author:{""}
        <input
          type="text"
          name="author"
          value={author}
          placeholder="author"
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        />
      </div>

      <div>
        Url:{""}
        <input
          type="text"
          name="url"
          value={url}
          placeholder="url"
          onChange={(event) => {
            setUrl(event.target.value);
          }}
        />
      </div>

      <button id="Add" type="submit">
        Add
      </button>
    </form>
  );
};
export default BlogForm;
