import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Blog from "./Blog";

test("renders blog", () => {
  const blog = {
    title: "winter is coming",
    author: "Richard",
    url: "kathmandu.com",
    likes: 0,
  };

  const { container } = render(<Blog blog={blog} />);
  const div = container.querySelector(".blog");

  //   const element = screen.getByText(
  //     "Component testing is done with react-testing-library"
  //   );
  expect(div).toHaveTextContent("winter is coming");
  expect(div).toHaveTextContent("Richard");
});

test("clicking the button calls event handler once", async () => {
  const blog = {
    title: "winter is coming",
    author: "Richard",
    url: "kathmandu.com",
    likes: 0,
    user: {
      username: "Laxmii",
      name: "laxmi hamal",
      id: "iefakfaieiaueihaie",
    },
  };

  const User = {
    username: "Laxmii",
    name: "laxmi hamal",
    id: "iefakfaieiaueihaie",
  };

  //const mockHandler = jest.fn();

  const { container } = render(<Blog blog={blog} user={User} />);
  const user = userEvent.setup();
  const button = container.querySelector(".view");
  await user.click(button);
  const url = container.querySelector(".url");
  const likes = container.querySelector(".likes");

  expect(url).toHaveTextContent("kathmandu.com");
  expect(likes).toHaveTextContent("likes");
});
