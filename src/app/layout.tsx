import type { Metadata } from "next";
import "./globals.css";
import { TRPCProvider } from "@/server/trpc/client";

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
      <body className="h-full w-full flex flex-col">
        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  );
}
