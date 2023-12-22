// ANCHOR COMMENT --> using jsdom as testing environment
/**
 * @vitest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Header from "../components/Header";

describe("Header", () => {
  test("logo should have the correct alt text", () => {
    render(<Header />);
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Turbine Icon");
  });
  test("Heading should contain the correct text", () => {
    render(<Header />);
    expect(screen.getByTestId("title")).toHaveTextContent("Turbine");
  });
});
