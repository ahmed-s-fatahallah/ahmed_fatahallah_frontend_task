import { lexend } from "@/Utils/fonts";
import SideBar from "@/app/(userPages)/employees/profile/SideBar";
import { ReactNode } from "react";
import Header from "./employees/profile/Header";

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
