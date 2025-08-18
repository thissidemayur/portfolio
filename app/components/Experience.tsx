// app/experience/page.tsx
"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import TitleAndDescription from "../components/TitleAndDescription";
import { Button } from "@/components/ui/button";

// Internship Type
interface iInternship {
  role: string;
  company: string;
  duration: string;
  description: string;
  imageUrl: string;
  proofUrl?: string; // pdf or image preview
}

// Training Type
interface iTraining {
  title: string;
  provider: string;
  duration: string;
  description: string;
  imageUrl: string;
  proofUrl?: string;
}

const Internships: iInternship[] = [
  {
    role: "Software Developer Intern",
    company: "My Future Internship Company", // keep placeholder for now
    duration: "Coming Soon",
    description:
      "This section will highlight real-world work experience, roles, and contributions once added. (check below training & Bootcamp section)",
    imageUrl: "/expiernce/swInternshup.png",
  },
];

const Trainings: iTraining[] = [
  {
    title: "MERN Full Stack Development Training",
    provider: "Gokboru Tech Pvt. Ltd.",
    duration: "June 2, 2025 – July 12, 2025",
    description:
      "Completed an intensive 6-week program covering MongoDB, Express.js, React.js, and Node.js. Built scalable full-stack applications while focusing on architecture and deployment.",
    imageUrl: "/expiernce/mernTraining.png", // you uploaded this
    proofUrl: "/expiernce/mernTraining.png",
  },
];

export default function Experience() {
  return (
    <div className="my-10">
      {/* Header */}
      <TitleAndDescription
        title="Internships & Experience"
        description="Showcasing my professional journey through internships, trainings, and practical experiences."
      />

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* Internships Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Internship</h2>
          <div className="grid gap-12">
            {Internships.map((intern, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 flex flex-col md:flex-row items-center gap-10 hover:shadow-xl transition rounded-2xl">
                  {/* Certificate Image */}
                  <Link
                    href={intern.proofUrl ?? "/"}
                    target="_blank"
                    className="w-full md:w-1/2"
                  >
                    <Image
                      src={intern.imageUrl}
                      alt={intern.role}
                      width={600}
                      height={450}
                      className="rounded-xl object-contain bg-gray-50 w-full shadow-md hover:scale-[1.02] transition"
                    />
                  </Link>

                  {/* Text Details */}
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-semibold">{intern.role}</h3>
                    <p className="text-muted-foreground">{intern.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {intern.duration}
                    </p>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {intern.description}
                    </p>
                    {intern.proofUrl && (
                      <Link
                        href={intern.proofUrl}
                        target="_blank"
                        className="text-blue-600 font-medium hover:underline mt-4 inline-block"
                      >
                        View Certificate →
                      </Link>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Trainings Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Trainings & Bootcamps</h2>
          <div className="grid gap-12">
            {Trainings.map((train, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 flex flex-col md:flex-row items-center gap-10 hover:shadow-xl transition rounded-2xl">
                  {/* Certificate Image */}
                  <Link
                    href={train.proofUrl as string}
                    target="_blank"
                    className="w-full md:w-1/2"
                  >
                    <Image
                      src={train.imageUrl}
                      alt={train.title}
                      width={600}
                      height={450}
                      className="rounded-xl object-contain bg-gray-50 w-full shadow-md hover:scale-[1.02] transition"
                    />
                  </Link>

                  {/* Text Details */}
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-semibold">{train.title}</h3>
                    <p className="text-muted-foreground">{train.provider}</p>
                    <p className="text-sm text-muted-foreground">
                      {train.duration}
                    </p>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {train.description}
                    </p>
                    {train.proofUrl && (
                      <Link
                        href={train.proofUrl}
                        target="_blank"
                        className="text-blue-600 font-medium hover:underline mt-4 inline-block"
                      >
                        View Certificate →
                      </Link>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto text-center py-16">
        <h3 className="text-2xl font-semibold mb-4">
          Let’s build impactful software together
        </h3>
        <p className="text-muted-foreground  mb-6 leading-relaxed">
          I’m continuously gaining hands-on experience through trainings,
          projects, and upcoming internships. Open to opportunities where I can
          apply my skills and grow further.
        </p>
        <Link href="/contact">
          <Button size="lg" className="rounded-full shadow-md">
            Get in Touch
          </Button>
        </Link>
      </div>
    </div>
  );
}
