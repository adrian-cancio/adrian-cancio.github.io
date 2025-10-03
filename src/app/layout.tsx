import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adrian Cancio | Cloud-Ready Software Developer",
  description:
    "Portfolio of Adrian Cancio, Software Developer at Treelogic focused on automation, DevSecOps, and a transition toward Cloud/DevOps engineering.",
  metadataBase: new URL("https://adrian-cancio.github.io"),
  openGraph: {
    title: "Adrian Cancio | Cloud-Ready Software Developer",
    description:
      "Full-stack developer transitioning toward Cloud/DevOps engineering with a focus on automation, IaC, and secure delivery pipelines.",
    url: "https://adrian-cancio.github.io",
    siteName: "Adrian Cancio Portfolio",
    locale: "en_US",
    type: "website",
  },
  authors: [{ name: "Adrian Cancio" }],
  keywords: [
    "Adrian Cancio",
    "Software Developer",
    "Cloud Engineer",
    "DevOps",
    "Automation",
    "PowerShell",
    "Spring Boot",
    "Angular",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#070b1a] text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
