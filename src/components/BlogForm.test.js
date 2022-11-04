import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BlogForm from "./BlogForm";
import userEvent from "@testing-library/user-event";
//import { input } from "@testing-library/user-event/dist/types/event";

test("<BlogForm /> updates parent state and calls onSubmit", async () => {
  const createBlog = jest.fn();
  const user = userEvent.setup();

  render(<BlogForm createBlog={createBlog} />);

  const input = screen.getByPlaceholderText("title");
  //const input = screen.getAllByRole("textbox");
  //   const author = screen.getByPlaceholderText("author");
  //   const url = screen.getByPlaceholderText("url");
  //   screen.debug(title);
  //   screen.debug(author);
  //   screen.debug(url);

  const addButton = screen.getByText("Add");

  screen.debug(addButton);
  //console.log(addButton);

  await user.type(input, "who am i");
  //   await user.type(input, "harka bahadur");
  //   await user.type(input, "himalyan.com");
  await user.click(addButton);

  expect(createBlog.mock.calls).toHaveLength(1);
  expect(createBlog.mock.calls[0][0].title).toBe("who am i");
});
