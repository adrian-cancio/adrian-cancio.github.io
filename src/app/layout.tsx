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
  title:
    "Adrian Cancio | Cloud DevOps Engineer & Automation Specialist",
  description:
    "Portfolio of Adrian Cancio, Software Developer at Treelogic specializing in automation, DevSecOps, Cloud/DevOps engineering, and infrastructure as code with Spring Boot and Angular.",
  metadataBase: new URL("https://adrian.cancio.info"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Adrian Cancio | Cloud DevOps Engineer & Automation Specialist",
    description:
      "Full-stack developer transitioning toward Cloud/DevOps engineering with a focus on automation, IaC, and secure delivery pipelines.",
    url: "https://adrian.cancio.info",
    siteName: "Adrian Cancio Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Adrian Cancio - Cloud DevOps Engineer & Automation Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrian Cancio | Cloud DevOps Engineer & Automation Specialist",
    description:
      "Full-stack developer transitioning toward Cloud/DevOps engineering with a focus on automation, IaC, and secure delivery pipelines.",
    images: ["/og-image.svg"],
  },
  authors: [{ name: "Adrian Cancio" }],
  keywords: [
    "Adrian Cancio",
    "Cloud DevOps Engineer",
    "DevOps",
    "Automation",
    "DevSecOps",
    "Infrastructure as Code",
    "IaC",
    "PowerShell",
    "Spring Boot",
    "Angular",
    "CI/CD",
    "Cloud Engineering",
    "Software Developer",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Adrian Cancio",
    jobTitle: "Software Developer",
    worksFor: {
      "@type": "Organization",
      name: "Treelogic",
    },
    url: "https://adrian.cancio.info",
    sameAs: ["https://github.com/adrian-cancio"],
    description:
      "Full-stack developer transitioning toward Cloud/DevOps engineering with a focus on automation, IaC, and secure delivery pipelines.",
    knowsAbout: [
      "DevOps",
      "Cloud Engineering",
      "Automation",
      "DevSecOps",
      "Infrastructure as Code",
      "Spring Boot",
      "Angular",
      "PowerShell",
      "CI/CD",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#070b1a] text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
