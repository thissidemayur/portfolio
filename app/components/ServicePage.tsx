"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import {
  FaCubes,
  FaServer,
  FaLaptopCode,
  FaCheckCircle,
  FaFilePdf,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiGo,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiC,
  SiCplusplus,
  SiPython,
  SiLinux,
  SiGit,
  SiGithub,
  SiGitlab,
  SiReacthookform,
  SiAxios,
  SiFirebase,
  SiAppwrite,
  SiVercel,
  SiResend,
  SiCloudinary,
  SiSonarqube,
  SiAmazonwebservices, // using for Sonner (no direct icon available)
} from "react-icons/si";

import { FaTerminal } from "react-icons/fa";
import { ImageIcon } from "lucide-react";
import { IconType } from "react-icons/lib";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import TitleAndDescription from "./TitleAndDescription";

export default function ServicesPage() {
  return (
    <>
      <section className="min-h-screen px-4 py-10 md:px-8 ">
        {/* Hero */}

        <div className="max-w-5xl mx-auto text-center space-y-4">
          <TitleAndDescription
            title="Freelance Services I Offer"
            description="Specialized in SaaS apps, backend development (Node.js
            & Golang), and full-stack web projects. Built for
            performance, privacy, and scale."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="px-4">
                {" "}
                SaaS Mindset
              </Badge>
              <Badge variant="secondary" className="px-4">
                On-time Delivery
              </Badge>
              <Badge variant="secondary" className="px-4">
                Privacy-First
              </Badge>
            </div>
            <div className="pt-5">
              <Button asChild size="lg" variant={"outline"}>
                <Link href="/hire-me">Hire Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          <CardSpotlightItems
            title="SaaS App Development"
            Icon={FaCubes}
            description="End-to-end SaaS product builds: auth, billing, role-based access, dashboards, webhooks, and clean architecture ready for growth."
            list={[
              "Multi-tenant setup",
              "Payments & subscriptions",
              "Audit logs & rate limiting",
            ]}
          />
          <CardSpotlightItems
            title="Backend APIs"
            Icon={FaServer}
            description="Robust REST APIs and services using Node.js (Express) and Golang, with security, testing, and performance in mind."
            list={[
              "Auth (JWT/OAuth), validation, RBAC",
              "Queues, caching, webhooks",
              "PostgreSQL & MongoDB data models",
            ]}
          />
          <CardSpotlightItems
            title="Full-Stack Projects"
            Icon={FaLaptopCode}
            description="Complete apps from UI to DB with Next.js + React, API integration, testing, and production-ready deployments."
            list={[
              "SSR/ISR with Next.js",
              "Form handling, file uploads",
              "Real-time features (Sockets)",
            ]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Tech Stack */}
          <Card className="max-w-6xl mx-auto mt-12 dark:bg-black">
            <CardHeader>
              <h3 className="text-xl font-semibold">Tech I Use</h3>
              <p className="text-sm text-muted-foreground">
                Pick the right tool for the job—without over-engineering.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Frontend */}
                <StackItem
                  title="Frontend"
                  items={[
                    { icon: SiNextdotjs, label: "Next.js" },
                    { icon: SiReact, label: "React" },
                    { icon: SiTypescript, label: "TypeScript" },
                    { icon: SiJavascript, label: "JavaScript" },
                  ]}
                />

                {/* Backend */}
                <StackItem
                  title="Backend"
                  items={[
                    { icon: SiNodedotjs, label: "Node.js" },
                    { icon: SiExpress, label: "Express" },
                    { icon: SiGo, label: "Golang" },
                  ]}
                />

                {/* Database */}
                <StackItem
                  title="Database"
                  items={[
                    { icon: SiPostgresql, label: "PostgreSQL" },
                    { icon: SiMongodb, label: "MongoDB" },
                    { icon: SiPrisma, label: "Prisma" },
                  ]}
                />

                {/* Quality */}
                <StackItem
                  title="Quality"
                  items={[
                    { icon: FaCheckCircle, label: "Validation (Zod)" },
                    { icon: FaCheckCircle, label: "API Testing (Postman)" },
                    { icon: FaCheckCircle, label: "Git/GitHub Flow" },
                  ]}
                />

                {/* Programming Languages */}
                <StackItem
                  title="Languages"
                  items={[
                    { icon: SiC, label: "C" },
                    { icon: SiCplusplus, label: "C++" },
                    { icon: SiPython, label: "Python" },
                    { icon: SiJavascript, label: "JavaScript" },
                    { icon: SiTypescript, label: "TypeScript" },
                    { icon: SiGo, label: "Golang" },
                  ]}
                />

                {/* DevOps & Tools */}
                <StackItem
                  title="DevOps & Tools"
                  items={[
                    { icon: SiLinux, label: "Linux" },
                    { icon: SiGit, label: "Git" },
                    { icon: SiGithub, label: "GitHub" },
                    { icon: SiGitlab, label: "GitLab" },
                    { icon: FaTerminal, label: "Shell Scripting" },
                  ]}
                />

                {/* Libraries */}
                <StackItem
                  title="Libraries"
                  items={[
                    { icon: SiReacthookform, label: "React Hook Form" },
                    { icon: SiAxios, label: "Axios" },
                    { icon: FaCheckCircle, label: "Conform" },
                    { icon: SiFirebase, label: "Firebase" },
                    { icon: SiAppwrite, label: "Appwrite" },
                    { icon: SiSonarqube, label: "Sonner" }, // closest alt
                    { icon: FaFilePdf, label: "jsPDF" },
                  ]}
                />

                {/* Cloud & Deployment */}
                <StackItem
                  title="Cloud & Deployment"
                  items={[
                    { icon: SiVercel, label: "Vercel" },
                    { icon: SiAmazonwebservices, label: "S3 Bucket" },
                    { icon: SiResend, label: "Resend" },
                    { icon: SiCloudinary, label: "Cloudinary" },
                    { icon: ImageIcon, label: "ImageKit" },
                  ]}
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/*  */}

        {/* Ethos + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto mt-12 ">
            <Card className="dark:bg-black">
              <CardContent className="p-6 space-y-4">
                <p className="italic text-muted-foreground">
                  “I respect time. Once I promise, I deliver—whether I sleep 2
                  hours or 8. Privacy matters. Quality matters. Outcomes
                  matter.”
                </p>
                <Separator />
                <div className="flex flex-wrap items-center gap-4">
                  <Button asChild>
                    <Link href="/hire-me">Work with Me</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/contact">Message Me</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>
    </>
  );
}

// Card

export function CardSpotlightItems({
  title,
  description,
  Icon,
  list,
}: {
  title: string;
  description: string;
  Icon: IconType;
  list: string[];
}) {
  return (
    <CardSpotlight className="min-h-[24rem] w-full sm:w-auto">
      <p className="text-xl font-bold relative z-20 mt-2 text-wrap ">
        <Icon /> {title}
      </p>
      <div className=" mt-4 relative z-20 text-wrap">{description}</div>
      <ul className="list-none  mt-2">
        {list.map((item, indx) => (
          <Step title={item} key={indx} />
        ))}
      </ul>
    </CardSpotlight>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

// tech stack:
type StackItemProps = {
  title: string;
  items: {
    icon: React.ComponentType<{
      className?: string;
      style?: React.CSSProperties;
    }>;
    label: string;
  }[];
};

function StackItem({ title, items }: StackItemProps) {
  const iconColors: Record<string, string> = {
    "Next.js": "#000000",
    React: "#61DAFB",
    TypeScript: "#3178C6",
    JavaScript: "#F7DF1E",
    "Node.js": "#339933",
    Express: "#000000",
    Golang: "#00ADD8",
    PostgreSQL: "#336791",
    MongoDB: "#47A248",
    Prisma: "#0C344B",
    "Validation (Zod)": "#7C3AED",
    "API Testing (Postman)": "#FF6C37",
    "Git/GitHub Flow": "#F05032",
    C: "#A8B9CC",
    "C++": "#00599C",
    Python: "#3776AB",
    Linux: "#FCC624",
    Git: "#F05032",
    GitHub: "#181717",
    GitLab: "#FC6D26",
    "Shell Scripting": "#4EAA25",
    "React Hook Form": "#EC5990",
    Axios: "#5A29E4",
    Conform: "#7C3AED",
    Firebase: "#FFCA28",
    Appwrite: "#FF6464",
    Sonner: "#00ADEF",
    jsPDF: "#FF0000",
    Vercel: "#000000",
    "S3 Bucket": "#569A31",
    Resend: "#F472B6",
    Cloudinary: "#29A8DF",
    ImageKit: "#FF6F61",
  };

  return (
    <div className="rounded-xl border p-4">
      <h4 className="font-semibold mb-3">{title}</h4>
      <div className="flex flex-wrap gap-3">
        {items.map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm"
          >
            <Icon
              className={`
        text-base
        ${iconColors[label] === "#000000" ? "dark:text-white text-black" : ""}
      `}
              style={{
                color:
                  iconColors[label] !== "#000000"
                    ? iconColors[label]
                    : undefined,
              }}
            />
            <span className="dark:text-white">{label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
