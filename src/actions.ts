"use server";

import type { UserBaseData, UserInfo } from "@/types";
import { revalidatePath } from "next/cache";
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

const editUserDataSchema = z.object({
  first_name: z
    .string()
    .min(2, "Name must have min of 2 characters")
    .nullable(),
  last_name: z.string().min(2, "Name must have min of 2 characters").nullable(),
  phone: z
    .string()
    .min(10, "Phone number must have at least 10 digits")
    .max(14, "Phone number must have not be more than 14 digits")
    .nullable(),
  email: z.string().email("Please enter a valid email address").nullable(),
  bio: z.string().nullable(),
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

  params.append("email", result.data.email);
  params.append("password", result.data.password);

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

export const getUserInfo = async () => {
  const token = cookies().get("access");

  if (!token) redirect("/login", RedirectType.replace);

  const res = await fetch(
    "https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/",
    { method: "GET", headers: { Authorization: `Bearer ${token.value}` } }
  );

  if (!res.ok) throw new Error("failed to fetch user data");

  const data: UserInfo = await res.json();

  return data;
};

export const editUser = async (prevState: UserBaseData, formData: FormData) => {
  const token = cookies().get("access");

  if (!token) redirect("/login", RedirectType.replace);

  const result = editUserDataSchema.safeParse({
    first_name: formData.get("firstName"),
    last_name: formData.get("lastName"),
    phone: formData.get("mobileNumber"),
    email: formData.get("email"),
    bio: formData.get("bio"),
  });

  if (!result.success) {
    return result.error.flatten().fieldErrors;
  }
  const modifiedBody: Partial<
    Record<keyof UserBaseData, string | number | undefined | null>
  > = {};

  Object.keys(prevState).forEach((key) => {
    const typedKey = key as keyof UserBaseData;

    if (prevState[typedKey] != result.data[typedKey]) {
      modifiedBody[typedKey] = result.data[typedKey];
    }
  });

  try {
    const res = await fetch(
      "https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/",
      {
        method: "PATCH",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.value}`,
        },
        body: JSON.stringify(modifiedBody),
      }
    );

    const data = await res.json();

    if (!res.ok) throw new Error("Failed to update user data");

    revalidatePath("/employees/profile");
    return data;
  } catch (err) {
    throw err;
  }
};

export const logout = async () => {
  cookies().delete("access");
  redirect("/login", RedirectType.replace);
};
