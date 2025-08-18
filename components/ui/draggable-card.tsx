"use client";
import { cn } from "@/lib/utils";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationControls,
} from "motion/react";

export const DraggableCardBody = ({
  className,
  title,
  children,
}: {
  className?: string;
  title?: string;
  children?: React.ReactNode;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [constraints, setConstraints] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  const springConfig = {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  };

  const rotateX = useSpring(
    useTransform(mouseY, [-300, 300], [20, -20]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-20, 20]),
    springConfig
  );

  const opacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.9, 1, 0.9]),
    springConfig
  );

  const glareOpacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.15, 0, 0.15]),
    springConfig
  );

  useEffect(() => {
    const updateConstraints = () => {
      if (typeof window !== "undefined") {
        setConstraints({
          top: -window.innerHeight / 2,
          left: -window.innerWidth / 2,
          right: window.innerWidth / 2,
          bottom: window.innerHeight / 2,
        });
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } =
      cardRef.current?.getBoundingClientRect() ?? {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
      };
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    mouseX.set(deltaX);
    mouseY.set(deltaY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      drag
      dragConstraints={constraints}
      onDragStart={() => (document.body.style.cursor = "grabbing")}
      onDragEnd={() => (document.body.style.cursor = "default")}
      style={{ rotateX, rotateY, opacity, willChange: "transform" }}
      animate={controls}
      whileHover={{ scale: 1.03 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative h-[280px] w-[500px] sm:h-[320px] sm:w-[600px] overflow-hidden rounded-xl bg-neutral-100 p-4 shadow-2xl transform-3d dark:bg-neutral-900 flex flex-col",
        className
      )}
    >
      {/* Title */}
      {title && (
        <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-3">
          {title}
        </h3>
      )}

      {/* Content (certificate preview, logos, description) */}
      <div className="flex-1 flex items-center justify-center">{children}</div>

      <motion.div
        style={{ opacity: glareOpacity }}
        className="pointer-events-none absolute inset-0 bg-white select-none"
      />
    </motion.div>
  );
};

export const DraggableCardContainer = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("[perspective:3000px]", className)}>{children}</div>
  );
};
