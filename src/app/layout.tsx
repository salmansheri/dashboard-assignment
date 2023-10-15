import Sidebar from "@/components/ui/sidebar/sidebar";
import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/ui/header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background">
        <div className="h-full relative">
          <div className="hidden md:flex md:fixed md:w-72 md:flex-col z-50 h-screen md:inset-y-0">
            <Sidebar />
          </div>
          <main className="md:pl-72">
            <div className="px-10 py-7">
              <Header />
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
