"use client";

import { AnimatedList } from "@/components/magicui/animated-list";

import { Globe } from "@/components/magicui/globe";
import React from "react";
import {
  FiUserCheck,
  FiTerminal,
  FiGitBranch,
  FiCode,
  FiDatabase,
  FiServer,
} from "react-icons/fi";
import {
  SiPython,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiGitlab,
  SiRust,
} from "react-icons/si";

import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { ArcTimeline } from "@/components/magicui/arc-timeline";
import { GraduationCap, Share2Icon, TrophyIcon } from "lucide-react";
import { FaNodeJs } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";

const data = [
  {
    time: "2023 (Post July)",
    icon: <FiUserCheck color="#4ade80" size={24} />,
    steps: [
      {
        icon: <FiUserCheck color="#4ade80" size={22} />,
        content: "Admission @ LPU",
      },
      { icon: <SiPython color="#3776ab" size={22} />, content: "Learn Python" },
      {
        icon: <SiJavascript color="#f7df1e" size={22} />,
        content: "Learn HTML, CSS & JS",
      },
      {
        icon: <FiServer color="#f97316" size={22} />,
        content: "Build Messho clone (frontend only)",
      },
    ],
  },
  {
    time: "2024",
    icon: <FiCode color="#8b5cf6" size={24} />,
    steps: [
      { icon: <SiC color="#a8b9cc" size={22} />, content: "Learn C" },
      { icon: <FiDatabase color="#22d3ee" size={22} />, content: "Learn DBMS" },
      {
        icon: <SiJavascript color="#f7df1e" size={22} />,
        content: "Learn Networking Basics",
      },
      { icon: <SiCplusplus color="#00599c" size={22} />, content: "Learn C++" },
      {
        icon: <SiJavascript color="#f7df1e" size={22} />,
        content: "Deep dive into JavaScript",
      },
      {
        icon: <SiReact color="#61dafb" size={22} />,
        content: "Learn React @ Hitesh Choudhary",
      },
      {
        icon: <FiServer color="#3b82f6" size={22} />,
        content: "Build simple Blog with React & Appwrite",
      },
      {
        icon: <FaNodeJs color="#3c873a" size={22} />,
        content: "Start Backend with Node & Express",
      },
    ],
  },
  {
    time: "2025",
    icon: <FiTerminal color="#f43f5e" size={24} />,
    steps: [
      {
        icon: <FaNodeJs color="#3c873a" size={22} />,
        content: "Completed Backend Developer skills",
      },
      {
        icon: <SiJavascript color="#f7df1e" size={22} />,
        content: "Build Full-stack E-commerce with Payments",
      },
      { icon: <FaGolang color="#00ADD8" size={22} />, content: "Learn Golang" },
      {
        icon: <FiTerminal color="#f43f5e" size={22} />,
        content: "Learn Shell Scripting",
      },
      {
        icon: <FiGitBranch color="#6366f1" size={22} />,
        content: "Master Git & GitHub",
      },
      { icon: <SiRust color="#000000" size={22} />, content: "Learn Rust" },
      {
        icon: <FiServer color="#f97316" size={22} />,
        content: "Build Invoice Banao Webapp (CRUD + Email)",
      },
      {
        icon: <SiReact color="#61dafb" size={22} />,
        content: "Build ContentBanao Blog (like/share/comment)",
      },
      {
        icon: <SiJavascript color="#f7df1e" size={22} />,
        content: "Build Calendar Scheduling & VC App",
      },
      { icon: <SiGitlab color="#f97316" size={22} />, content: "Learn GitLab" },
    ],
  },
];

const features = [
  {
    Icon: TrophyIcon,
    name: "Acheivements",
    description: "",
    href: "",
    cta: "",
    className: "col-span-3 lg:col-span-1",
    background: <div className="h-[90%]">{/* <AnimatedListDemo /> */}</div>,
  },
  {
    Icon: GraduationCap,
    name: "Learning TimeLine",
    description: "",
    href: "",
    cta: "",
    className: "col-span-3 lg:col-span-2",
    background: (
      <ArcTimeline
        data={data}
        arcConfig={{
          // circleWidth: 4500,
          angleBetweenMinorSteps: 0.4,
          lineCountFillBetweenSteps: 5,
          boundaryPlaceholderLinesCount: 50,
        }}
      />
    ),
  },
  {
    Icon: Share2Icon,
    name: "",
    description: ".",
    href: "",
    cta: "",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="relative flex size-full  items-center justify-center overflow-hidden rounded-lg border bg-background px:10 sm:px-40 pb-40 pt-8 md:pb-60 w-full">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-[55px] sm:text-[85px] font-bold leading-none text-transparent t dark:from-white  dark:to-slate-900/10">
          Lets Collabrate
        </span>
        <Globe className="top-28" />
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      </div>
    ),
  },
  {
    Icon: TrophyIcon,
    name: "Acheivements",
    description: "",
    href: "",
    cta: "",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="h-[90%]">
        <AnimatedListDemo />
      </div>
    ),
  },
];

export function HeroSection() {
  return (
    <div>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}

//

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time?: string;
}

let notifications = [
  {
    name: "Github Community Contribution",
    description: "Discovered and documented a compatibility",
    icon: "🐙", // GitHub Octocat emoji
    color: "#00C9A7",
  },
  {
    name: "2 PRs",
    description: "Github",
    icon: "📤", // Outgoing PR / contribution
    color: "#FFB800",
  },
  {
    name: "7+ Programming Languages",
    description: "C, C++, JS, TS, Go, Rust, Python",
    icon: "💻", // Coding / programming
    color: "#FF3D71",
  },
  {
    name: "6 Projects Completed",
    description: "Full-stack apps",
    icon: "🏆", // Achievement / completed projects
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "w-full",
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3 w-[90%] ">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-xs text-muted-foreground font-normal ">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[380px] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList delay={2500}>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
