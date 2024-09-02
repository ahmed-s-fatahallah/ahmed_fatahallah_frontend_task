import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

type Variant = "main-sidebar" | "sub-sidebar";

interface StyledLinkProps extends LinkProps {
  className?: ClassNameValue;
  variant?: Variant;
  children?: ReactNode;
}

type StyledLinkStylesMapper = Record<Variant, ClassNameValue>;

const styledLinkStylesMapper: StyledLinkStylesMapper = {
  "main-sidebar":
    "flex gap-5 items-center w-full ps-20 py-[14px] pe-[30px] rounded-r-full relative",
  "sub-sidebar": "flex gap-[10px] mb-5 font-light items-center w-full",
} as const;

export default function StyledLink({
  variant,
  className,
  children,
  ...rest
}: StyledLinkProps) {
  return (
    <Link
      className={
        variant ? twMerge(styledLinkStylesMapper[variant], className) : ""
      }
      {...rest}
    >
      {children}
    </Link>
  );
}
