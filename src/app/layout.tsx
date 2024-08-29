import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
