import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

export default function TechStack() {
  return (
    <ScrollArea className="w-full h-[500px]">
      <Card>
        <div className="text-center">
          <CardTitle className="md:text-5xl font-bold dark:text-slate-300 text-slate-700 text-2xl">
            Tech Stack
          </CardTitle>
          <CardDescription className="text-muted-foreground text-xs sm:text-sm md:text-lg mt-1">
            Tools & Superpowers I Use to Build Modern Apps
          </CardDescription>
        </div>
        <CardContent>
          <SkillsGrid />
        </CardContent>
      </Card>
    </ScrollArea>
  );
}

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaKey,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiCplusplus,
  SiC,
  SiAwsamplify,
  SiExpress,
  SiVercel,
  SiReactquery,
  SiRedux,
  SiSocketdotio,
  SiJsonwebtokens,
  SiVite,
  SiNginx,
  SiAppwrite,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiRedis,
  SiClerk,
  SiPostman,
  SiNodemon,
  SiPnpm,
  SiZod,
  SiGitlab,
  SiPrettier,
  SiShell,
  SiRust,
  SiReact,
} from "react-icons/si";

const skills = [
  // TOP important skills
  { name: "React", icon: <FaReact />, color: "#61dafb" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },

  // Core web & programming
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
  { name: "HTML5", icon: <SiHtml5 />, color: "#e34f26" },
  { name: "CSS3", icon: <SiCss3 />, color: "#1572b6" },
  { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#38bdf8" },
  { name: "C++", icon: <SiCplusplus />, color: "#00599c" },
  { name: "C", icon: <SiC />, color: "#a8b9cc" },
  { name: "Python", icon: <FaPython />, color: "#3776ab" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#3c873a" },
  { name: "Express.js", icon: <SiExpress />, color: "#000000" },
  { name: "Redux", icon: <SiRedux />, color: "#764abc" },
  { name: "React Query", icon: <SiReactquery />, color: "#ff4154" },
  { name: "React Hook Form", icon: <SiReactquery />, color: "#ff4154" }, // no specific icon, reused
  { name: "Socket.io", icon: <SiSocketdotio />, color: "#010101" },
  { name: "JWT", icon: <SiJsonwebtokens />, color: "#000000" },
  { name: "Vite", icon: <SiVite />, color: "#646cff" },

  // Cloud & deployment
  { name: "AWS", icon: <SiAwsamplify />, color: "#ff9900" },
  { name: "Vercel", icon: <SiVercel />, color: "#000000" },
  { name: "Nginx", icon: <SiNginx />, color: "#269539" },
  { name: "Appwrite", icon: <SiAppwrite />, color: "#f13c20" },

  // Databases
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
  { name: "Prisma", icon: <SiPrisma />, color: "#0c344b" },
  { name: "Redis", icon: <SiRedis />, color: "#dc382d" },

  // DevOps & Tools
  { name: "Docker", icon: <FaDocker />, color: "#2496ed" },
  { name: "GitHub", icon: <FaGitAlt />, color: "#181717" },
  { name: "Git", icon: <FaGitAlt />, color: "#f05032" },
  { name: "Gitlab", icon: <SiGitlab />, color: "#fc6d26" },
  { name: "Linux", icon: <FaLinux />, color: "#fbc02d" },
  { name: "Shell scripting", icon: <SiShell />, color: "#4eaa25" },
  { name: "Prettier", icon: <SiPrettier />, color: "#f7b93e" },
  { name: "Postman", icon: <SiPostman />, color: "#ff6c37" },
  { name: "Nodemon", icon: <SiNodemon />, color: "#76d04b" },
  { name: "PNPM", icon: <SiPnpm />, color: "#f69220" },
  { name: "Zod", icon: <SiZod />, color: "#6333ff" },
  { name: "Clerk", icon: <SiClerk />, color: "#1c1f23" },
  { name: "Conform", icon: <SiReact />, color: "#FF6B6B" },
  { name: "Auth.js", icon: <FaKey />, color: "#333333" }, // dark/neutral color

  // Bottom important skills
  { name: "Golang", icon: <FaGolang />, color: "#00ADD8" },
  { name: "Rust", icon: <SiRust />, color: "#000000" },

  { name: "React", icon: <FaReact />, color: "#61dafb" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
];

function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {skills.map((skill, index) => (
        <Button
          key={index}
          variant={"outline"}
          className="hover:scale-105  gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all flex items-center justify-center"
          style={{ color: skill.color }}
        >
          <span className="text-lg">{skill.icon}</span>
          <span>{skill.name}</span>
        </Button>
      ))}
    </div>
  );
}
