import React from "react";
import About from "../components/About";
import Head from "next/head";
import SEO from "../components/SEO";

export default function AboutPage() {
  return (
    <>
      <Head>
        {/* Other meta tags */}
        <SEO
          title="Hire Mayur Pal – Full-Stack, SaaS & Web3 Developer"
          description="Looking for scalable SaaS apps, full-stack web projects, or Web3 solutions? Work with Mayur Pal – Node.js, React, Next.js, Golang, Python, DevOps. Reliable, transparent, and cost-effective development."
          url="https://thissidemayur.me/hire-me"
        />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mayur Pal",
              url: "https://thissidemayur.me/about-mayur",
              sameAs: [
                "https://www.linkedin.com/in/thissidemayur",
                "https://github.com/thissidemayur",
                "https://twitter.com/thissidemayur",
                "https://instagram.com/thissidemayur",
              ],

              jobTitle: "Full-Stack Developer / SaaS Creator / Freelancer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance / Self-employed",
              },
              description:
                "Hey, I'm Mayur Pal 🚀 Full-stack developer, SaaS & Web3 engineer. I build websites, SaaS apps, and scalable digital products. Open for freelance work and collaborations.",
              knowsAbout: [
                "Freelancer",
                "Full-Stack Development",
                "Website Creator",
                "SaaS Development",
                "Node.js",
                "React",
                "Next.js",
                "Golang",
                "Python",
                "C/C++",
                "JavaScript",
                "TypeScript",
                "DevOps",
                "Web3",
                "Open for work",
              ],
            }),
          }}
        />
      </Head>
      <div className="mt-20">
        <About />
      </div>
    </>
  );
}
