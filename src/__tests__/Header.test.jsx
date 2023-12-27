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
  // HEADER SECTION
  test("header-section should be rendered", () => {
    render(<Header />);
    expect(screen.getByTestId("header-section")).toBeInTheDocument(true);
  });
  test("horizontal line should be rendered", () => {
    render(<Header />);
    expect(screen.getByTestId("horizontal-line")).toBeInTheDocument(true);
  });
  // TOP-BAR
  test("topbar should be rendered", () => {
    render(<Header />);
    expect(screen.getByTestId("topbar")).toBeInTheDocument(true);
  });
  test("topbar should contain logo-button", () => {
    render(<Header />);
    expect(screen.getByTestId("topbar")).toContainHTML("button");
  });
  test("logo-button should contain logo-image", () => {
    render(<Header />);
    expect(screen.getByTestId("topbar")).toContainHTML("img");
  });
  test("logo should contain the correct src", () => {
    render(<Header />);
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "./assets/images/logo.png"
    );
  });
  test("logo should contain the correct alt text", () => {
    render(<Header />);
    expect(screen.getByRole("img")).toHaveAttribute(
      "alt",
      "Shaderpopcorn Logo"
    );
  });
  test("topbar should contain headline", () => {
    render(<Header />);
    expect(screen.getByTestId("topbar")).toContainHTML("h3");
  });
  test("headline should contain the correct text", () => {
    render(<Header />);
    expect(screen.getByTestId("title")).toHaveTextContent("Shaderpopcorn");
  });
  // BOTTOM-BAR
  test("bottombar should be rendered", () => {
    render(<Header />);
    expect(screen.getByTestId("topbar")).toBeInTheDocument(true);
  });
  test("bottombar should contain nav-list", () => {
    render(<Header />);
    expect(screen.getByTestId("bottombar")).toContainHTML("ul");
  });
  test("nav-list should contain three links", () => {
    render(<Header />);
    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(3);
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
