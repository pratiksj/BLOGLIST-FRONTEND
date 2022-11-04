import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BlogForm from "./BlogForm";
import userEvent from "@testing-library/user-event";

test("<BlogForm /> updates parent state and calls onSubmit", async () => {
  const createBlog = jest.fn();

  render(<BlogForm createBlog={createBlog} />);

  const title = screen.getByPlaceholderText("title");
  const author = screen.getByPlaceholderText("author");
  const url = screen.getByPlaceholderText("url");
  //   screen.debug(title);
  //   screen.debug(author);
  //   screen.debug(url);

  const user = userEvent.setup();
  console.log(user, "kathmandu");
  const addButton = screen.getByText("Add");
  //screen.debug(addButton, "I am here");
  //console.log(addButton);

  await user.type(title, "who am i");
  await user.type(author, "harka bahadur");
  await user.type(url, "himalyan.com");
  await user.click(addButton);

  expect(addButton.mock.calls).toHaveLength(1);
  expect(addButton.mock.calls[0][0].title).toBe("who am i");
});
