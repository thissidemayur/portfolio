import { Highlighter } from "@/components/magicui/highlighter";
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
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl  leading-relaxed">
          Mayur Pal —
          <Highlighter action="highlight" color="#FF9800">
            Full-Stack & SaaS Developer
          </Highlighter>
        </h1>
        <p className="text-muted-foreground">
          BTech CSE @ LPU · Specializing in scalable apps, Web3 solutions, and
          DevOps automation.
        </p>
        <div className="flex gap-3">
          <Button asChild className="p-4" size={"lg"}>
            <Link href="/resume">Download Resume</Link>
          </Button>
          <Button asChild className="p-4" variant={"outline"} size={"lg"}>
            <Link href="/projects">View Work</Link>
          </Button>
        </div>
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
