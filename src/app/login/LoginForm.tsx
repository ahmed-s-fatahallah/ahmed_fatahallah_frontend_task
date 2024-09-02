"use client";

import InputField from "@/Components/InputField";
import SubmitButton from "./SubmitButton";
import { useFormState } from "react-dom";
import { login } from "@/actions";

export default function LoginForm() {
  const initialState = {
    message: "",
  };

  const [state, loginAction] = useFormState(login, initialState);

  return (
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
          errorMsg={state && "password" in state ? state?.password?.[0] : ""}
        >
          Password
        </InputField>
      </div>
      <SubmitButton>Login</SubmitButton>
    </form>
  );
}
