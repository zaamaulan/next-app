import type { Metadata } from "next";
// import { inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";

import { Toaster as SonnerToaster } from "@/components/atoms/ui/sonner";
import { Toaster } from "@/components/atoms/ui/toaster";
import { ClientProviders } from "@/providers/client-providers";
import "./globals.css";


// const rubik = inter({ subsets: ["latin"], weight: [] });

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
      <body className={GeistSans.className}>
        <ClientProviders>
          <Toaster />
          <SonnerToaster />
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
