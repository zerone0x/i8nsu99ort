import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manlun Zhang - Portfolio",
  description: "Portfolio of Manlun Zhang",
  openGraph: {
    title: "Manlun Zhang - Portfolio",
    description: "Portfolio of Manlun Zhang",
    url: "https://trine.dev",
    siteName: "Manlun Zhang Creations",
    images: [
      {
        url: "https://res.cloudinary.com/soberzml/image/upload/v1723646672/trinedev/b63hsyjma8m8atkimma1.png",
        width: 1200,
        height: 630,
        alt: "Open Graph Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="{inter.className}">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
