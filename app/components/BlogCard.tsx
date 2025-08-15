import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { dateFormatter } from "@/lib/intelAPI";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ShareLink } from "./ShareLink";

export default function BlogCard({
  coverPhoto,
  title,
  authorName,
  date,
  description,
  tags,
  slug,
}: {
  title: string;
  description: string;
  coverPhoto: string;
  authorName: string;
  tags?: string[];
  date: Date;
  slug: string;
}) {
  return (
    <Card className="py-0 gap-y-0 rounded-none rounded-t-xl ">
      <Link
        href={`${process.env.NEXT_PUBLIC_BASE_URL}/${slug}`}
        className=" relative h-56 w-full pointer-coarse rounded-t-xl "
      >
        <Image
          src={coverPhoto}
          alt={title?.slice(0, 6)}
          className="object-cover rounded-t-xl border-none hover:Scale-105 transition-all "
          fill
        />
      </Link>
      <div className="flex justify-between items-center text-muted-foreground text-[19px]  px-3 py-2 ">
        <p>{dateFormatter(date)} </p>
        <p>{authorName}</p>
      </div>

      <div className="flex-col gap-y-4 px-3  leading-tight  ">
        <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/${slug}`}>
          <h2 className=" text-xl font-medium hover:underline hover:decoration-1 hover:decoration-muted-foreground transition-all py-2 text-start">
            {title}{" "}
          </h2>
        </Link>
        <p className="text-sm text-muted-foreground  text-start ">
          {description}{" "}
        </p>

        <div className="flex gap-x-3 gap-y-2 p-3 flex-wrap items-center justify-start">
          {tags?.map((tag, indx) => (
            <Badge variant={"outline"} key={indx}>
              {tag}
            </Badge>
          ))}
        </div>

        <div className=" flex justify-between items-center mb-4 ">
          <Link
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/${slug}`}
            className="flex gap-x-2 hover:underline"
          >
            Read more
            <ArrowRight />
          </Link>

          <ShareLink
            title={title}
            url={`${process.env.NEXT_PUBLIC_BASE_URL}/${slug}`}
          />
        </div>
      </div>
    </Card>
  );
}
