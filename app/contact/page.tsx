import Head from "next/head";
import ContactForm from "../components/ContactForm";
import SEO from "../components/SEO";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Mayur | Full-Stack Developer & SaaS Specialist"
        description="Get in touch with Mayur, a full-stack developer specializing in SaaS applications, backend APIs, and scalable web solutions. Let's build your project together!"
        url="https://www.thissidemayur.me/contact"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              url: "https://www.thissidemayur.me/contact",
              name: "Contact Mayur – Full-Stack Developer & SaaS Specialist",
              description:
                "Get in touch with Mayur, a full-stack developer specializing in SaaS applications, backend APIs, and scalable web solutions.",
              mainEntity: {
                "@type": "Person",
                name: "Mayur Pal",
                email: "thissidemayur@gmail.com",
                url: "https://www.thissidemayur.me",
              },
            }),
          }}
        />
      </Head>

      <main className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-700 dark:text-slate-300">
          Contact Me
        </h1>
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </main>
    </>
  );
}
