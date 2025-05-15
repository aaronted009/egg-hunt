import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { poppins } from "@/app/ui/fonts";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Egg Hunt",
  description: "Minimalist Egg Hunt Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
