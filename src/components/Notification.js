const Notification = ({ message, color }) => {
  if (message === null) {
    return null;
  }

  return <div className={color === "blog" ? "blog" : "error"}>{message}</div>;
};

export default Notification;
