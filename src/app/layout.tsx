import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import CustomCursor from "./Components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SKAM Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
    {/* <CustomCursor/> */}
{children}</body>
    </html>
  );
}
