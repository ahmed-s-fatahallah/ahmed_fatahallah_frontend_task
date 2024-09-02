import { cairo } from "@/Utils/fonts";
import type { Metadata } from "next";

import "./globals.css";

// Main meta data object
export const metadata: Metadata = {
  title: "Frontend Task",
  description: "Ahmed Saeed's Cyparta Frontend Task",
};

/**
 * A top-level layout component that wraps the entire application.
 *
 * @param {React.ReactNode} children - The child components to be rendered within the layout.
 * @return {JSX.Element} The rendered layout component.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
