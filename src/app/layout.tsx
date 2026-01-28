import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Higher Forces",
  description: "Artistic practice",
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
