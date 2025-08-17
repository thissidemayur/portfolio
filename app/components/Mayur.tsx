"use client";
import { motion } from "motion/react";

import { PixelImage } from "@/components/magicui/pixel-image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function Mayur() {
  return (
    <Card className="flex-row justify-evenly items-center mb-10">
      <div className="max-w-md space-y-4">
        <div className=" sm:hidden flex justify-center">
          <PixelImage
            src="/mayur.jpeg"
            customGrid={{ rows: 4, cols: 6 }}
            grayscaleAnimation
            colorRevealDelay={300}
          />
        </div>

        <h1 className="relative z-10 mx-auto max-w-4xl  text-slate-700 text-3xl  tracking-tight sm:text-4xl  leading-tight font-bold dark:text-slate-300">
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

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4  text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          BTech CSE @ LPU · Specializing in scalable apps, Web3 solutions, and
          DevOps automation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-10 mx-auto max-w-2xl flex gap-3"
        >
          <Button asChild className="p-4" size={"lg"}>
            <Link href="/resume">Download Resume</Link>
          </Button>
          <Button asChild className="p-4" variant={"outline"} size={"lg"}>
            <Link href="/projects">View Work</Link>
          </Button>
        </motion.div>
      </div>
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
