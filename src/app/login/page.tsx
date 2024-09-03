import CypartaIcon from "@/assets/images/cypartal_logo.svg";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect, RedirectType } from "next/navigation";
import LoginForm from "./LoginForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page",
};

/**
 * Login page component. Handles the login page functionality, checking for an existing access token and redirecting to the employee profile page if found.
 *
 * @return {JSX.Element} The JSX element representing the login page.
 */
export default function Login() {
  const token = cookies().has("access");

  if (token) {
    redirect("/employees/profile", RedirectType.replace);
  }

  return (
    <main>
      <section className="max-w-[616px] mx-auto mt-[189px] ">
        <h1>
          <Link href="/">
            <CypartaIcon className="mx-auto mb-8" />
          </Link>
        </h1>
        <LoginForm />
      </section>
    </main>
  );
}
