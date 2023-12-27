// ANCHOR COMMENT --> using jsdom as testing environment
/**
 * @vitest-environment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { createMemoryHistory } from "history";
import { Link, Router } from "react-router-dom";

import Header from "../components/Header";
// import Layout from "../pages/Layout";

describe("Header", () => {
  // test("logo should have the correct alt text", () => {
  //   render(<Header />);
  //   expect(screen.getByRole("img")).toHaveAttribute(
  //     "alt",
  //     "Shaderpopcorn Logo"
  //   );
  // });
  test("heading should contain the correct text", () => {
    render(<Header />);
    expect(screen.getByTestId("title")).toHaveTextContent("Shaderpopcorn");
  });
  // test("about link should point to the right subpage", () => {
  //   const history = createMemoryHistory();

  //   history.push = jest.fn();

  //   const { getByText } = render(
  //     <Router history={history}>
  //       <Link to="/about">About</Link>
  //     </Router>
  //   );

  //   fireEvent.click(getByText("About"));

  //   expect(history.push).toHaveBeenCalledWith("/about");
  // });
});
