import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { ThemeProvider } from "@/components/ThemeProvider";

import "@/styles/globals.css";
import "@/styles/theme.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Upload & Share",
  description: "Upload your files and share them with others"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
