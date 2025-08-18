import React from "react";
import ProjectCard from "../components/ProjectCard";
import { CardHeader } from "@/components/ui/card";
import TitleAndDescription from "../components/TitleAndDescription";
import SEO from "../components/SEO";
interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  coverImage: string;
  coverTitle: string;
  techStack: string[];
  highlights: { id: number; text: string }[];
  className?: string;
  id: number;
  githubLink: string;
}
const projectList: ProjectCardProps[] = [
  {
    id: 1,
    title: "ContentBanao",
    description:
      "A modern, SaaS-style blogging and reel-sharing platform built with Next.js 15, TypeScript, Tailwind, Redux Toolkit, NextAuth, and MongoDB. Users can write blogs, upload reels, and interact in a clean, scalable environment.",
    slug: "https://contentbanao.vercel.app/",
    coverImage: "/project/contentBanao1.png",
    coverTitle: "Blogging platform to create, read, share, like, and comment",
    techStack: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Redux Toolkit ",
      "RTK Query",
      "NextAuth",
      "MongoDB",
      "TipTap",
      "ImageKit",
      "Vercel",
    ],
    highlights: [
      { id: 1, text: "Next.js 15 App Router with modular architecture" },
      { id: 2, text: "NextAuth with Google OAuth & JWT route protection" },
      { id: 3, text: "Full blogging system with dynamic routes & comments" },
      { id: 4, text: "Reel upload & CDN media support via ImageKit" },
      { id: 5, text: "Fully responsive UI with reusable components" },
    ],
    className: "",
    githubLink: "https://github.com/thissidemayur/ContentBanao",
  },
  {
    id: 2,
    title: "InvoiceBanao",
    description:
      "A full-stack invoice management system to create, send, and manage invoices with email delivery, reminders, and an interactive dashboard.",
    slug: "https://invoicebanao.vercel.app/",
    coverImage: "/project/invoiceBanao.png",
    coverTitle: "Manage, generate, and send invoices with email and PDFs",
    techStack: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS 4",
      "NextAuth",
      "Prisma ORM",
      "PostgreSQL",
      "Mailtrap SMTP",
      "PDFKit",
      "Zod",
    ],
    highlights: [
      { id: 1, text: "Cookie-based authentication with magic link login" },
      { id: 2, text: "Create, edit, delete invoices with PDF generation" },
      { id: 3, text: "Send invoices & reminders via email" },
      { id: 4, text: "Interactive dashboard with Recharts graphs" },
      { id: 5, text: "Radix UI + Tailwind for clean and scalable UI" },
    ],
    className: "invoice-banao",
    githubLink: "https://github.com/thissidemayur/invoiceBanao-nextjs",
  },
  {
    id: 3,
    title: "CalScheduling",
    description:
      "An event scheduling platform where users can book slots, check availability, and conduct video calls with a dedicated integration.",
    slug: "cal-scheduling",
    coverImage: "/project/contentBanao2.png",
    coverTitle: "Book events, schedule meetings, and join via video calls",
    techStack: [
      "Next.js",
      "Prisma ORM",
      "PostgreSQL",
      "NextAuth",
      "Zod",
      "Conform",
      "Video Call Integration",
    ],
    highlights: [
      { id: 1, text: "Create events & book available time slots" },
      { id: 2, text: "Integrated video call platform for meetings" },
      { id: 3, text: "NextAuth for secure authentication" },
      { id: 4, text: "Prisma ORM with PostgreSQL backend" },
      { id: 5, text: "Validation with Zod + Conform" },
    ],
    className: "cal-scheduling",
    githubLink: "https://github.com/thissidemayur/CalScheduling-nextjs",
  },
];

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projects by Mayur Pal",
    url: "https://thissidemayur.me/projects",
    itemListElement: projectList.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://thissidemayur.me/projects/projects`,
      item: {
        "@type": "SoftwareApplication",
        name: project.title,
        image: `https://thissidemayur.me/og.png}`,
        description: project.description,
        applicationCategory: "Web Application",
        keywords: project.techStack.join(", "),
        author: {
          "@type": "Person",
          name: "Mayur Pal",
          url: "https://thissidemayur.me/about-mayur",
          sameAs: [
            "https://www.linkedin.com/in/thissidemayur",
            "https://github.com/thissidemayur",
            "https://x.com/thissidemayur",
            "https://instagram.com/thissidemayur",
            "https://thissidemayur.me",
          ],
        },
      },
    })),
  };

  return (
    <>
      <SEO
        title="Projects by Mayur Pal | thissidemayur"
        description="Explore SaaS apps, full stack projects, and open source work by Mayur Pal (thissidemayur) in Web Dev, Web3, and DevOps."
        url="https://thissidemayur.me/projects"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mt-20">
        <CardHeader className="my-10">
          <TitleAndDescription
            title="Things I’ve Built"
            description=" A collection of applications, experiments, and tools I’ve built while
          learning and growing as a developer."
          />
        </CardHeader>
        <ul className="flex-col md:space-y-30 sm:space-y-20 space-y-10 ">
          {projectList?.map((project) => (
            <li key={project.id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                slug={project.slug}
                coverImage={project.coverImage}
                coverTitle={project.coverTitle}
                techStack={project.techStack}
                highlights={project.highlights}
                id={project.id}
                githubLink={project.githubLink}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

//
