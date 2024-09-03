import { afterAll, beforeAll, expect, it, suite, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import StyledLink from "@/Components/StyledLink";
import UserDataTopSection from "./UserDataTopSection";
import type { UserBaseData, UserInfo } from "@/types";
import type { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import UserDataSection from "./UserDataSection";

// Mock the fonts functions
vi.mock("next/font/google", () => ({
  Cairo: () => ({ className: "" }),
  Inter: () => ({ className: "" }),
  Lexend: () => ({ className: "" }),
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
  usePathname: () => "",
  useSearchParams: () => ({
    has: (param: string) => true,
    get: (param: string) => "",
  }),
}));

// Mock useFormState and useFormStatus hooks
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

const mockUserData: UserBaseData & Pick<UserInfo, "image"> = {
  first_name: "Ahmed",
  last_name: "Saeed",
  email: "ahmed@email.com",
  bio: "frontend developer",
  phone: "123456789",
  image: "",
};

suite("Profile Page User Data top section", () => {
  beforeAll(() => {
    render(<UserDataTopSection {...mockUserData} />);
  });

  afterAll(() => {
    cleanup();
  });

  it("tests the cucumber links", async () => {
    const path = "#";
    render(<StyledLink href={path} />);
    expect(screen.getByRole("link")).toBeTruthy();
  });
  it("tests the User image", async () => {
    expect(screen.getByRole("img", { name: "user photo" })).toBeTruthy();
  });
  it("tests the User Name", async () => {
    expect(
      screen.getByRole("heading", { level: 1, name: "Ahmed Saeed" })
    ).toBeTruthy();
  });
  it("tests the User Name", async () => {
    expect(
      screen.getByRole("heading", { level: 2, name: "ahmed@email.com" })
    ).toBeTruthy();
  });
  it("tests the User Bio", async () => {
    expect(screen.getByDisplayValue("frontend developer")).toBeTruthy();
  });
  it("tests the Edit button", async () => {
    expect(screen.getByText("Edit Profile")).toBeTruthy();
  });
});

suite("Profile Page User Data bottom section", () => {
  beforeAll(() => {
    render(<UserDataSection {...mockUserData} />);
  });

  it("tests the User first name input", () => {
    expect(screen.getByDisplayValue("Ahmed")).toBeTruthy();
  });
  it("tests the User last name input", () => {
    expect(screen.getByDisplayValue("Saeed")).toBeTruthy();
  });
  it("tests the User Mobile Number input", () => {
    expect(screen.getByDisplayValue("123456789")).toBeTruthy();
  });
  it("tests the User Email input", () => {
    expect(screen.getByDisplayValue("ahmed@email.com")).toBeTruthy();
  });
  it("tests the User user fixed data paragraphs", () => {
    expect(screen.getAllByRole("paragraph")).toHaveLength(22);
  });
  it("tests the submit Button", () => {
    expect(screen.getByRole("button", { name: "Submit" })).toBeTruthy();
  });
  it("tests the cancel Button", () => {
    expect(screen.getByRole("button", { name: "Cancel" })).toBeTruthy();
  });
});
