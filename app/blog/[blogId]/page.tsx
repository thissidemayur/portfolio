import BlogEOF from "@/app/components/BlogEOF";
import SEO from "@/app/components/SEO";
import { ShareLink } from "@/app/components/ShareLink";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { dateFormatter } from "@/lib/intlAPI";
import Image from "next/image";

interface iBlogPost {
  description: string;
  title: string;
  coverPhoto: string;
  slug: string;
  content: string;
  tags: string[];
  authorName: string;
  date: Date;
}

const blogPosts: iBlogPost[] = [
  {
    title:
      "Blog 1: Introduction to Blockchain & Smart Contracts (Beginner’s Perspective) on your platform.",
    description:
      "Smart contracts are changing how we think about trust, agreements, and automation. In this beginner-friendly blog, I explain what blockchain is, why traditional contracts fail, and how smart contracts bring transparency, decentralization, and security. From Bitcoin to Ethereum, Oracles to Layer 2 scaling — this is the foundation of my journey into Web3 development.",
    coverPhoto:
      "https://ik.imagekit.io/thissidemayur/Smart-Contracts_kdSfnrxfQ.jpg",
    slug: "blog-1-introduction-to-blockchain-and-smart-contracts-beginn-ra04",
    content: `<h1><strong>🌍 Why Do We Even Need Smart Contracts?</strong></h1>...`, // full HTML content here
    tags: [
      "Web3",
      "Blockchain",
      "Smart Contracts",
      "Ethereum",
      "DeFi",
      "NFTs",
      "Beginner Guide",
    ],
    authorName: "Mayur Pal",
    date: new Date(1755594633558),
  },
  {
    title:
      "Why Prisma Doesn't Work in Next.js Middleware & How to Architect Hybrid Edge+Node Apps Correctly",
    description:
      "If you're using Prisma with PostgreSQL (Neon DB), remember:  Prisma requires Node.js runtime. Attempting to use Prisma inside Edge Middleware will lead to runtime errors because Edge environments do not support Node.js core modules.  → Use JWT-based authentication strategies for Middleware (Edge-safe) → Handle DB interactions inside API Routes or Server Actions (Node runtime)",
    coverPhoto: "https://ik.imagekit.io/thissidemayur/backend_sQb8MC9St.png",
    slug: "why-prisma-doesnt-work-in-nextjs-middleware-and-how-to-archi-0v3o",
    content: `<h2>Introduction</h2>...`, // full HTML content here
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
    authorName: "Mayur Pal",
    date: new Date(1754172458555),
  },
  {
    title:
      "What is Tor Browser? A Beginner’s Guide to Online Anonymity and Privacy",
    description:
      "In this blog, we’ll explore what Tor Browser is, how it works, what the “dark web” really means, whether using Tor is legal in India, its pros and cons, and how beginners can safely use it without risking their privacy or security. If you’ve ever been curious about how people stay anonymous online or access .onion sites — this is your complete beginner’s guide.",
    coverPhoto: "https://ik.imagekit.io/thissidemayur/tor_0rAX1tYDy.jpg",
    slug: "what-is-tor-browser-a-beginners-guide-to-online-anonymity-an-tgud",
    content: `<h1><mark data-color="var(--tt-color-highlight-yellow)">📌 Introduction</mark></h1>...`, // full HTML content here
    tags: ["TorBrowser", "CyberSecurity", "DarkWebGuide"],
    authorName: "Mayur Pal",
    date: new Date(1752388604121),
  },
];

interface BlogPageProps {
  params: { blogId: string };
}

export default function BlogPage({ params }: BlogPageProps) {
  const { blogId } = params;

  const post = blogPosts.find((blog) => blog.slug === blogId);

  if (!post) return <p>Blog not found</p>;

  return (
    <div className="w-[80%] flex justify-center items-center">
      <SEO
        title={post.title}
        description={post.description}
        image={post.coverPhoto}
      />

      <Card className="md:px-10 sm:px-7 my-12 mt-20 w-full  ">
        <CardHeader className="flex-col gap-y-3">
          <CardDescription className="text-center">
            {dateFormatter(post.date)}
          </CardDescription>

          <CardTitle className="md:text-4xl text-wrap text-2xl sm:text-3xl font-bold text-center">
            {post.title}
          </CardTitle>

          <div className="flex justify-between items-center my-2">
            <ShareLink
              url={`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blogId}`}
              title={post.title}
            />
            <p className="text-sm text-muted-foreground text-right">
              ~by {post.authorName}
            </p>
          </div>

          <CardDescription className="text-center text-lg ">
            {post.description}
          </CardDescription>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-y-3 my-3">
            {post.tags?.map((tag, indx) => (
              <Badge
                key={indx}
                variant={"outline"}
                className="text-sm px-3 text-muted-foreground py-0.5 rounded-4xl"
              >
                #{tag}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden rounded-xl">
          <Image
            src={post.coverPhoto}
            alt={post.title}
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <CardContent className="mt-8 space-y-6 leading-relaxed text-lg">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </CardContent>

        <BlogEOF />
      </Card>
    </div>
  );
}
