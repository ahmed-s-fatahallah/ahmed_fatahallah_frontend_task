"use client";

import { login } from "@/actions";
import CypartaIcon from "@/assets/images/cypartal_logo.svg";
import InputField from "@/Components/InputField";
import { getClientSideCookie } from "@/Utils/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
import { useFormState } from "react-dom";
import SubmitButton from "./SubmitButton";

export default function Login() {
  const [state, loginAction] = useFormState(login, null);
  const router = useRouter();

  useLayoutEffect(() => {
    if (getClientSideCookie("access")) {
      router.replace("/employees/profile");
    }
  }, [router]);

  return (
    <main>
      <section className="max-w-[616px] mx-auto mt-[189px] ">
        <h1>
          <Link href="/">
            <CypartaIcon className="mx-auto mb-8" />
          </Link>
        </h1>
        <form
          noValidate
          action={loginAction}
          className="border-[0.6px] border-light-gray rounded-2xl"
        >
          <div className="my-[84px] mx-auto w-fit mr-6 text-[17px] font-semibold leading-8 text-dark-gray-2">
            <p className="text-light-red-2 font-semibold">
              {state && "message" in state && state?.message}
            </p>
            <InputField
              variant="login"
              name="email"
              type="email"
              placeholder="Email Address"
              errorMsg={state && "email" in state ? state?.email?.[0] : ""}
            >
              Email Address
            </InputField>
            <InputField
              variant="login"
              name="password"
              type="password"
              placeholder="Password"
              errorMsg={
                state && "password" in state ? state?.password?.[0] : ""
              }
            >
              Password
            </InputField>
          </div>
          <SubmitButton>Login</SubmitButton>
        </form>
      </section>
    </main>
  );
}
