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

/**
 * A reusable generic dummy link component that accepts variant and className props and depending on the variant the styles are applied.
 *
 * @param {StyledLinkProps} props - The props for the StyledLink component.
 * @param {Variant} props.variant - The variant of the styled link.
 * @param {ClassNameValue} props.className - The additional class name for the styled link.
 * @param {ReactNode} props.children - The children of the styled link.
 * @param {LinkProps} props.rest - The rest of the props for the Link component.
 * @return {JSX.Element} The styled link element.
 */
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
