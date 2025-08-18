import React from "react";
import Head from "next/head";
import { HireMe } from "../components/HireMe";
import SEO from "../components/SEO";

export default function HireMePage() {
  return (
    <>
      <SEO
        title="Hire Mayur | Full-Stack & SaaS Developer"
        description="Hire Mayur, a full-stack developer specializing in SaaS applications, backend APIs, and scalable web solutions. Let's turn your idea into a system that works."
        url="https://www.thissidemayur.me/hire-me"
        image="https://www.thissidemayur.me/og-image-hireme.jpg"
      />

      <Head>
        {/* Optional JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mayur Pal",
              jobTitle: "Full-Stack Developer",
              url: "https://www.yourwebsite.com/hire-me",
              sameAs: [
                "https://www.linkedin.com/in/thissidemayur",
                "https://github.com/thissidemayur",
                "https://x.com/thissidemayur",
                "https://instagram.com/thissidemayur",
                "https://thissidemayur.me",
              ],
              description:
                "Hire Mayur, a full-stack developer specializing in SaaS applications, backend APIs, and scalable web solutions.",
            }),
          }}
        />
      </Head>

      <main className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
        <HireMe />
      </main>
    </>
  );
}
