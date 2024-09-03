import { afterEach, expect, it, suite, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Page from "@/app/page";
import type { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import HomeBtn from "./HomeBtn";

// Mock the cookies function
vi.mock("next/headers", () => ({
  cookies: () => ({
    has: () => "mocked-cookie-value",
  }),
}));

// Mock use router hook
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    back: () => {},
    forward: () => {},
    refresh: () => {},
    prefetch: () => {},
    replace: (href: string, options?: NavigateOptions) => {},
    push: (href: string, options?: NavigateOptions) => {},
  }),
}));

afterEach(() => {
  cleanup();
});

suite("home Page", () => {
  it("tests the home page header", () => {
    render(<Page />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Welcome to Ahmed Saeed's Cyparta Frontend Task",
      })
    ).toBeDefined();
  });

  it("tests the home page button when user is not authenticated", () => {
    const isUser = false;
    render(<HomeBtn isUser={isUser} />);
    expect(
      screen.getByRole("button", {
        name: "Go to Login Page",
      })
    ).toBeDefined();
  });
  it("tests the home page button when user is authenticated", () => {
    const isUser = true;
    render(<HomeBtn isUser={isUser} />);
    expect(
      screen.getByRole("button", {
        name: "Go to Profile Page",
      })
    ).toBeDefined();
  });
});
