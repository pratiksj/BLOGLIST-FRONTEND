import { useState, useEffect } from "react";
import Blog from "./components/Blog";
import Notification from "./components/Notification";
import blogService from "./services/blogs";
import loginService from "./services/login";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState("");
  const [message, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  // const [title,setTitle]= useState("")
  // const [author,setAuthor]= useState("")
  // const [url,setUrl]=useState("")

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });
      blogService.setToken(user.token);
      setUser(user);
      window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user));
      setUsername("");
      setPassword("");
    } catch (exception) {
      setErrorMessage("Wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };
  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
        <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  );

  const logOut = () => {
    window.localStorage.removeItem("loggedNoteappUser");
    setUser(null);
  };

  // const noteForm = () => (
  //   <form onSubmit={addNote}>
  //     <input value={newnote} onChange={handleNoteChange} />
  //     <button type="submit">click me</button>
  //   </form>
  // );

  return (
    <div>
      <Notification message={message} />
      {user === null ? (
        <>
          <h2>Log into application</h2>
          {loginForm()}
        </>
      ) : (
        <>
          <h2>{user.name} logged in</h2>
          <button onClick={logOut}>logout</button>
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </>
      )}
    </div>
  );
};

export default App;
