"use client";
import "./globals.css";
import { poppins } from "./fonts";
import { useSmoothScroll } from "@/lib/lenis";
import Header from "./components/common/Header";
import CustomCursor from "./components/common/CustomCursor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useSmoothScroll();

  return (
    <html lang="en" className={poppins.className}>
      <body>
        <CustomCursor />
        <Header />
        {children}
      </body>
    </html>
  );
}
