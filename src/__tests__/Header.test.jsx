// ANCHOR COMMENT --> using jsdom as testing environment
/**
 * @vitest-environment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { createMemoryHistory } from "history";
import { BrowserRouter, Link, Router } from "react-router-dom";

import Header from "../components/Header";
// import Layout from "../pages/Layout";

describe("Header", () => {
  // HEADER SECTION
  test("header-section is rendered", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByTestId("header-section")).toBeInTheDocument(true);
  });
  test("horizontal line is rendered", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByTestId("horizontal-line")).toBeInTheDocument(true);
  });
  // TOP-BAR
  test("topbar is rendered", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByTestId("topbar")).toBeInTheDocument(true);
  });
  test("topbar has logo-link-button", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByTestId("topbar")).toContainHTML("a");
  });
  test("logo-button has logo-image", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByTestId("topbar")).toContainHTML("img");
  });
  test("logo has the correct src", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "./assets/images/logo.png"
    );
  });
  test("logo has the correct alt text", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByRole("img")).toHaveAttribute(
      "alt",
      "Shaderpopcorn Logo"
    );
  });
  test("topbar has headline", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByTestId("topbar")).toContainHTML("h3");
  });
  test("headline has the correct text", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByTestId("title")).toHaveTextContent("Shaderpopcorn");
  });
  // BOTTOM-BAR
  test("bottombar is rendered", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByTestId("topbar")).toBeInTheDocument(true);
  });
  test("bottombar has nav-list", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByTestId("bottombar")).toContainHTML("ul");
  });
  test("nav-list has three links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
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
