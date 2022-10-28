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
    //   const newBlog = {
    //     title,
    //     author,
    //     url,
    //   };
    //const createdBlog = await blogService.create(newBlog);
    //setBlogs(blogs.concat(createdBlog));
    setTitle("");
    setAuthor("");
    setUrl("");

    //   setErrorMessage(
    //     `${createdBlog.author} has added a blog with title name${createdBlog.title}`
    //   );
    //setColor("error");
    //   setTimeout(() => {
    //     setErrorMessage(null);
    //   }, 5000);
    // } catch (exception) {
    //   setErrorMessage("something went wrong");
    //   setTimeout(() => {
    //     setErrorMessage(null);
    //   }, 5000);
    // }
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
          onChange={(event) => {
            setUrl(event.target.value);
          }}
        />
      </div>

      <button type="submit">Add</button>
    </form>
  );
};
export default BlogForm;
