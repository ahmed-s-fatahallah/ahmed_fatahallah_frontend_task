import CypartaIcon from "@/assets/images/cypartal_logo.svg";
import { cookies } from "next/headers";
import HomeBtn from "./HomeBtn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { template: "%s | Home Page", default: "Frontend Task" },
};

/**
 * The Home component is the main entry point of the application.
 * It renders a welcome message and a button to navigate to the login page.
 *
 * @return {JSX.Element} The JSX element representing the Home component
 */
export default function Home() {
  const isUser = cookies().has("access");

  return (
    <section className="h-screen flex flex-col justify-center items-center gap-8">
      <h1 className="text-center text-3xl font-bold">
        Welcome to Ahmed Saeed&apos;s Cyparta Frontend Task
      </h1>
      <CypartaIcon className="mx-auto mb-8" />
      <HomeBtn isUser={isUser} />
    </section>
  );
}
