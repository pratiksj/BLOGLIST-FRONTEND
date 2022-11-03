import { useState } from "react";
import blogService from "../services/blogs";

const Blog = ({ blog, setBlogs, blogs }) => {
  const [disPlay, setDisPlay] = useState(false);

  const blogStyle = {
    //paddingTop: 8,
    // paddingLeft: 2,
    //paddingRight: 2,
    border: "solid",
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 5,
  };
  const increaseLike = async (id, newLikes) => {
    const blogUpdate = blogs.find((blogs) => blogs.id === id);
    const updatedBlog = {
      likes: newLikes,
      author: blogUpdate.author,
      title: blogUpdate.tittle,
      url: blogUpdate.url,
    };
    const response = await blogService.update(id, updatedBlog);
    setBlogs(blogs.map((blogs) => (blogs.id === id ? response : blogs)));
  };

  const riseLike = (id) => {
    increaseLike(id, blog.likes + 1);
  };

  const showToggle = () => {
    setDisPlay(!disPlay);
  };

  const deletedBlog = async (id) => {
    await blogService.remove(id);

    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div style={blogStyle}>
      {!disPlay ? (
        <div className="blog">
          {blog.title} {blog.author}
          <button className="view" onClick={showToggle}>
            view
          </button>
        </div>
      ) : (
        <div>
          {blog.title}
          <button onClick={showToggle}>Hide</button>
          <div>{blog.author}</div>
          <div className="url">{blog.url}</div>
          <div className="likes">
            likes {blog.likes}
            <button onClick={() => riseLike(blog.id)}>like</button>
          </div>
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => {
              const result = window.confirm(
                `Remove ${blog.title} by ${blog.author}`
              );
              if (result === false) {
                blogs;
              } else deletedBlog(blog.id);
            }}
          >
            remove
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;
