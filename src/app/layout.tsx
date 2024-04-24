import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Supercharged || Next",
  description: " Unleash the power of Next.js to create a high-speed supercar information hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center ">
        <Navbar/>
        </div>
        {children}
        <div>
          <Footer/>
        </div>
        </body>
    </html>
  );
}
