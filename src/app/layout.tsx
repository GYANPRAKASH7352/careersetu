import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "CareerSetu — Bridge to Your Dream Career",
  description:
    "CareerSetu connects aspiring professionals with mentors, resources, and opportunities to accelerate their career growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
