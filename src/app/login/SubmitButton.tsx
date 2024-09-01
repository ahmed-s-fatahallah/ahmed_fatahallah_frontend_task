import Button from "@/Components/Button";
import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ children }: ComponentProps<"button">) {
  const { pending } = useFormStatus();

  return (
    <Button
      variant="login"
      type="submit"
      disabled={pending}
      className="disabled:bg-dark-gray-5 hover:bg-dark-gray font-bold"
    >
      {children}
    </Button>
  );
}
