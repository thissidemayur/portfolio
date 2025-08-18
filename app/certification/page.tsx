import React from "react";
import Certification from "../components/Certifications";
import SEO from "../components/SEO";

export default function page() {
  return (
    <>
      <SEO
        title="Mayur Pal – Certifications & Achievements in Software, Backend, DevOps & Full-Stack"
        description="Explore Mayur Pal’s verified certifications in Software Engineering, Backend Development, DevOps, Cloud, and Full-Stack Development. Trusted skills from Coursera, IBM, Postman, HackerRank, and more."
        url="https://www.thissidemayur.me/certifications"
      />

      <div className="mt-20">
        <Certification />
      </div>
    </>
  );
}
