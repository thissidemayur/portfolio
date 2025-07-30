// app/projects/[slug]/page.tsx
import Script from "next/script";

export default async function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  //   const project = await getProject(params.projectId); // name, summary, repoUrl, ogImage, languages[], dateCreated, liveUrl

  //   const ld = {
  //     "@context": "https://schema.org",
  //     "@type": "SoftwareSourceCode",
  //     name: project.name,
  //     description: project.summary,
  //     author: { "@type": "Person", name: "Mayur Pal", url: "https://thissidemayur.me" },
  //     codeRepository: project.repoUrl,
  //     url: `https://thissidemayur.me/projects/${params.slug}`,
  //     programmingLanguage: project.languages,        // e.g. ["TypeScript","Next.js"]
  //     runtimePlatform: "Node.js",
  //     targetProduct: "Web",
  //     dateCreated: project.dateCreated,               // "2025-05-01"
  //     image: project.ogImage || "https://thissidemayur.me/og.jpg",
  //     isAccessibleForFree: true,
  //   };

  return (
    <main>
      {/* ...your project content... */}
      {/* <Script id="ld-project" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} /> */}
    </main>
  );
}

// uncommit once its done
