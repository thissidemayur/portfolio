"use client";

import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { MouseEvent as ReactMouseEvent, useState } from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons/lib";

// CardSpotlight component
export const CardSpotlight = ({
  children,
  radius = 350,
  className,
  ...props
}: {
  radius?: number;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      className={cn(
        "group/spotlight p-6 rounded-xl relative border bg-neutral-50 border-neutral-200 dark:bg-black dark:border-neutral-800 transition-all",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Dark mode spotlight */}
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 dark:group-hover/spotlight:opacity-100"
        style={{
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        {isHovering && (
          <div className="hidden dark:block">
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent absolute inset-0 pointer-events-none"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              dotSize={3}
            />
          </div>
        )}
      </motion.div>

      {children}
    </div>
  );
};

// Converted StackItem to Spotlight card
interface StackItemProps {
  title: string;
  items: { icon: IconType; label: string }[];
}

export function StackItemSpotlight({ title, items }: StackItemProps) {
  return (
    <CardSpotlight className="w-full sm:w-80">
      <h4 className="font-semibold mb-3 text-neutral-900 dark:text-neutral-100">
        {title}
      </h4>
      <div className="flex flex-wrap gap-3">
        {items.map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 dark:border-neutral-700 px-3 py-1.5 text-sm bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"
          >
            <Icon className="text-base" /> {label}
          </span>
        ))}
      </div>
    </CardSpotlight>
  );
}
