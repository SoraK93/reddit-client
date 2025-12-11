import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "./Footer";
import userEvent from "@testing-library/user-event";

describe("Footer", () => {
  it("should render footer", () => {
    render(<Footer />);
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });

  it("should redirect to github link page", async () => {
    render(<Footer />);
    const footerElement = screen.getByRole("link", { name: "reddit-client" });
    await userEvent.click(footerElement);
    const projectTitle = await screen.findByText("reddit-client");
    expect(projectTitle).toBeVisible();
  });
});
