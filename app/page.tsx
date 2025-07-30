// app/page.tsx
import Script from "next/script";

export default function Home() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mayur Pal",
    url: "https://thissidemayur.me",
    image: "https://thissidemayur.me/og.jpg",
    jobTitle: "Full‑Stack Developer, DevOps Engineer & Web3 Developer",
    description:
      "3rd‑year CSE student at Lovely Professional University (LPU), Punjab — open to internships, jobs and freelance projects.",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Lovely Professional University",
      sameAs: "https://www.lpu.in/",
    },
    homeLocation: { "@type": "Place", name: "Punjab, India" },
    sameAs: [
      "https://github.com/thissidemayur",
      "https://linkedin.com/in/thissidemayur",
      "mailto:thissidemayur@gmail.com",
      "https://gitlab.com/thissidemayur",
      "https://x.com/thissidemayur",
    ],
    knowsAbout: [
      "Full-Stack Development",
      "DevOps",
      "Web3",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Docker",
      "CI/CD",
      "Git",
      "GitHub",
      "GitLab",
      "Linux",
      "Shell scripting",
      "Golang",
      "C++",
      "C",
      "System Design",
      "SaaS",
      "Internships",
      "Job search",
      "Freelance projects",
    ],
    worksFor: { "@type": "Organization", name: "Freelance" },
    // signal you’re open for work:
    seeks: [
      "Software Developer job",
      "DevOps Engineer internship",
      "Freelance Next.js projects",
      "Backend Golang roles",
    ],
  };

  return (
    <>
      {/* your existing hero/component here */}
      <Script
        id="ld-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
    </>
  );
}
