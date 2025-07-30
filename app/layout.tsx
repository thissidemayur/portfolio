// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thissidemayur.me"),
  title: {
    default: "Mayur Pal — Full‑Stack, DevOps & Web3 Developer (LPU)",
    template: "%s | Mayur Pal",
  },
  description:
    "Portfolio of Mayur Pal — Full‑Stack Developer, DevOps Engineer & Web3 developer based in Punjab, India. 3rd‑year CSE @ LPU. Open for internships, jobs, and freelance projects. Tech: TypeScript, Next.js, React, Node.js, Go, C/C++, PostgreSQL, Prisma, Tailwind CSS, Docker, CI/CD, Linux, Shell scripting.",
  // Meta keywords are largely ignored by Google, but harmless elsewhere:
  keywords: [
    "Mayur Pal",
    "Full-Stack Developer",
    "DevOps Engineer",
    "Web3 Developer",
    "Next.js freelancer India",
    "React developer Punjab",
    "Intern finder LPU",
    "Job finder LPU",
    "Freelance software developer India",
    "PostgreSQL Prisma Tailwind",
    "Linux Shell scripting",
    "Git GitHub GitLab",
    "C C++ Golang",
    "LPU student",
    "3rd year CSE",
  ],
  authors: [{ name: "Mayur Pal", url: "https://thissidemayur.me" }],
  alternates: { canonical: "https://thissidemayur.me" },
  openGraph: {
    type: "website",
    url: "https://thissidemayur.me",
    siteName: "Mayur Pal — Portfolio",
    title: "Mayur Pal — Full‑Stack, DevOps & Web3 Developer (LPU)",
    description:
      "3rd‑year CSE @ LPU (Punjab, India). Open for internships, jobs & freelance. Next.js, React, Node.js, Go, C/C++, PostgreSQL, Prisma, Tailwind, Docker, CI/CD, Linux.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Mayur Pal — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayur Pal — Full‑Stack, DevOps & Web3 Developer",
    description:
      "Open for internships, jobs & freelance. Based in Punjab, India. Next.js, Prisma, PostgreSQL, Tailwind, Docker, Linux.",
    images: ["/og.jpg"],
    creator: "@thissidemayur",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
