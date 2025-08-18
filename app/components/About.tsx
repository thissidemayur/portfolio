"use client";

import { PixelImage } from "@/components/magicui/pixel-image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
import TitleAndDescription from "./TitleAndDescription";

export default function About() {
  return (
    <div className="px-3 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-10">
      <Card className="p-4 sm:p-8 shadow-lg rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg">
        <TitleAndDescription title="About Me" />

        {/* Flex Container */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-6 sm:gap-8">
          {/* Left Side (Text Content) */}
          <div className="max-w-2xl space-y-5 sm:space-y-6">
            {/* Animated Intro */}
            <h1 className="text-slate-800 text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-snug dark:text-slate-200 text-center sm:text-left">
              {"Hey, This side Mayur Pal".split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="mr-1 inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-base sm:text-lg text-neutral-700 dark:text-neutral-400 text-center sm:text-left"
            >
              🚀 Full-stack developer passionate about{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                SaaS-grade applications
              </span>{" "}
              and{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                scalable digital products
              </span>
              .
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <Button
                asChild
                size="lg"
                className="rounded-xl px-5 py-3 w-full sm:w-auto"
              >
                <Link href="/resume">📄 Download Resume</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-xl px-5 py-3 w-full sm:w-auto"
              >
                <Link href="/hire-mayur">💼 Hire Me</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Side (Image) */}
          <div className="flex justify-center sm:justify-end w-full sm:w-auto">
            <PixelImage
              src="/mayur.jpeg"
              customGrid={{ rows: 5, cols: 7 }}
              grayscaleAnimation
              colorRevealDelay={300}
            />
          </div>
        </div>

        {/* Detailed Bio Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-8 sm:mt-10 space-y-5 sm:space-y-6 text-neutral-700 dark:text-neutral-400 text-sm sm:text-base leading-relaxed"
        >
          <p>
            My tech journey began in <b>July 2023</b>, when I used a laptop for
            the first time in college. At the start, even fixing a small typo
            took me 30–50 minutes. But I never gave up — I pushed harder each
            day.
          </p>

          <p className="italic border-l-4 border-indigo-500 pl-3 sm:pl-4">
            For me, life is like a{" "}
            <b className="text-indigo-600 dark:text-indigo-400">400m race</b>:
            everyone starts at different points, but it’s not about the prize —
            it’s about how far you come from where you began.
          </p>

          <ul className="list-disc list-inside space-y-1 pl-3 sm:pl-5">
            <li>
              Started with Python → C → C++ (fell in love with problem-solving)
            </li>
            <li>Dived into JavaScript, React, Node.js, Express</li>
            <li>
              Picked up Golang, Linux, Shell scripting, Git, GitHub/GitLab
            </li>
            <li>
              Now building SaaS-level projects while exploring DevOps & Web3
              (Rust)
            </li>
          </ul>

          <blockquote className="border-l-4 border-yellow-500 pl-3 sm:pl-4 italic text-sm sm:text-base">
            <b>Philosophy:</b> युद्ध नहीं जिनके जीवन में, वो भी बड़े अभागे
            होंगे, या तो प्रण को तोड़ा होगा, या फिर रण से भागे होंगे !!
          </blockquote>

          <h2 className="text-xl sm:text-2xl font-bold mt-6">⚡ Skill Set</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm sm:text-base">
            <p>🔹 Full-stack: Node.js, Express, Next.js, React</p>
            <p>🔹 Databases: MongoDB, PostgreSQL, Prisma</p>
            <p>🔹 Languages: Python, C, C++, JavaScript, TypeScript, Golang</p>
            <p>🔹 DevOps & Tools: Linux, Git, GitHub, GitLab, Postman</p>
            <p>🔹 Advanced: Redux Toolkit, RTK Query, Zod</p>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mt-6">🎯 Vision</h2>
          <p>
            I’m not just learning for degrees or job prep. I believe{" "}
            <b>real problem-solving</b> happens when you dive into docs,
            contribute to PRs, fix bugs, and build systems that work.
          </p>

          <ul className="list-check list-inside space-y-1 pl-3 sm:pl-5">
            <li>
              ✅ Recruiters & clients can explore my work and connect directly
            </li>
            <li>
              ✅ Private space for chatting, tracking progress, & daily updates
            </li>
            <li>✅ Clients stay stress-free while I handle their projects</li>
          </ul>

          {/* Closing CTA */}
          <div className="pt-4 sm:pt-6 flex justify-center sm:justify-start">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl px-6 py-3 w-full sm:w-auto"
            >
              <Link href="/contact">Let’s Collaborate</Link>
            </Button>
          </div>
        </motion.div>
      </Card>
    </div>
  );
}
