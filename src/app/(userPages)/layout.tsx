import { lexend } from "@/Utils/fonts";
import SideBar from "@/app/(userPages)/SideBar";
import { ReactNode } from "react";
import Header from "./Header";

/**
 * A sub layout component that wraps the Header, SideBar, and profile Page.
 *
 * @param {ReactNode} children - The child components to be rendered within the layout.
 * @return {JSX.Element} The rendered layout component.
 */
export default function layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Header />
      <main className={`flex text-dark-gray-1 ${lexend.className}`}>
        <SideBar />
        {children}
      </main>
    </>
  );
}
