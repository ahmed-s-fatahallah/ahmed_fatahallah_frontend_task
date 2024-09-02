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
  login: "mb-5",
  profile: "border-dark-gray-4 border-b-[1px]",
} as const;

const inputVariantStylesMapper: VariantStyleMappers = {
  login: "w-[545px] py-3 px-4 border-[1px] border-dark-gray rounded-[10px]",
  profile: "font-light text-dark-blue-1 mb-[10px] disabled:bg-white outline-0",
} as const;

const labelVariantStyleMapper: VariantStyleMappers = {
  login: "",
  profile: "mb-1 text-sm leading-[22px] text-dark-gray-5 font-light",
} as const;

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
