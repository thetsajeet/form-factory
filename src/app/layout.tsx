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
    <html lang="en" className="h-full w-full">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="64x64" />
      </head>
      <body className="flex h-full w-full">{children}</body>
    </html>
  );
}
