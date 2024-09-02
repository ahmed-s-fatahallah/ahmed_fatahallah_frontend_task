import { ComponentPropsWithRef } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

type Variant = "login" | "edit" | "sidebar" | "tab" | "cancel";

type ButtonStylesMapper = Record<Variant, ClassNameValue>;

interface Button extends ComponentPropsWithRef<"button"> {
  variant?: Variant;
}

const buttonStylesMapper: ButtonStylesMapper = {
  login:
    "mb-[62px] w-[445px] py-4 bg-dark-gray-2 text-white rounded-[10px] block mx-auto max-md:w-[250px] max-sm:w-[200px]",
  edit: "px-5 py-[13px] bg-dark-gray-1 rounded-[10px] text-white font-light flex items-center gap-[10px] disabled:bg-dark-gray-5 hover:bg-dark-gray",
  sidebar:
    "flex gap-5 items-center w-full py-[10px] pe-[30px] ps-20 rounded-r-full relative",
  tab: "flex gap-[10px] hover:text-light-red-2 max-lg:shrink-0",
  cancel:
    "px-5 py-[13px] rounded-[10px] bg-dark-gray-4 hover:text-white hover:bg-dark-gray",
} as const;

/**
 * A reusable generic dummy button component that extends the native button element.
 *
 * @param {Object} props - The properties for the button component.
 * @param {string} props.variant - The variant of the button. Can be one of: "login", "edit", "sidebar", "tab", "cancel" depending on the variant the styles are applied.
 * @param {ReactNode} props.children - The content to be rendered inside the button.
 * @param {string} props.className - Additional CSS class names for the button.
 * @param {Object} props.rest - Additional props to be spread onto the button element.
 * @return {JSX.Element} The rendered button component.
 */
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
