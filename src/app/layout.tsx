"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

import { useSelectedLayoutSegment } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const segment = useSelectedLayoutSegment();

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="flex flex-col gap-1"></div>
        {children}
      </body>
    </html>
  );
}
