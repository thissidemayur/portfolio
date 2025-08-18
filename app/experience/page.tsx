import React from "react";
import Experience from "../components/Experience";
import Head from "next/head";
import SEO from "../components/SEO";

export default function ExperiencePage() {
  return (
    <>
      <SEO
        title="Mayur | Internships, Trainings & Experience"
        description="Explore Mayur’s professional journey through internships, trainings, and hands-on experience in software engineering, backend development, DevOps, and full-stack projects."
        url="https://www.thissidemayur.me/experience"
      />

      <Head>
        {/*  */}
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mayur Pal",
              url: "https://www.thissidemayur.me",
              jobTitle: "Full-Stack Developer, SaaS & Web3 Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance / Personal Projects",
              },
              sameAs: [
                "https://www.linkedin.com/in/thissidemayur",
                "https://github.com/thissidemayur",
                "https://x.com/thissidemayur",
                "https://instagram.com/thissidemayur",
                "https://thissidemayur.me",
              ],
            }),
          }}
        />
      </Head>

      {/*  */}
      <div className="mt-20">
        <Experience />
      </div>
    </>
  );
}
