// ANCHOR COMMENT --> using jsdom as testing environment
/**
 * @vitest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Main from "../components/Main";

describe("Main", () => {
  test("box should be rendered", () => {
    render(<Main />);
    expect(screen.getByTestId("box")).toContainHTML("div");
  });
  test("left side should be rendered", () => {
    render(<Main />);
    expect(screen.getByTestId("left-side")).toHaveTextContent("3D+2D");
  });
  test("right side should be rendered", () => {
    render(<Main />);
    expect(screen.getByTestId("right-side")).toHaveTextContent("VR+AR");
  });
});
