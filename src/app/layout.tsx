import type { Metadata } from "next";
import { geistSans, geistMono } from "@/fonts";
import "./globals.css"
import PageWrapper from "@/components/Container";


export const metadata: Metadata = {
  title: "Software Systems Labaratory",
  description: "CSED | NITC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
