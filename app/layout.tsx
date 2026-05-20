import type { Metadata } from "next";
import { Syne, Space_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import Navbar from "@/components/ui/Navbar";
import PageLoader from "@/components/ui/PageLoader";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ankita Sah | Full Stack & GenAI Developer",
  description:
    "Portfolio of Ankita Sah — 2nd year MDC student at Surya Sen Mahavidyalaya, Siliguri. Full Stack Developer & GenAI enthusiast building intelligent web experiences.",
  keywords: [
    "Ankita Sah",
    "portfolio",
    "Full Stack Developer",
    "GenAI",
    "Next.js",
    "React",
    "LangChain",
    "Siliguri",
  ],
  authors: [{ name: "Ankita Sah" }],
  metadataBase: new URL("https://ankitasah.vercel.app"),
  openGraph: {
    title: "Ankita Sah | Full Stack & GenAI Developer",
    description:
      "2nd year student at Surya Sen Mahavidyalaya, Siliguri — building the future with code and AI.",
    type: "website",
    url: "https://ankitasah.vercel.app",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ankita Sah Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankita Sah | Full Stack & GenAI Developer",
    description: "Portfolio — Full Stack & GenAI Developer from Siliguri.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceMono.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <PageLoader />
        <ScrollProgressBar />
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
