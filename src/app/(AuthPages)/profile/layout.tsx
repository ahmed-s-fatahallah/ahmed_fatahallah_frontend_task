import SideBar from "@/app/SideBar";
import { ReactNode } from "react";

export default function layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <SideBar />
      {children}
    </>
  );
}
