"use client";

import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { reasons, stepsData, testimonials } from "@/lib/data";
import { ArrowDown, ArrowUp } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import ContactFormPage from "./ContactForm";

export function HireMe() {
  return (
    <div className="md:px-10">
      <HeroSection />

      {/*  */}
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          delay: 1.2,
        }}
        className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900 "
      >
        {/* why me */}
        <WhyWorkWithMe />
        <HowIWork />
        {/* testimonial */}
        <div className="my-10">
          <h1 className="text-4xl font-bold mb-2 text-center  text-slate-700 dark:text-slate-300">
            What My Clients Say
          </h1>

          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          delay: 1.2,
        }}
        className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900 "
      >
        <ContactFormPage />
      </motion.div>
    </div>
  );
}

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
        <h1 className="text-base font-bold md:text-2xl">Mayur Pal</h1>
      </div>
      <Link
        href={"/projects"}
        className="w-36 transform text-sm md:text-base rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-44 text-center dark:bg-white dark:text-black dark:hover:bg-gray-200 "
      >
        View Projects
      </Link>
    </nav>
  );
};

// Hero Section
function HeroSection() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <Navbar />
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Let’s Turn Your Idea into a System That Works 🚀"
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
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          I build SaaS-grade products that scale, solve real-world problems, and
          deliver measurable impact — all at cost-effective pricing. I’m here to
          grow skills, not just chase money.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href={"/contact"}
            className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-center"
          >
            Hire Me
          </Link>

          <Link
            href={"/schedule-meeting"}
            className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 text-center"
          >
            Schedule a Call
          </Link>
        </motion.div>

        {/*  */}
      </div>
    </div>
  );
}

// How i work-timeline
export default function HowIWork() {
  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-2  text-slate-700 dark:text-slate-300">
          How I Work
        </h1>
        <p className="text-lg  mb-12 text-muted-foreground">
          My Process: From Idea → System → Growth
        </p>

        <div className="flex flex-col md:flex-row md:justify-between items-center gap-8">
          {stepsData.map((step, idx) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center relative"
            >
              {/* Icon */}
              <div className="bg-white shadow-md p-4 rounded-full mb-4">
                <step.icon className="w-8 h-8 text-indigo-600" />
              </div>

              {/* Title & Description */}
              <h2 className="text-xl font-semibold mb-2 text-slate-700 dark:text-slate-300">
                {step.title}
              </h2>
              <p className="text-muted-foreground max-w-xs">
                {step.description}
              </p>

              {/* Arrow (except last step) */}
              {idx < stepsData.length - 1 && (
                <ArrowDown className="w-6 h-6 mt-4 text-gray-400  md:hidden" />
              )}

              {/* Horizontal arrow for desktop */}
              {idx < stepsData.length - 1 && (
                <div className="hidden md:block absolute top-10 right-[-40px]">
                  <ArrowUp className="w-6 h-6 rotate-90 text-gray-400 " />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// why me

function WhyWorkWithMe() {
  return (
    <section className="py-12  text-slate-700 dark:text-slate-300">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          Why Clients Work With Me
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I don’t just build projects; I build trust, quality, and results.
          Here’s why clients choose me:
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <Card
              key={reason.id}
              className="hover:shadow-lg transition-shadow duration-200"
            >
              <CardContent className="flex flex-col items-center text-center gap-4">
                <reason.icon className="w-6 h-6 text-indigo-600" />
                <CardTitle className="text-lg font-semibold">
                  {reason.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {reason.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
