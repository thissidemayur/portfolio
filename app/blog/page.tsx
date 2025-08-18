import React from "react";
import BlogCard from "../components/BlogCard";
import Head from "next/head";
import BlogSearch from "../components/BlogSearch";
import TitleAndDescription from "../components/TitleAndDescription";
import SEO from "../components/SEO";
//TODO:  SYNC from my blog application (contentbanao)

// Next.js configuration export, not a variable . for ISR (Incremental Static Regeneration).
export const revalidate = 60 * 60;
export async function getData() {
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
      <Head>
        <SEO
          title=" Blogs & Tutorials by Mayur Pal | Mayur | thissidemayur – Web3, Full
          Stack & DevOps Freelancer"
          description="Read expert articles and tutorials by Mayur Pal (thissidemayur) on Web3, Full Stack Development, Next.js, React, DevOps, and SaaS. Follow my journey as a freelancer building high-performance, scalable apps."
          url="https://www.thissidemayur.me/blog"
        />
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
          {blogs?.map((blog: iBlogCard) => (
            <>
              {/* <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Blog",
                    name: "Mayur Pal's Blog",
                    url: "https://www.thissidemayur.me/blog",
                    author: { "@type": "Person", name: "Mayur Pal" },
                    blogPost: blogs.map((blog: iBlogCard) => ({
                      "@type": "BlogPosting",
                      headline: blog.title,
                      url: `https://www.thissidemayur.me/blog/${blog.slug}`,
                      datePublished: blog.createdAt,
                      author: { "@type": "Person", name: blog.userName },
                      description: blog.summary,
                    })),
                  }),
                }}
              />

              <BlogCard
                key={blog.slug}
                coverPhoto={blog.media[0].url ?? ""}
                date={blog.createdAt}
                authorName={blog.userName}
                title={blog.title}
                description={blog.summary}
                tags={blog.tags}
                slug="bhawanai-putra"
              /> */}

              <h1>Sorry,We are working on it</h1>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

interface iBlogCard {
  title: string;
  content: string;
  userName: string; // will reference a User _id
  summary: string;
  media: {
    type: string;
    url: string;
  }[];
  slug: string;
  tags: string[];
  createdAt: Date;
}
