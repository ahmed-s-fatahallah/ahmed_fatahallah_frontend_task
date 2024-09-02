"use client";

import { usePathname, useSearchParams } from "next/navigation";

export default function HamburgerBtn() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isActive = searchParams.has("side_menu");

  return (
    <button
      type="button"
      title="hamburger button"
      aria-label="hamburger button"
      className="me-auto hidden max-[1220px]:flex flex-col items-center justify-center w-10 h-10 space-y-2 bg-dark-gray-4 rounded focus:outline-none"
      onClick={() => {
        if (searchParams.has("side_menu")) {
          history.replaceState(null, "", pathname);
        } else {
          history.replaceState(null, "", `${pathname}?side_menu`);
        }
      }}
    >
      <div
        className={`w-8 h-0.5 bg-gray-600 transition-transform duration-300 ease-in-out ${
          isActive ? "rotate-45 translate-y-[10px]" : ""
        }`}
      ></div>
      <div
        className={`w-8 h-0.5 bg-gray-600 transition-opacity duration-300 ease-in-out ${
          isActive ? "opacity-0" : ""
        }`}
      ></div>
      <div
        className={`w-8 h-0.5 bg-gray-600 transition-transform duration-300 ease-in-out ${
          isActive ? "-rotate-45 -translate-y-[10px]" : ""
        }`}
      ></div>
    </button>
  );
}
