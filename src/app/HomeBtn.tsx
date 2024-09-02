"use client";

import Button from "@/Components/Button";
import { useRouter } from "next/navigation";

export default function HomeBtn({ isUser }: { isUser: boolean }) {
  const router = useRouter();
  return (
    <Button
      variant="login"
      onClick={() => {
        router.push(isUser ? "/employees/profile" : "/login");
      }}
    >
      {isUser ? "Go to Profile Page" : "Go to Login Page"}
    </Button>
  );
}
