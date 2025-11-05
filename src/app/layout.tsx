"use client";
import "./globals.css";
import { poppins } from "./fonts";
import { useSmoothScroll } from "@/lib/lenis";
import Header from "./components/common/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useSmoothScroll();

  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
