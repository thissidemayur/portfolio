"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "motion/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";

interface ScratchToRevealProps {
  children: React.ReactNode;
  width: number;
  height: number;
  minScratchPercentage?: number;
  className?: string;
  onComplete?: () => void;
  gradientColors?: [string, string, string];
}

export const ScratchToReveal: React.FC<ScratchToRevealProps> = ({
  width,
  height,
  minScratchPercentage = 50,
  onComplete,
  children,
  className,
  gradientColors = ["#A97CF8", "#F38CB8", "#FDCC92"],
}) => {
  const ConfetiCelebreation = useCallback(() => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
    // Call onComplete after animation finishes
    if (onComplete) {
      onComplete();
    }
  }, [onComplete]);

  const handleScratch = useCallback(() => {
    ConfetiCelebreation();
  }, [ConfetiCelebreation]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScratching, setIsScratching] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const controls = useAnimation();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Only set once
    canvas.width = width;
    canvas.height = height;

    const gradient = ctx.createLinearGradient(
      0,
      0,
      canvas.width,
      canvas.height
    );
    gradient.addColorStop(0, gradientColors[0]);
    gradient.addColorStop(0.5, gradientColors[1]);
    gradient.addColorStop(1, gradientColors[2]);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, [height, gradientColors, width]); // empty dependency array

  const handleMouseDown = () => setIsScratching(true);

  const handleTouchStart = () => setIsScratching(true);

  const canvas = canvasRef.current;
  const ctx = canvas?.getContext("2d");
  if (canvas && ctx) {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, gradientColors[0]);
    gradient.addColorStop(0.5, gradientColors[1]);
    gradient.addColorStop(1, gradientColors[2]);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }

  const checkCompletion = useCallback(() => {
    if (isComplete) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      const totalPixels = pixels.length / 4;
      let clearPixels = 0;

      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) clearPixels++;
      }

      const percentage = (clearPixels / totalPixels) * 100;
      if (percentage >= minScratchPercentage) {
        setIsComplete(true);
        ConfetiCelebreation();
      }
    }
  }, [isComplete, minScratchPercentage, ConfetiCelebreation]);

  const scratch = useCallback(
    (clientX: number, clientY: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (canvas && ctx) {
        const rect = canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;

        const x = (clientX - rect.left) * dpr;
        const y = (clientY - rect.top) * dpr;

        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.arc(x, y, 30 * dpr, 0, Math.PI * 2);
        ctx.fill();

        checkCompletion(); // still safe
      }
    },
    [checkCompletion]
  );
  useEffect(() => {
    const handleDocumentMouseMove = (event: MouseEvent) => {
      if (!isScratching) return;
      scratch(event.clientX, event.clientY);
    };

    const handleDocumentTouchMove = (event: TouchEvent) => {
      if (!isScratching) return;
      const touch = event.touches[0];
      scratch(touch.clientX, touch.clientY);
    };

    const handleDocumentMouseUp = () => {
      setIsScratching(false);
      checkCompletion();
    };

    const handleDocumentTouchEnd = () => {
      setIsScratching(false);
      checkCompletion();
    };

    document.addEventListener("mousemove", handleDocumentMouseMove);
    document.addEventListener("touchstart", handleDocumentTouchMove);
    document.addEventListener("touchmove", handleDocumentTouchMove);
    document.addEventListener("mouseup", handleDocumentMouseUp);
    document.addEventListener("touchend", handleDocumentTouchEnd);
    document.addEventListener("touchcancel", handleDocumentTouchEnd);

    return () => {
      document.removeEventListener("mousedown", handleDocumentMouseMove);
      document.removeEventListener("mousemove", handleDocumentMouseMove);
      document.removeEventListener("touchstart", handleDocumentTouchMove);
      document.removeEventListener("touchmove", handleDocumentTouchMove);
      document.removeEventListener("mouseup", handleDocumentMouseUp);
      document.removeEventListener("touchend", handleDocumentTouchEnd);
      document.removeEventListener("touchcancel", handleDocumentTouchEnd);
    };
  }, [isScratching, checkCompletion, scratch]);

  return (
    <motion.div
      className={cn("relative select-none", className)}
      style={{
        width,
        height,
        cursor:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNSIgc3R5bGU9ImZpbGw6I2ZmZjtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6MXB4OyIgLz4KPC9zdmc+'), auto",
      }}
      animate={controls}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {isComplete && children}
      </div>
      {!isComplete && (
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="absolute left-0 top-0"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        />
      )}
    </motion.div>
  );
};
