import BlogEOF from "@/app/components/BlogEOF";
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
import Head from "next/head";
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

export default async function BlogPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  // const post: iBlogPost = {}; //TODO->db search

  return (
    <>
      {/* <Head>
        <title>{post.title}</title>
        <meta
          name="description"
          content={`${post.description}  by: Mayur Pal | Mayur | thissidemayur`}
        />

        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post.coverPhoto} />
        <meta
          property="og:url"
          content={`${process.env.BASE_URL}/blog/${post.slug}`}
        />

        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={post.coverPhoto} />
      </Head> */}

      {/* Your blog content */}
      {/* <Card className="md:px-10 sm:px-7 my:12">
        <CardHeader className="flex-col gap-y-3">
          <CardDescription className="text-center">
            {dateFormatter(post.date)}
          </CardDescription>
          <CardTitle className="md:text-4xl text-wrap text-2xl sm:text-3xl font-blod text-center">
            {post.title}
          </CardTitle>
          <div className="flex justify-between items-center my-2">
            <ShareLink
              url={`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blogId}`}
              title="Lorem30"
            />
            <p className="text-sm text-muted-foreground text-right">
              ~by {post.authorName}
            </p>
          </div>
          <CardDescription className="text-center text-lg ">
            {post.description}
          </CardDescription>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-y-3 my-3 ">
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
            alt={"blogImg"}
            fill
            className="object-cover object-center"
            priority // loads faster for first view
          />
        </div>
        <CardContent className="mt-8 space-y-6  leading-relaxed text-lg">
          {post.content}
        </CardContent>
        <BlogEOF />
      </Card> */}

      <h1>Sorry we are working on it!</h1>
    </>
  );
}
