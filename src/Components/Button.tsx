import { ComponentPropsWithRef } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

type Variant = "login" | "edit" | "sidebar" | "tab" | "cancel";

type ButtonStylesMapper = Record<Variant, ClassNameValue>;

interface Button extends ComponentPropsWithRef<"button"> {
  variant?: Variant;
}

const buttonStylesMapper: ButtonStylesMapper = {
  login:
    "mb-[62px] w-[445px] h-14 bg-dark-gray-2 text-white rounded-[10px] block mx-auto",
  edit: "px-5 py-[13px] bg-dark-gray-1 rounded-[10px] text-white font-light flex items-center gap-[10px] disabled:bg-dark-gray-5 hover:bg-dark-gray",
  sidebar:
    "flex gap-5 items-center w-full py-[10px] pe-[30px] ps-20 rounded-r-full relative",
  tab: "flex gap-[10px]",
  cancel:
    "px-5 py-[13px] rounded-[10px] bg-dark-gray-4 hover:text-white hover:bg-dark-gray",
} as const;

export default function Button({
  variant,
  children,
  className,
  ...rest
}: Button) {
  return (
    <button
      className={
        variant
          ? twMerge(buttonStylesMapper[variant], className)
          : className
          ? className
          : ""
      }
      {...rest}
    >
      {children}
    </button>
  );
}
