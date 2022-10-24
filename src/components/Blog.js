import { useState } from "react";
const Blog = ({ blog }) => {
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
            <button>like</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
