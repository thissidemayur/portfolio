import React from "react";
import Service from "../components/ServicePage";
import Head from "next/head";

export default function ServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Full-Stack & SaaS Development by Mayur Pal",
    url: "https://thissidemayur.me/service",
    description:
      "Mayur Pal offers full-stack web development, SaaS app creation, backend APIs (Node.js & Golang), and scalable web solutions. On-time delivery, privacy-first, and production-ready services.",
    provider: {
      "@type": "Person",
      name: "Mayur Pal",
      url: "https://thissidemayur.me",
      sameAs: [
        "https://www.linkedin.com/in/mayurpal",
        "https://github.com/thissidemayur",
        "https://twitter.com/thissidemayur",
      ],
    },

    areaServed: "World",
    audience: {
      "@type": "Audience",
      audienceType: "Clients, Startups, Businesses, Freelancers",
    },
    serviceType: [
      "SaaS App Development",
      "Full-Stack Web Development",
      "Backend APIs (Node.js & Golang)",
      "DevOps Integration",
      "Web3 Development",
    ],
    offers: {
      "@type": "Offer",
      url: "https://thissidemayur.me/service",
      price: "Contact for Quote",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };
  return (
    <>
      <Head>
        <title>
          Mayur Pal – Freelance Services, SaaS App Development, Full-Stack
          Projects
        </title>
        <meta
          name="description"
          content="Freelance services by Mayur Pal: SaaS app development, Node.js & Golang backend, full-stack web apps, DevOps solutions, Web3 development. On-time, scalable, and privacy-first."
        />
        <meta
          name="keywords"
          content="Mayur Pal, freelance developer, SaaS app development, full-stack developer, Node.js, Golang, React, Next.js, DevOps engineer, Web3 developer, backend APIs, database modeling, PostgreSQL, MongoDB, Prisma, shell scripting, Git, GitHub, GitLab, real-time applications, subscription systems, multi-tenant SaaS"
        />
        <meta name="author" content="Mayur Pal" />
        <meta
          property="og:title"
          content="Mayur Pal – Freelance SaaS & Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="Expert freelance services in SaaS apps, full-stack development, backend APIs, and Web3 projects. Node.js, Golang, React, Next.js, PostgreSQL, MongoDB, Prisma & more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thissidemayur.me/services" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/social-preview.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mayur Pal – Freelance SaaS & Full-Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Expert freelance services in SaaS apps, full-stack development, backend APIs, and Web3 projects. Node.js, Golang, React, Next.js, PostgreSQL, MongoDB, Prisma & more."
        />
        <meta
          name="twitter:image"
          content="https://thissidemayur.me/twitter-img.jpg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        ;
      </Head>
      <Service />
    </>
  );
}
