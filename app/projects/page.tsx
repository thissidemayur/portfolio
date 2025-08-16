import React from "react";
import Projects from "../components/ProjectCard";
import ProjectCard from "../components/ProjectCard";
import { title } from "process";
import Head from "next/head";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Title } from "@radix-ui/react-dialog";
import TitleAndDescription from "../components/TitleAndDescription";
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
}
export const projectList: ProjectCardProps[] = [
  {
    id: 1,
    title: "ContentBanao",
    description:
      "A modern, SaaS-style blogging and reel-sharing platform built with Next.js 15, TypeScript, Tailwind, Redux Toolkit, NextAuth, and MongoDB. Users can write blogs, upload reels, and interact in a clean, scalable environment.",
    slug: "content-banao",
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
  },
  {
    id: 2,
    title: "InvoiceBanao",
    description:
      "A full-stack invoice management system to create, send, and manage invoices with email delivery, reminders, and an interactive dashboard.",
    slug: "invoice-banao",
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
  },
];

export default function ProjectsPage() {
  <Head>
    <meta
      name="keywords"
      content="Mayur Pal, thissidemayur, SaaS projects, Web3, DevOps, Full Stack Developer, Freelancer , Mayur, NextJs , MERN, MERN stack,React Project, Nextjs project, mern project "
    />
    <title>Projects by Mayur Pal | thissidemayur | Mayur</title>
    <meta
      name="description"
      content="Explore SaaS apps, full stack projects, and open source work by Mayur Pal (thissidemayur) in Web Dev, Web3, and DevOps."
    />
    {/* OG Image */}
    <meta property="og:title" content="Projects by Mayur Pal" />
    <meta
      property="og:description"
      content="SaaS apps, Web3, DevOps, and Full Stack projects built by Mayur Pal (thissidemayur)."
    />
    <meta property="og:image" content="/og-projects.png" />
    <meta property="og:type" content="website" />

    {/*  */}
    <meta name="twitter:card" content="summary_large_image" />
  </Head>;
  return (
    <div className="mt-5">
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
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
