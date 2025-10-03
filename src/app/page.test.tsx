import { type ComponentProps } from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Home from "./page";

vi.mock("next/link", () => {
  return {
    __esModule: true,
    default: ({ children, ...props }: ComponentProps<"a">) => (
      <a {...props}>{children}</a>
    ),
  };
});

describe("Home page", () => {
  it("shows the hero narrative", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /Adrian Cancio/i,
    );
    expect(
      screen.getByText(/Software Developer at Treelogic/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Aspiring Cloud\/DevOps Engineer/i),
    ).toBeInTheDocument();
  });

  it("lists cloud-aligned projects", () => {
    render(<Home />);

    expect(
      screen.queryByRole("link", { name: /PowerShell-Config/i }),
    ).not.toBeInTheDocument();
    // Projects are surfaced through "View repo" links instead of raw repo names.
    expect(
      screen.getAllByRole("link", { name: /View repo/i }).length,
    ).toBeGreaterThanOrEqual(5);
  });

  it("provides contact information", () => {
    render(<Home />);

    const emailLink = screen.getByRole("link", { name: /cancio@duck.com/i });
    expect(emailLink).toHaveAttribute("href", "mailto:cancio@duck.com");

    const githubLink = screen.getByRole("link", { name: /adrian-cancio/i });
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/adrian-cancio",
    );
  });
});
