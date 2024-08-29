import type { Metadata } from "next";
import { spaceMono } from "@/fonts/space-mono";
import { zCool } from "@/fonts/z-cool";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joe Dvorak | Developer",
  description: "Joe Dvorak web and mobile developer React portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className} ${zCool.variable}`}>
        {children}
      </body>
    </html>
  );
}
