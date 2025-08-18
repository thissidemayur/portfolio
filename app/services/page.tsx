import React from "react";
import Service from "../components/ServicePage";
import SEO from "../components/SEO";

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
        "https://www.linkedin.com/in/thissidemayur",
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
      <SEO
        title="Mayur Pal – Freelance Services, SaaS App Development, Full-Stack Projects"
        description="Freelance services by Mayur Pal: SaaS app development, Node.js & Golang backend, full-stack web apps, DevOps solutions, Web3 development. On-time, scalable, and privacy-first."
        url="https://thissidemayur.me/service"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mt-20">
        <Service />
      </div>
    </>
  );
}
