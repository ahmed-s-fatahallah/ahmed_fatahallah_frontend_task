import Button from "@/Components/Button";
import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

/**
 * A reusable submit button component that displays a login variant button it is disabled when the form is being submitted.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the button.
 * @return {JSX.Element} A JSX element representing the submit button.
 */
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
