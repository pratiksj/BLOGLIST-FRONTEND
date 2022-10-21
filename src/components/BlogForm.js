const BlogForm = (props) => {
  return (
    <form onSubmit={props.addBlog}>
      <div>
        Title:{""}
        <input
          type="text"
          name="title"
          value={props.title}
          onChange={(event) => {
            props.setTitle(event.target.value);
          }}
        />
      </div>

      <div>
        Author:{""}
        <input
          type="text"
          name="author"
          value={props.author}
          onChange={(event) => {
            props.setAuthor(event.target.value);
          }}
        />
      </div>

      <div>
        Url:{""}
        <input
          type="text"
          name="url"
          value={props.url}
          onChange={(event) => {
            props.setUrl(event.target.value);
          }}
        />
      </div>

      <button type="submit">Add</button>
    </form>
  );
};
export default BlogForm;
