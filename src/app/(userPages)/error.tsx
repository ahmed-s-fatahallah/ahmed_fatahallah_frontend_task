"use client";

import { logout } from "@/actions";

export default function error() {
  return (
    <h1 className="text-light-red-2 font-bold">
      An Error Occurred While fetching user info please try again later
    </h1>
  );
}
