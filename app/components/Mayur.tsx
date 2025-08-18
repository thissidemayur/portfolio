"use client";
import { motion } from "motion/react";

import { PixelImage } from "@/components/magicui/pixel-image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function Mayur() {
  return (
    <Card className="flex flex-col sm:flex-row justify-between items-center gap-8 py-6 sm:p-10 mb-10">
      {/* Left Side (Text) */}
      <div className="max-w-md space-y-4 text-center sm:text-left">
        {/* Image for small screens */}
        <div className="sm:hidden flex justify-center items-center ">
          <PixelImage
            src="/mayur.jpeg"
            customGrid={{ rows: 4, cols: 6 }}
            grayscaleAnimation
            colorRevealDelay={300}
          />
        </div>

        {/* Animated Heading */}
        <h1 className="relative z-10 mx-auto max-w-4xl text-slate-700 text-3xl sm:text-4xl leading-tight font-bold dark:text-slate-300">
          {"Mayur Pal — Full-Stack & SaaS Developer"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-base sm:text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          BTech CSE @ LPU · Specializing in scalable apps, Web3 solutions, and
          DevOps automation.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-10 items-center flex gap-y-5 flex-col sm:flex-row gap-3 w-full sm:w-auto"
        >
          <Button asChild className="w-[90%] sm:w-auto rounded-xl px-6 py-4">
            <Link href="/resume">📄 Download Resume</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-[90%] sm:w-auto items-center rounded-xl px-6 py-4"
          >
            <Link href="/projects">💼 View Work</Link>
          </Button>
        </motion.div>
      </div>

      {/* Right Side (Image for larger screens) */}
      <div className="hidden sm:block">
        <PixelImage
          src="/mayur.jpeg"
          customGrid={{ rows: 4, cols: 6 }}
          grayscaleAnimation
          colorRevealDelay={300}
        />
      </div>
    </Card>
  );
}
