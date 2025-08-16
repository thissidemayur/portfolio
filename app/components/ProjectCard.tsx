import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  coverImage: string;
  coverTitle: string;
  techStack: string[];
  highlights: { id: number; text: string }[];
  className?: string;
  id: number;
}
export default function ProjectCard({
  title,
  description,
  slug,
  coverImage,
  coverTitle,
  techStack,
  highlights,
  className,
  id,
}: ProjectCardProps) {
  return (
    <>
      {/* ----------------------------content ----------------------------------- */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${className}`}
      >
        {/* Left Card with Image */}
        <a
          href={slug}
          target="_blank"
          rel="noopener noreferrer"
          className="group block hover:cursor-pointer"
        >
          <div className="backdrop-blur-lg border border-border rounded-2xl p-8 h-full flex flex-col shadow-2xl shadow-black/40 hover:scale-105 transition-all w-[90%] ml-4">
            {/* Title  */}
            <div className="flex justify-between items-start mb-6 ">
              <h2 className="sm:text-2xl text-xl leading-tight font-medium text-foreground flex-1 pr-4">
                {coverTitle}
              </h2>
              <div className="r">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors"
                >
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Project Image */}
            <div className="mt-auto relative w-full aspect-[16/9] md:aspect-[16/10] lg:aspect-[16/9]">
              <Image
                src={coverImage}
                alt="Project Screenshot"
                fill
                className="rounded-lg object-contain border border-border"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
          </div>
        </a>

        {/* Right Text Content */}
        <div className="flex flex-col justify-center px-5 lg:p-0">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {`${id}. ${title}`}
          </h3>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>

          {/* Features List */}
          <ul className="mt-6 space-y-4">
            {highlights?.map((highlight) => (
              <li className="flex items-start" key={highlight.id}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-primary"
                >
                  <path
                    d="M16.6668 5L7.50016 14.1667L3.3335 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ml-3 text-foreground">{highlight.text}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack Badges */}
          <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {techStack?.map((tech) => (
              <li
                key={tech}
                className="flex items-center backdrop-blur-sm border border-border rounded-lg px-3 py-2 text-sm text-muted-foreground  "
              >
                <svg
                  className="w-5 h-5 mr-2 text-muted-foreground"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"></path>
                </svg>
                <span className="">{tech}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
