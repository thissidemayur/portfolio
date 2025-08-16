import React from "react";
import BlogCard from "../components/BlogCard";
import { Card } from "@/components/ui/card";
import Head from "next/head";
import BlogSearch from "../components/BlogSearch";
import TitleAndDescription from "../components/TitleAndDescription";
//TODO:  SYNC from my blog application (contentbanao)

// Next.js configuration export, not a variable . for ISR (Incremental Static Regeneration).
export const revalidate = 60 * 60;
export async function getData() {
  // fetch data from db
  const blogs = await fetch("https:mongodbatlas", {
    next: {
      revalidate: 60 * 60,
    },
  });

  if (!blogs.ok) throw new Error("Failed to fetch blogs");

  return blogs.json();
}

export default async function BlogsPage() {
  // const blogs = await getData()
  return (
    <>
      <Head>
        <title>
          Blogs & Tutorials by Mayur Pal | Mayur | thissidemayur – Web3, Full
          Stack & DevOps Freelancer
        </title>

        <meta
          name="description"
          content="Read expert articles and tutorials by Mayur Pal (thissidemayur) on Web3, Full Stack Development, Next.js, React, DevOps, and SaaS. Follow my journey as a freelancer building high-performance, scalable apps."
        />

        <meta
          name="keywords"
          content="Mayur, Mayur Pal, thissidemayur, freelancer, Web3 developer, Full Stack developer, DevOps engineer, Next.js tutorials, React tutorials, SaaS development, cloud infrastructure, portfolio"
        />

        {/* OG tags */}
        <meta
          property="og:title"
          content="Blogs & Tutorials by Mayur Pal | Web3, Full Stack , DevOps and Freelancer"
        />
        <meta
          property="og:description"
          content="Explore the latest blogs, tutorials, and insights by Mayur Pal (thissidemayur) on Web3, Full Stack Development, Next.js, React, DevOps, and SaaS."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-blog.png" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/blog`}
        />

        {/* Twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Blogs & Tutorials by Mayur Pal | Web3, Full Stack & DevOps Freelancer"
        />
        <meta
          name="twitter:description"
          content="Read expert Web3, Full Stack, and DevOps content by freelancer Mayur Pal (thissidemayur). Learn from tutorials, case studies, and coding tips."
        />
        <meta name="twitter:image" content="/twitter-blog.png" />
      </Head>

      {/* -------------------------------------------------- content -------------------------------------------------- */}
      <div className="flex-col gap-y-10 mb-10 mt-5">
        <TitleAndDescription
          title="Insights & Articles"
          description=" Sharing my journey, technical deep-dives, and lessons from building
          SaaS apps, exploring Web3, and mastering DevOps."
        />

        {/* Search Bar */}
        <div className="my-3 px-5">
          <BlogSearch />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-7 py-6 px-3 my-10">
          {Array.from({ length: 10 }, (_, indx) => (
            <BlogCard
              key={indx}
              coverPhoto="/project/contentBanao1.png"
              date={new Date(Date.UTC(2012, 11, 20, 3, 0, 0))}
              authorName="Mayur Pal"
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reiciendis voluptate explicabo repellat deserunt unde dolorem ullam maxime, eveniet debitis."
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit voluptates voluptate, deleniti neque autem est saepe a exercitationem? Iusto aspernatur totam, "
              tags={[
                "webDev",
                "NextJs",
                "MERN",
                "freelancer",
                "developer",
                "sira Bande",
              ]}
              slug="bhawanai-putra"
            />
          ))}
        </div>
      </div>
    </>
  );
}
