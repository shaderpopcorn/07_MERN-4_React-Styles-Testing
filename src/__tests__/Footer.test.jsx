// ANCHOR COMMENT --> using jsdom as testing environment
/**
 * @vitest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Footer from "../components/Footer";

describe("Footer", () => {
  test("footer text should contain the copyright symbol", () => {
    render(<Footer />);
    expect(screen.getByTestId("copyright")).toHaveTextContent(
      "© Copyright by Shaderpopcorn"
    );
  });
});
