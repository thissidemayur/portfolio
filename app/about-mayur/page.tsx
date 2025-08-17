import React from "react";
import About from "../components/About";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        {/* Other meta tags */}
        <title>Mayur Pal – Full-Stack Developer, SaaS & Web3 Engineer</title>
        <meta
          name="description"
          content="Hey, I'm Mayur Pal 🚀 A full-stack developer passionate about SaaS apps, Web3 projects, and scalable digital products. Expert in Node.js, React, Next.js, Golang, Python, C/C++, and DevOps tools. Hire me for web, SaaS, or full-stack projects."
        />
        <meta
          name="keywords"
          content="Mayur Pal, Full-stack developer, SaaS developer, Web3 developer, DevOps engineer, Node.js, React, Next.js, Golang, Python, C++, JavaScript, TypeScript, MongoDB, PostgreSQL, Prisma, Linux, Shell scripting, GitHub, GitLab, SaaS apps, scalable web applications, software engineer India, freelance developer"
        />
        <meta name="author" content="Mayur Pal" />
        <meta
          property="og:title"
          content="Mayur Pal – Full-Stack Developer & SaaS Creator"
        />
        <meta
          property="og:description"
          content="Build scalable SaaS apps, full-stack web projects, and Web3 systems with Mayur Pal. Node.js, React, Next.js, Golang, Python, DevOps & more."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://thissidemayur.me/about-mayur"
        />
        <meta
          property="og:image"
          content="https://thissidemayur.me/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mayur Pal – Full-Stack Developer & SaaS Creator"
        />
        <meta
          name="twitter:description"
          content="Build scalable SaaS apps, full-stack web projects, and Web3 systems with Mayur Pal. Node.js, React, Next.js, Golang, Python, DevOps & more."
        />
        <meta
          name="twitter:image"
          content="https://thissidemayur.me/twitter-img.jpg"
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
      <About />
    </>
  );
}
