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
    <div className="px-2 sm:px-6 md:px-12 lg:px-20 py-10">
      <Card className="p-6 sm:p-10 shadow-lg rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg">
        <TitleAndDescription title="About Me" />

        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-8">
          {/* Left Side (Text Content) */}
          <div className="max-w-2xl space-y-6">
            {/* Animated Intro */}
            <h1 className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight dark:text-slate-200">
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
                  className="mr-2 inline-block"
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
              className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-400"
            >
              🚀 Full-stack developer passionate about{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                SaaS-grade applications
              </span>{" "}
              and{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                scalable digital products
              </span>
              . I turn ideas into systems that work, scale, and solve real
              problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex gap-4"
            >
              <Button asChild size="lg" className="rounded-xl px-6 py-4">
                <Link href="/resume">📄 Download Resume</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-xl px-6 py-4"
              >
                <Link href="/hire-mayur">💼 Hire Me</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Side (Image) */}
          <div className="flex justify-center sm:justify-end">
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
          className="mt-10 space-y-6 text-neutral-700 dark:text-neutral-400 text-base sm:text-lg"
        >
          <p>
            My tech journey began in <b>July 2023</b>, when I used a laptop for
            the first time in college. At the start, even fixing a small typo
            took me 30–50 minutes. But I never gave up — I pushed harder each
            day.
          </p>

          <p className="italic border-l-4 border-indigo-500 pl-4">
            For me, life is like a{" "}
            <b className="text-indigo-600 dark:text-indigo-400">400m race</b>:
            everyone starts at different points, but it’s not about the prize —
            it’s about how far you come from where you began.
          </p>

          <ul className="list-disc list-inside space-y-1 pl-2">
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

          <blockquote className="border-l-4 border-yellow-500 pl-4 italic">
            <b>Philosophy:</b> युद्ध नहीं जिनके जीवन में, वो भी बड़े अभागे
            होंगे, या तो प्रण को तोड़ा होगा, या फिर रण से भागे होंगे !! <br />
            <span className="text-sm text-neutral-500">
              (Those who have not known war in their lives must be very
              unfortunate. They must have either broken their vow or fled from
              the battlefield.)
            </span>
          </blockquote>

          <h2 className="text-2xl font-bold mt-6">⚡ Skill Set</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
            <p>🔹 Full-stack: Node.js, Express, Next.js, React</p>
            <p>🔹 Databases: MongoDB, PostgreSQL, Prisma</p>
            <p>🔹 Languages: Python, C, C++, JavaScript, TypeScript, Golang</p>
            <p>🔹 DevOps & Tools: Linux, Git, GitHub, GitLab, Postman</p>
            <p>🔹 Advanced: Redux Toolkit, RTK Query, Zod</p>
          </div>

          <h2 className="text-2xl font-bold mt-6">🎯 Vision</h2>
          <p>
            I’m not just learning for degrees or job prep. In fact, I stepped
            away from DSA because I believe <b>real problem-solving</b> happens
            when you dive into docs, contribute to PRs, fix bugs, and build
            systems that work.
          </p>
          <p>
            That’s why I’m building <b>MSP (Mayur’s Smart Portfolio)</b> — not
            just a portfolio, but a{" "}
            <span className="underline decoration-indigo-500">
              project communication & management app
            </span>
            .
          </p>
          <ul className="list-check list-inside space-y-1">
            <li>
              ✅ Recruiters & clients can explore my work and connect directly
            </li>
            <li>
              ✅ A private space for chatting, tracking progress, & daily
              updates
            </li>
            <li>✅ Clients stay stress-free while I handle their projects</li>
            <li>
              ✅ I can manage all freelance + personal projects in one place
            </li>
          </ul>

          {/* Closing CTA */}
          <div className="pt-6">
            <Button
              asChild
              size="lg"
              variant={"outline"}
              className="rounded-xl px-6 py-4"
            >
              <Link href="/contact"> Let’s Collaborate</Link>
            </Button>
          </div>
        </motion.div>
      </Card>
    </div>
  );
}
