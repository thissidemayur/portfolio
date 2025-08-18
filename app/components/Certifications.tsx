// app/certifications/page.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaHackerrank } from "react-icons/fa";
import { SiCoursera, SiPostman, SiCodechef, SiGo } from "react-icons/si";

import TitleAndDescription from "../components/TitleAndDescription";
import { JSX } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Head from "next/head";

interface iCertification {
  title: string;
  provider: string;
  date: string;
  description: string;
  verifyUrl: string;
  imageUrl: string; // for future use (like certificate preview)
  icon: JSX.Element; // React Icon
}

const Certifications: iCertification[] = [
  {
    title: "Introduction to Software Engineering",
    provider: "via Coursera",
    date: "September 27, 2024",
    description:
      "Covered software engineering fundamentals including SDLC, agile methodology, and project planning.",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/B7A6FJZJ7WLG",
    imageUrl: "/certification/swEngineering.png",
    icon: <Image src="/logos/ibm.svg" alt="IBM" width={40} height={40} />,
  },
  {
    title: "Postman API Fundamentals Student Expert",
    provider: "Postman",
    date: "May 16, 2025",
    description:
      "Learned REST API concepts, API requests, authorization, collections, and testing using Postman.",
    verifyUrl:
      "https://badgr.com/public/assertions/IA6_OOSJRL-bP4cnYrFDCQ?identity__email=mayurpal7890@gmail.com",
    imageUrl: "/certification/apiFundamental.png",
    icon: <SiPostman className="text-[#FF6C37] w-6 h-6" />, // Postman orange
  },
  {
    title: "C for Everyone: Programming Fundamentals",
    provider: "University of California via Coursera",
    date: "September 22, 2024",
    description:
      "Built a strong foundation in C programming, data types, control flow, and problem solving.",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/HFQQAEPHMDRR",
    imageUrl: "/certification/cLang.png",
    icon: <SiCoursera className="text-[#2A73CC] w-6 h-6" />, // Coursera blue
  },
  {
    title: "Javascript (Basic)",
    provider: "HackerRank",
    date: "Feb 1, 2025",
    description:
      "Validated understanding of core JavaScript topics including functions, arrays, objects, and DOM basics.",
    verifyUrl: "https://www.hackerrank.com/certificates/iframe/9493f995ff51",
    imageUrl: "/certification/js.png",
    icon: <FaHackerrank className="text-[#2EC866] w-6 h-6" />, // HackerRank green
  },
  {
    title: "Introduction to HTML, CSS, & JavaScript",
    provider: "via Coursera",
    date: "October 2, 2024",
    description:
      "Learned web fundamentals: structuring HTML, styling with CSS, and interactive features with JavaScript.",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/J748XXN6J1FF",
    imageUrl: "/certification/htmlCssJS.png",
    icon: <Image src="/logos/ibm.svg" alt="IBM" width={40} height={40} />, // IBM again
  },
  {
    title: "Practise Go",
    provider: "CodeChef",
    date: "May 18, 2025",
    description:
      "Completed Go language basics: syntax, functions, concurrency, and practical coding exercises.",
    verifyUrl: "https://www.codechef.com/certificates/public/bce89ef",
    imageUrl: "/certification/golang.png",
    icon: <SiCodechef className="text-[#964B00] w-6 h-6" />, // CodeChef brown
  },
];

export default function Certification() {
  return (
    <div className="">
      {/* Header */}
      <TitleAndDescription
        title="Certifications & Achievements"
        description="A showcase of certifications that validate my skills in software development, SaaS, backend engineering, and full-stack projects."
      />

      {/* Certifications Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid gap-10"
        >
          {Certifications.map((certificate) => (
            <Card
              key={certificate.verifyUrl}
              className="p-6 hover:shadow-xl transition rounded-2xl"
            >
              <div className="md:flex md:items-center md:gap-8">
                {/* Certificate Image */}
                <Link href={certificate.verifyUrl} target="_blank">
                  <Image
                    src={certificate.imageUrl}
                    alt={certificate.title}
                    width={380}
                    height={320}
                    className="rounded-xl object-cover shadow-md hover:scale-105 transition"
                  />
                </Link>

                {/* Certificate Content */}
                <div className="mt-4 md:mt-0 flex-1">
                  <h2 className="text-xl font-semibold">{certificate.title}</h2>
                  <div className="md:flex md:justify-between md:items-center text-sm text-gray-500 mt-2">
                    <span>{certificate.date}</span>
                    <span className="flex gap-1 items-center justify-end text-left mt-2 md:mt-0">
                      ~by {certificate.icon} {certificate.provider}
                    </span>
                  </div>
                  <p className="mt-3 text-gray-700">
                    {certificate.description}
                  </p>
                  <Link
                    href={certificate.verifyUrl}
                    target="_blank"
                    className="text-blue-600 font-medium hover:underline mt-3 inline-block"
                  >
                    Verify Credential →
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto text-center py-12 ">
        <h3 className="text-2xl font-semibold mb-4">
          Want to collaborate or discuss opportunities?
        </h3>
        <p className="text-gray-600 mb-6">
          These certifications represent my dedication to learning and
          engineering high-quality solutions. Let’s connect and build something
          impactful together.
        </p>
        <Link href="/contact">
          <Button size="lg" className="rounded-full shadow-md cursor-pointer">
            Get in Touch
          </Button>
        </Link>
      </div>
    </div>
  );
}
