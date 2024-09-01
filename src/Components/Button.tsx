import { ComponentPropsWithRef } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

type Variant = "login" | "edit" | "sidebar" | "tab";

type ButtonStylesMapper = Record<Variant, ClassNameValue>;

interface Button extends ComponentPropsWithRef<"button"> {
  variant?: Variant;
}

const buttonStylesMapper: ButtonStylesMapper = {
  login:
    "mb-[62px] w-[445px] h-14 bg-dark-gray-2 text-white rounded-[10px] block mx-auto",
  edit: "px-5 py-[13px] me-[86px] bg-dark-gray-1 rounded-[10px] text-white font-light flex items-center gap-[10px]",
  sidebar: "flex gap-5 items-center w-full",
  tab: "flex gap-[10px]",
} as const;

export default function Button({
  variant,
  children,
  className,
  ...rest
}: Button) {
  return (
    <button
      className={variant ? twMerge(buttonStylesMapper[variant], className) : ""}
      {...rest}
    >
      {children}
    </button>
  );
}
