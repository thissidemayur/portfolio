"use client";

import { motion } from "motion/react";

export default function TitleAndDescription({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <>
      <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 dark:text-slate-300  md:text-4xl lg:text-5xl  ">
        {`${title}`.split(" ").map((word, index) => (
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
        className="relative z-10 mx-auto max-w-xl  text-centertext-sm text-center  sm:text-lg font-normal text-neutral-600 dark:text-neutral-400  py-1"
      >
        {description}
      </motion.p>
    </>
  );
}
