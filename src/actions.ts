"use server";

import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid Email Address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password must be not more than 12 characters"),
});

export const login = async (prevState: any, formData: FormData) => {
  const result = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!result.success) {
    return result.error.flatten().fieldErrors;
  }

  const params = new URLSearchParams();

  params.append("email", formData.get("email")?.toString() || "");
  params.append("password", formData.get("password")?.toString() || "");

  try {
    const res = await fetch(
      "https://cyparta-backend-gf7qm.ondigitalocean.app/api/login/",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      }
    );

    const data = await res.json();

    if (!res.ok) throw new Error(data.detail);

    cookies().set("refresh", data.refresh);
    cookies().set("access", data.access);
  } catch (err) {
    if (err instanceof Error) {
      return { message: err.message };
    }
  }
  redirect("/employees/profile", RedirectType.replace);
};

export const logout = async () => {
  cookies().delete("access");
  redirect("/login", RedirectType.replace);
};
