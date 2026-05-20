import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";

export const metadata: Metadata = {
  title: "Ankita Sah | Full Stack & GenAI Developer",
  description:
    "Portfolio of Ankita Sah — 2nd year student at Surya Sen Mahavidyalaya, Siliguri. Full Stack Developer & GenAI enthusiast building intelligent web experiences.",
  keywords: ["Ankita Sah", "portfolio", "Full Stack Developer", "GenAI", "Next.js", "React"],
  authors: [{ name: "Ankita Sah" }],
  openGraph: {
    title: "Ankita Sah | Full Stack & GenAI Developer",
    description: "2nd year student at Surya Sen Mahavidyalaya, Siliguri — building the future with code and AI.",
    type: "website",
    url: "https://ankitasah.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankita Sah | Full Stack & GenAI Developer",
    description: "Portfolio — Full Stack & GenAI Developer from Siliguri.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <ScrollProgressBar />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
