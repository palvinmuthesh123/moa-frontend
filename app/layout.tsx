import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Mall of America - Sales Platform",
  description: "Discover the world's largest shopping mall - your destination for retail success, sponsorships, and unforgettable events.",
  keywords: ["The Mall of America", "retail", "sales", "sponsorship", "events", "Minneapolis"],
  openGraph: {
    title: "The Mall of America - Sales Platform",
    description: "Discover the world's largest shopping mall",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f0f0f" />
      </head>
      <body className={`${inter.className} bg-mall-dark text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
