import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Form Factory",
  description: "Generate sharable forms using drag-and-drop",
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
