// app/sitemap.ts
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const base = "https://thissidemayur.me";
    //   const projects = await getAllProjects(); // [{ slug, updatedAt }]

    return [
        { url: `${base}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
        { url: `${base}/about`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
        { url: `${base}/projects`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        // ...projects.map(p => ({
        //   url: `${base}/projects/${p.slug}`,
        //   lastModified: new Date(p.updatedAt ?? Date.now()),
        //   changeFrequency: "monthly",
        //   priority: 0.9,
        // })),
        { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    ];
}

// use later,
