import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

type Variant = "sidebar";

interface StyledLinkProps extends LinkProps {
  className?: ClassNameValue;
  variant?: Variant;
  children?: ReactNode;
}

type StyledLinkStylesMapper = Record<Variant, ClassNameValue>;

const styledLinkStylesMapper: StyledLinkStylesMapper = {
  sidebar: "flex gap-5 items-center w-full",
};

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
