"use client";
import "./globals.css";
import { poppins } from "./fonts";
import { useSmoothScroll } from "@/lib/lenis";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useSmoothScroll();

  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
