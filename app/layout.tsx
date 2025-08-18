import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/themeProviders";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./components/AppSidebar";
import { cookies } from "next/headers";
import Navbar from "./components/Navbar";
import { Toaster } from "sonner";
import SEO from "./components/SEO";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mayur Pal | Software Engineering Student & Full Stack Developer",
    template: "%s | Mayur Pal",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  description:
    "Portfolio of Mayur Pal, a Software Engineering student passionate about Full Stack Development, DevOps, Web3, and SaaS. Explore projects, certifications, and experiences.",
  metadataBase: new URL("https://www.thissidemayur.me"),
  openGraph: {
    title: "Mayur Pal | Software Engineering Student & Full Stack Developer",
    description:
      "Passionate about Full Stack Development, Backend, DevOps, Web3, and SaaS. Actively building projects and preparing for placements.",
    url: "https://www.thissidemayur.me",
    siteName: "thissidemayur.me",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Mayur Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayur Pal | Software Engineering Student & Full Stack Developer",
    description:
      "Full Stack & Backend Developer, DevOps & Web3 Learner. Building projects and growing skills.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SEO
          title="Mayur Pal | Software Engineering Student & Full Stack Developer"
          description="Portfolio of Mayur Pal, a Software Engineering student passionate about Full Stack Development, DevOps, Web3, and SaaS. Explore projects, certifications, and experiences."
          url="https://www.thissidemayur.me"
          image="https://www.thissidemayur.me/og.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mayur Pal",
              url: "https://www.thissidemayur.me",
              image: "https://www.thissidemayur.me/og.png",
              sameAs: [
                "https://github.com/yourusername",
                "https://linkedin.com/in/yourusername",
                "https://twitter.com/yourusername",
                "https://leetcode.com/yourusername",
              ],
              jobTitle: "Software Engineering Student",
              worksFor: {
                "@type": "Organization",
                name: "B.Tech Computer Science (3rd Year)",
              },
              knowsAbout: [
                "Full Stack Development",
                "Backend Engineering",
                "DevOps",
                "Web3",
                "SaaS Development",
                "System Design",
                "Linux",
                "Shell Scripting",
                "Next.Js Devloper",
                "MERN Devloper",
                "Next.JS",
                "MERN",
                "Express.Js",
                "NodeJs",
              ],
              description:
                "Software Engineering student passionate about Full Stack Development, Backend, DevOps, Web3, and SaaS. Actively building projects and preparing for placements.",
            }),
          }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <main className="min-h-screen w-full relative">
              <div className="flex-col gap-y-5  w-full">
                <Navbar />
              </div>

              {children}
              <Toaster
                position="top-right"
                expand={false}
                closeButton
                richColors
              />
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
