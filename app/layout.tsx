import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/common/theme-swtich";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full-Stack JavaScript Developer | React, Next.js, JavaScript, TypeScript, PostgreSQL",
  description: "Parth is an experienced full-stack JavaScript developer specializing in React, Next.js, Typescript, PostgreSQL and performance optimization. Passionate about building scalable and type-safe web applications, enhancing site performance, and creating seamless user experiences. Explore my projects and expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} relative bg-slate-100 text-gray-950 dark:bg-[#060606] dark:text-gray-50 dark:text-opacity-90`}>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            
            {children}
            <Footer />
          </ActiveSectionContextProvider>
          <Toaster position="top-right" />
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
