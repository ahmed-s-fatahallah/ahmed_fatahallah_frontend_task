import { ComponentPropsWithRef, useId } from "react";
import { twMerge } from "tailwind-merge";

type Variant = "login" | "profile";

type VariantStyleMappers = Record<Variant, string>;

interface InputFieldProps extends ComponentPropsWithRef<"input"> {
  variant?: Variant;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorMsg?: string;
}

const wrapperVariantStyleMapper: VariantStyleMappers = {
  login: "mb-5 max-w-[545px]  max-md:mx-6",
  profile: "border-dark-gray-4 border-b-[1px]",
} as const;

const inputVariantStylesMapper: VariantStyleMappers = {
  login: "py-3 px-4 border-[1px] border-dark-gray rounded-[10px]",
  profile: "font-light text-dark-blue-1 mb-[10px] disabled:bg-white outline-0",
} as const;

const labelVariantStyleMapper: VariantStyleMappers = {
  login: "",
  profile: "mb-1 text-sm leading-[22px] text-dark-gray-5 font-light",
} as const;

/**
 * A reusable input field component that extends the native input element and accepts various props for customization and styling, it contains the label, input, and error message elements.
 *
 * @param {Variant} variant - The variant of the input field, either "login" or "profile".
 * @param {string} wrapperClassName - Additional class names for the wrapper element.
 * @param {string} labelClassName - Additional class names for the label element.
 * @param {string} inputClassName - Additional class names for the input element.
 * @param {string} errorMsg - The error message to be displayed.
 * @param {string} className - Additional class names for the input field.
 * @param {React.ReactNode} children - The content to be rendered inside the label.
 * @param {...object} rest - Additional props to be passed to the input element.
 * @return {JSX.Element} A JSX element representing the input field.
 */
export default function InputField({
  variant,
  wrapperClassName,
  labelClassName,
  inputClassName,
  errorMsg,
  className,
  children,
  ...rest
}: InputFieldProps) {
  const id = useId();

  return (
    <div
      className={
        variant
          ? twMerge(wrapperVariantStyleMapper[variant], wrapperClassName)
          : wrapperClassName
          ? wrapperClassName
          : ""
      }
    >
      <label
        className={
          variant
            ? twMerge(labelVariantStyleMapper[variant], labelClassName)
            : labelClassName
            ? labelClassName
            : ""
        }
        htmlFor={id}
      >
        {children}
      </label>
      <input
        id={id}
        className={
          variant
            ? twMerge(inputVariantStylesMapper[variant], inputClassName)
            : inputClassName
            ? inputClassName
            : ""
        }
        {...rest}
      />
      <p className="font-semibold text-light-red-2">{errorMsg}</p>
    </div>
  );
}
