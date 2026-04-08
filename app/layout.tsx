import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jamie Kim — UX Researcher",
  description:
    "UX Researcher specializing in human-centered design for complex systems, AI, and emerging technology.",
  openGraph: {
    title: "Jamie Kim — UX Researcher",
    description:
      "UX Researcher specializing in human-centered design for complex systems, AI, and emerging technology.",
    url: "https://jamiejk.com",
    siteName: "Jamie Kim",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
