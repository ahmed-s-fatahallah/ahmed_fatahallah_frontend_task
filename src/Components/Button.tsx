import { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

type Variants = ["login", "edit"];

type ButtonStylesMapper = Record<Variants[number], string>;

interface Button extends ComponentPropsWithRef<"button"> {
  variant?: Variants[number];
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
