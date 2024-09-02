import CypartaIcon from "@/assets/images/cypartal_logo.svg";
import Link from "next/link";
import LoginForm from "./LoginForm";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

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
