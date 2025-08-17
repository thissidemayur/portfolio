import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import Image from "next/image";
import TitleAndDescription from "./TitleAndDescription";
import { Card } from "@/components/ui/card";

export function CertificateHighlights() {
  const items = [
    {
      id: 1,
      title: "Introduction to HTML, CSS, & JavaScript",
      href: "https://coursera.org/share/51624219a332dbe99bcb87453b991961",
      image: "/certification/htmlCssJS.png",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      id: 2,
      title: "C for Everyone: Programming Fundamentals",
      href: "https://coursera.org/share/6746ec2f3699f7ab177a079c360a5187",
      image: "/certification/cLang.png",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      id: 3,
      title: "Master Generative AI & Generative AI tools",
      href: "https://www.udemy.com/certificate/UC-7c535e9d-dbc5-4afd-8100-167b9f86f30f/",
      image: "/certification/chatgpt.png",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      id: 4,

      title: "Practise Go",
      href: "https://www.codechef.com/certificates/public/bce89ef",
      image: "/certification/golang.png",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
    {
      id: 5,
      title: "Javascript(Basic)",
      href: "https://www.hackerrank.com/certificates/9493f995ff51",
      image: "/certification/js.png",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      id: 6,
      title: "Postman API Fundamentals",
      href: "https://badgr.com/public/assertions/IA6_OOSJRL-bP4cnYrFDCQ?identity__email=mayurpal7890@gmail.com",
      image: "/certification/apiFundamental.png",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      id: 7,
      title: "Introduction to Software Engineering",
      href: "https://coursera.org/share/bb53a31ac1881e86025592f0c02ccd50",
      image: "/certification/swEngineering.png",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
  ];
  return (
    <Card className="my-10">
      <div className="mt-10 mb-2">
        <TitleAndDescription title="Featured Certifications " />
      </div>
      <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
        {/* Center Quote */}
        <p className="absolute top-1/2 left-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-3/4 px-4 text-center text-2xl font-extrabold tracking-tight text-neutral-500 md:text-4xl dark:text-neutral-400">
          Certified skills. Verified hustle.
        </p>

        {/* Draggable Items */}
        {items.map((item) => (
          <DraggableCardBody
            key={item.id}
            className={`group relative flex flex-col items-center rounded-2xl border border-neutral-200 bg-white p-4 shadow-md transition-all hover:scale-105 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900 ${item.className}`}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={380}
              className="pointer-events-none relative z-10 rounded-xl object-cover"
            />
            <h3 className="mt-4 text-center text-xl font-semibold text-neutral-800 group-hover:text-neutral-600 dark:text-neutral-200 dark:group-hover:text-neutral-400">
              {item.title}
            </h3>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </Card>
  );
}
