import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { Key } from "lucide-react";
export default function WorkHighlight() {
  return (
    <ProjectDemo
      title="Work Highlights"
      description=" A Few Projects That Show What I Can Do ✨"
    />
  );
}

function ProjectDemo({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  const data = [
    {
      id: 1,
      title: "ContentBanao",
      content: (
        <div className="text-muted-foreground text-xs sm:text-sm md:text-lg ">
          <p className="mb-4  font-normal">
            Modern SaaS blogging & reel-sharing platform with Next.js 15,
            TypeScript, Tailwind, Redux Toolkit, NextAuth, and MongoDB.
          </p>
          <ul className="list-disc ml-4 mb-4 text-xs font-normal">
            <li>Modular architecture with Next.js 15 App Router</li>
            <li>NextAuth with Google OAuth & JWT route protection</li>
            <li>Dynamic blog creation, comments, and reels</li>
            <li>CDN media support via ImageKit</li>
            <li>Responsive, reusable UI components</li>
          </ul>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <Image
                src="/project/contentBanao1.png"
                alt="ContentBanao screenshot 1"
                width={500}
                height={500}
                className="w-full rounded-lg object-cover"
              />
              <Image
                src="/project/contentBanao2.png"
                alt="ContentBanao screenshot 2"
                width={500}
                height={500}
                className="w-full rounded-lg object-cover"
              />
            </div>
            <div className="sm:flex flex-col gap-4 hidden">
              <Image
                src="/project/contentBanao3.png"
                alt="ContentBanao screenshot 3"
                width={500}
                height={500}
                className="w-full rounded-lg object-cover"
              />
              <Image
                src="/project/contentBanao4.png"
                alt="ContentBanao screenshot 4"
                width={500}
                height={500}
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "InvoiceBanao",
      content: (
        <div className="text-muted-foreground text-xs sm:text-sm md:text-lg ">
          <p className="mb-4 font-normal">
            Full-stack invoice management system with email delivery, reminders,
            and interactive dashboard.
          </p>
          <ul className="list-disc ml-4 mb-4 text-xs font-normal">
            <li>Cookie-based authentication with magic link login</li>
            <li>Create, edit, delete invoices with PDF generation</li>
            <li>Send invoices & reminders via email</li>
            <li>Interactive Recharts graphs dashboard</li>
            <li>Radix UI + Tailwind for clean, scalable interface</li>
          </ul>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <Image
                src="/project/contentBanao1.png"
                alt="ContentBanao screenshot 1"
                width={500}
                height={500}
                className="w-full rounded-lg object-cover"
              />
              <Image
                src="/project/contentBanao2.png"
                alt="ContentBanao screenshot 2"
                width={500}
                height={500}
                className="w-full rounded-lg object-cover"
              />
            </div>
            <div className=" flex-col gap-4 hidden sm:flex ">
              {" "}
              <Image
                src="/project/contentBanao3.png"
                alt="ContentBanao screenshot 3"
                width={500}
                height={500}
                className="w-full rounded-lg object-cover"
              />
              <Image
                src="/project/contentBanao4.png"
                alt="ContentBanao screenshot 4"
                width={500}
                height={500}
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "CalScheduling",
      content: (
        <div
          className="text-muted-foreground text-xs sm:text-sm md:text-lg"
          key={3}
        >
          <p className="mb-4  font-normal">
            Event scheduling platform for booking slots, checking availability,
            and video calls.
          </p>
          <ul className="list-disc ml-4 mb-4 text-xs font-normal">
            <li>Create events & book available time slots</li>
            <li>Integrated video call platform</li>
            <li>Secure authentication with NextAuth</li>
            <li>Backend powered by Prisma ORM + PostgreSQL</li>
            <li>Form validation with Zod & Conform</li>
          </ul>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <Image
                src="/project/contentBanao1.png"
                alt="ContentBanao screenshot 1"
                width={500}
                height={500}
                className="w-full rounded-lg object-cover"
              />
              <Image
                src="/project/contentBanao2.png"
                alt="ContentBanao screenshot 2"
                width={500}
                height={500}
                className="w-full rounded-lg object-cover"
              />
            </div>
            <div className=" flex-col gap-4 hidden sm:flex ">
              <Image
                src="/project/contentBanao3.png"
                alt="ContentBanao screenshot 3"
                width={500}
                height={500}
                className="w-full rounded-lg object-cover"
              />
              <Image
                src="/project/contentBanao4.png"
                alt="ContentBanao screenshot 4"
                width={500}
                height={500}
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} description={description} title={title} />
    </div>
  );
}
