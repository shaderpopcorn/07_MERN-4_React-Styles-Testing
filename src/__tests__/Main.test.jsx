// ANCHOR COMMENT --> using jsdom as testing environment
/**
 * @vitest-environment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Main from "../components/Main";

describe("Main", () => {
  // BOX
  test("box is rendered", () => {
    render(<Main />);
    expect(screen.getByTestId("box")).toContainHTML("div");
  });
  test("left-button has '2D+3D' content", () => {
    render(<Main />);
    expect(screen.getByTestId("left-button")).toHaveTextContent("2D+3D");
  });
  test("right-button has 'AR+VR' content", () => {
    render(<Main />);
    expect(screen.getByTestId("right-button")).toHaveTextContent("AR+VR");
  });
  // POPUP LEFT
  test("left-button shows left-popup", () => {
    render(<Main />);
    const leftButton = screen.getByTestId("left-button");
    expect(screen.getByTestId("left-popup")).toHaveStyle("visibility: hidden");
    fireEvent.click(leftButton);
    expect(screen.getByTestId("left-popup")).toHaveStyle("visibility: visible");
  });
  test("left-popup has headline", () => {
    render(<Main />);
    expect(screen.getByTestId("left-popup")).toContainHTML("h3");
  });
  test("left-headline has the correct text", () => {
    render(<Main />);
    expect(screen.getByTestId("left-headline")).toHaveTextContent(
      "2D+3D Projects"
    );
  });
  test("left-popup has text", () => {
    render(<Main />);
    expect(screen.getByTestId("left-popup")).toContainHTML("p");
  });
  test("left-text has the correct text", () => {
    render(<Main />);
    expect(screen.getByTestId("left-text")).toHaveTextContent("Lorem");
  });
  // POPUP RIGHT
  test("right-button shows right-popup", () => {
    render(<Main />);
    const rightButton = screen.getByTestId("right-button");
    expect(screen.getByTestId("right-popup")).toHaveStyle("visibility: hidden");
    fireEvent.click(rightButton);
    expect(screen.getByTestId("right-popup")).toHaveStyle(
      "visibility: visible"
    );
  });
  test("right-popup has headline", () => {
    render(<Main />);
    expect(screen.getByTestId("right-popup")).toContainHTML("h3");
  });
  test("right-headline has the correct text", () => {
    render(<Main />);
    expect(screen.getByTestId("right-headline")).toHaveTextContent(
      "AR+VR Projects"
    );
  });
  test("right-popup has text", () => {
    render(<Main />);
    expect(screen.getByTestId("right-popup")).toContainHTML("p");
  });
  test("right-text has the correct text", () => {
    render(<Main />);
    expect(screen.getByTestId("right-text")).toHaveTextContent("Lorem");
  });
});
