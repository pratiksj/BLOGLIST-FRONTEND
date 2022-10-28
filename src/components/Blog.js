import { useState } from "react";
import blogService from "../services/blogs";

const Blog = ({ blog, setBlogs, blogs }) => {
  const [disPlay, setDisPlay] = useState(false);

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    paddingRight: 2,
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
  return (
    <div style={blogStyle}>
      {!disPlay ? (
        <div>
          {blog.title}
          <button onClick={showToggle}>view</button>
        </div>
      ) : (
        <div>
          {blog.title}
          <button onClick={showToggle}>Hide</button>
          <div>{blog.author}</div>
          <div>{blog.url}</div>
          <div>
            likes {blog.likes}
            <button onClick={() => riseLike(blog.id)}>like</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
