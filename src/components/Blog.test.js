import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
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
