"use client";
import { ScratchToReveal } from "@/components/magicui/scratch-to-reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dateFormatter, timeFormatter } from "@/lib/intlAPI";
import { Mail } from "lucide-react";
import { useEffect, useState } from "react";
import React from "react";
import { toast } from "sonner";

export default function CurrentDateAndTime() {
  const [currentTime, setCurrentTime] = useState<string | null>(null);
  const [viewportWidth, setViewportWidth] = useState<number>(0);

  useEffect(() => {
    setCurrentTime(`${timeFormatter(new Date())}`);
    const updateWidth = () => setViewportWidth(window.innerWidth);
    updateWidth();

    // run every sec
    const interval = setInterval(() => {
      setCurrentTime(`${timeFormatter(new Date())}`);
    }, 1000);
    window.addEventListener("resize", updateWidth);

    // clear interval when component unmount
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  let scratchWidth = 300; // default for xs
  if (viewportWidth >= 640 && viewportWidth < 768) {
    // sm screens (mobile landscape / small tablets)
    scratchWidth = 550;
  } else if (viewportWidth >= 768 && viewportWidth < 1024) {
    // md screens (tablets)
    scratchWidth = 700;
  } else if (viewportWidth >= 1024 && viewportWidth < 1300) {
    // lg screens (desktops)
    scratchWidth = 900;
  } else if (viewportWidth >= 1200) {
    scratchWidth = 350;
  }

  return (
    <Card className="p-0 py-6 px-3">
      <CardHeader className="px-0">
        {/* Title centered */}
        <CardTitle className="text-center text-wrap dark:text-slate-300 text-slate-700 ">
          Let’s connect — whether you’re a client, recruiter, or hiring partner
        </CardTitle>

        <CardContent className="px-0">
          {/* availability + timestamp aligned right */}
          <div className="flex-col text-end gap-4 mb-4">
            <span className="flex justify-end items-center gap-2 text-green-700 font-medium">
              {/* Pulsing dot */}
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Available for work
            </span>

            <div className="text-muted-foreground text-xs">
              {`${dateFormatter(new Date())} ${currentTime}`}
            </div>
          </div>

          {/* Scratch to reveal Gmail, centered */}
          <div
            className="mt-5 flex flex-col items-center w-full"
            onClick={() => {
              navigator.clipboard.writeText("thissidemayur@gmail.com");
              toast.success("Copied to Clipboard");
            }}
          >
            <ScratchToReveal
              width={scratchWidth} // dynamic based on viewport
              height={250}
              minScratchPercentage={50}
              className="w-full max-w-lg flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
              gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
            >
              <div className="flex flex-col items-center justify-center space-y-3">
                <p className="text-xl font-semibold text-gray-800 flex items-center gap-x-1">
                  <Mail /> thissidemayur@gmail.com
                </p>
                <p className="text-sm text-muted-foreground text-center">
                  Tap to copy & reach out!
                </p>
              </div>
            </ScratchToReveal>

            <p className="text-muted-foreground text-sm text-center p-3 italic">
              (Psst... scratch above to unlock my contact ✨)
            </p>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
