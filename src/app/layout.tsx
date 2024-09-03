import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileBar from "@/components/MobileBar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iran Jack",
  description: "Iran Jack's test project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex justify-start items-start">
          <div className="hidden md:block sticky top-0 z-10">
            <Sidebar />
          </div>

          <div className="block md:hidden">
            <MobileBar />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
