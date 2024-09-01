import { ComponentPropsWithRef } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

type Variant = "login" | "edit";

type ButtonStylesMapper = Record<Variant, ClassNameValue>;

interface Button extends ComponentPropsWithRef<"button"> {
  variant?: Variant;
}

const buttonStylesMapper: ButtonStylesMapper = {
  login:
    "mb-[62px] w-[445px] h-14 bg-dark-gray-2 text-white rounded-[10px] block mx-auto",
  edit: "",
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
