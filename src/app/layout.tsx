import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-mono antialiased`}
      >
        <div className="mx-auto max-w-sm border-2 m-2 rounded-xl p-2 h-screen flex flex-col overflow-y-auto no-scrollbar">
          <div className="flex-grow">{children}</div>
        </div>
      </body>
    </html>
  );
}
