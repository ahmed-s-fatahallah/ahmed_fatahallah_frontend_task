import { afterAll, afterEach, beforeAll, expect, it, suite, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Page from "@/app/login/page";

// Mock the cookies function
vi.mock("next/headers", () => ({
  cookies: () => ({
    has: () => null,
  }),
}));

// Mock use router hook
vi.mock("react-dom", async (importOriginal) => {
  const actual = (await importOriginal()) as {};
  return {
    ...actual,
    useFormState: (fn: () => void, state: unknown) => [state, fn],
    useFormStatus: () => ({
      pending: false,
    }),
  };
});

beforeAll(() => {
  render(<Page />);
});

afterAll(() => {
  cleanup();
});

suite("Login Page", () => {
  it("tests the Login page heading", () => {
    expect(screen.getByRole("heading", { level: 1, name: "" })).toBeDefined();
  });
  it("tests the Email input box", () => {
    expect(
      screen.getByRole("textbox", { name: "Email Address" })
    ).toBeDefined();
  });
  it("tests the Password input box", () => {
    expect(screen.getByPlaceholderText("Password")).toBeDefined;
  });
  it("tests the Submit Button", () => {
    expect(screen.getByRole("button", { name: "Login" })).toBeDefined();
  });
});
