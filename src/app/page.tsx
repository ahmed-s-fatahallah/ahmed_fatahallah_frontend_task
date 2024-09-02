"use client";
import CypartaIcon from "@/assets/images/cypartal_logo.svg";
import Button from "@/Components/Button";
import { useRouter } from "next/navigation";

/**
 * The Home component is the main entry point of the application.
 * It renders a welcome message and a button to navigate to the login page.
 *
 * @return {JSX.Element} The JSX element representing the Home component
 */
export default function Home() {
  const router = useRouter();
  return (
    <section className="h-screen flex flex-col justify-center items-center gap-8">
      <CypartaIcon className="mx-auto mb-8" />
      <h1 className="text-center text-3xl font-bold">
        Welcome to Ahmed Saeed&apos;s Cyparta Frontend Task
      </h1>
      <Button
        variant="login"
        onClick={() => {
          router.push("/login");
        }}
      >
        Go to Login Page
      </Button>
    </section>
  );
}
