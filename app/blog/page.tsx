import React from "react";
import BlogCard from "../components/BlogCard";
import Head from "next/head";
import BlogSearch from "../components/BlogSearch";
import SEO from "../components/SEO";
import TitleAndDescription from "../components/TitleAndDescription";
//TODO:  SYNC from my blog application (contentbanao)
const blogPosts: iBlogCard[] = [
  {
    title:
      "Blog 1: Introduction to Blockchain & Smart Contracts (Beginner’s Perspective) on your platform.",
    summary:
      "Smart contracts are changing how we think about trust, agreements, and automation. In this beginner-friendly blog, I explain what blockchain is, why traditional contracts fail, and how smart contracts bring transparency, decentralization, and security. From Bitcoin to Ethereum, Oracles to Layer 2 scaling — this is the foundation of my journey into Web3 development.",
    media: [
      {
        type: "image",
        url: "https://ik.imagekit.io/thissidemayur/Smart-Contracts_kdSfnrxfQ.jpg",
      },
    ],

    slug: "blog-1-introduction-to-blockchain-and-smart-contracts-beginn-ra04",
    tags: [
      "Web3",
      "Blockchain",
      "Smart Contracts",
      "Ethereum",
      "DeFi",
      "NFTs",
      "Beginner Guide",
    ],
    createdAt: new Date(1755594633558),
  },
  {
    title:
      "Why Prisma Doesn't Work in Next.js Middleware & How to Architect Hybrid Edge+Node Apps Correctly",
    summary:
      "If you're using Prisma with PostgreSQL (Neon DB), remember:  Prisma requires Node.js runtime. Attempting to use Prisma inside Edge Middleware will lead to runtime errors because Edge environments do not support Node.js core modules.  → Use JWT-based authentication strategies for Middleware (Edge-safe) → Handle DB interactions inside API Routes or Server Actions (Node runtime)",
    media: [
      {
        type: "image",
        url: "https://ik.imagekit.io/thissidemayur/backend_sQb8MC9St.png",
      },
    ],
    slug: "why-prisma-doesnt-work-in-nextjs-middleware-and-how-to-archi-0v3o",
    tags: [
      "Nodejs",
      "prisma",
      "nextjs",
      "Authjs",
      "EdgeRuntime",
      "NeonDb",
      "FullStackDevlopment",
      "DevloperJourney",
    ],
    createdAt: new Date(1754172458555),
  },
  {
    title:
      "What is Tor Browser? A Beginner’s Guide to Online Anonymity and Privacy",
    summary:
      "In this blog, we’ll explore what Tor Browser is, how it works, what the “dark web” really means, whether using Tor is legal in India, its pros and cons, and how beginners can safely use it without risking their privacy or security. If you’ve ever been curious about how people stay anonymous online or access .onion sites — this is your complete beginner’s guide.",
    media: [
      {
        type: "image",
        url: "https://ik.imagekit.io/thissidemayur/tor_0rAX1tYDy.jpg",
      },
    ],
    slug: "what-is-tor-browser-a-beginners-guide-to-online-anonymity-an-tgud",
    tags: ["TorBrowser", "CyberSecurity", "DarkWebGuide"],
    createdAt: new Date(1752388604121),
  },
];
// Next.js configuration export, not a variable . for ISR (Incremental Static Regeneration).
export const revalidate = 3600;
async function getData() {
  // fetch data from db
  const blogs = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  console.log("blog: ", blogs);
  if (!blogs.ok) throw new Error("Failed to fetch blogs");

  const data = await blogs.json();
  return data;
}

export default async function BlogsPage() {
  const blogs = await getData();
  console.log("blogs: ", blogs);
  return (
    <>
      <SEO
        title=" Blogs & Tutorials by Mayur Pal | Mayur | thissidemayur – Web3, Full
          Stack & DevOps Freelancer"
        description="Read expert articles and tutorials by Mayur Pal (thissidemayur) on Web3, Full Stack Development, Next.js, React, DevOps, and SaaS. Follow my journey as a freelancer building high-performance, scalable apps."
        url="https://www.thissidemayur.me/blog"
      />

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
          {blogPosts?.map((blog: iBlogCard) => (
            <div key={blog.slug}>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Blog",
                    name: "Mayur Pal's Blog",
                    url: "https://www.thissidemayur.me/blog",
                    author: { "@type": "Person", name: "Mayur Pal" },
                    blogPost: blogPosts.map((blog: iBlogCard) => ({
                      "@type": "BlogPosting",
                      headline: blog.title,
                      url: `https://www.thissidemayur.me/blog/${blog.slug}`,
                      datePublished: blog.createdAt,
                      author: { "@type": "Person", name: "Mayur Pal" },
                      description: blog.summary,
                    })),
                  }),
                }}
              />

              <BlogCard
                key={blog.slug}
                coverPhoto={blog.media[0].url ?? ""}
                date={blog.createdAt}
                title={blog.title}
                description={blog.summary as string}
                tags={blog.tags}
                slug={blog.slug}
              />

              {/* <h1>Sorry,We are working on it</h1> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

interface iBlogCard {
  title: string;
  summary: string;
  media: {
    type: string;
    url: string;
  }[];
  slug: string;
  tags: string[];
  createdAt: Date;
}
