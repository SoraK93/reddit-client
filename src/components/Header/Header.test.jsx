import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { Header } from "./Header";
import userEvent from "@testing-library/user-event";

describe("Header render test", () => {
  beforeEach(() => {
    render(<Header />);
  })

  describe("page logo", () => {
    it("should render page logo", () => {
      const imgElement = screen.getByAltText(/reddit logo/i)
      expect(imgElement).toBeInTheDocument();
    });
  })

  describe("input field", () => {
    it("should render input field", () => {
      const inputElement = screen.getByPlaceholderText("search");
      
      expect(inputElement).toBeInTheDocument();
    });

    it("should render input field with text", async () => {
      const inputElement = screen.getByPlaceholderText("search");
      
      await userEvent.type(inputElement, "Hello");
      expect(inputElement).toHaveValue("Hello");
    });
  });

  describe("user profile", () => {
    it("should render user profile", () => {
      const imgElement = screen.getByAltText(/user profile image/i)
      expect(imgElement).toBeInTheDocument();
    });
  })
});
