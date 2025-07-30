"use client";

import React, { useRef } from "react";
import type { IconType } from "react-icons";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SocialLink = {
  href: string;
  Icon: IconType;
  label: string;
};

interface IHeroBlock {
  title: string;
  titleEnd: string;
  SocialContact: SocialLink[];
}

export default function PortfolioHero() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // ---------- Your public handles ----------
  const USER = "thissidemayur";
  const WHATSAPP_E164 = "+916283750133"; // 91 + 6283750133
  const EMAIL = "thissidemayur@gmail.com"; // <-- update this

  // Slide-specific social links
  const socialsFullStack: SocialLink[] = [
    { href: `https://github.com/${USER}`, Icon: FaGithub, label: "GitHub" },
    {
      href: `https://linkedin.com/in/${USER}`,
      Icon: FaLinkedin,
      label: "LinkedIn",
    },
    {
      href: `https://wa.me/${WHATSAPP_E164}`,
      Icon: FaWhatsapp,
      label: "WhatsApp",
    },
  ];

  const socialsDevOps: SocialLink[] = [
    {
      href: `https://linkedin.com/in/${USER}`,
      Icon: FaLinkedin,
      label: "LinkedIn",
    },
    { href: `https://github.com/${USER}`, Icon: FaGithub, label: "GitHub" },
    { href: `https://x.com/${USER}`, Icon: FaXTwitter, label: "X" },
  ];

  const socialsWeb3: SocialLink[] = [
    {
      href: `https://linkedin.com/in/${USER}`,
      Icon: FaLinkedin,
      label: "LinkedIn",
    },
    { href: `https://github.com/${USER}`, Icon: FaGithub, label: "GitHub" },
    { href: `mailto:${EMAIL}`, Icon: MdEmail, label: "Email" },
  ];

  useGSAP(
    () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const container = wrapper.querySelector(
        ".container"
      ) as HTMLElement | null;
      const sections = container
        ? (Array.from(container.querySelectorAll("section")) as HTMLElement[])
        : [];
      if (!container || sections.length <= 1) return;

      // --- horizontal tween (unchanged) ---
      const snapToIndex = (value: number) => {
        const n = sections.length;
        if (n <= 1) return 0;
        const step = 1 / (n - 1);
        const raw = value / step;
        const base = Math.floor(raw);
        const remainder = raw - base;
        const threshold = 0.4;
        const target = Math.max(
          0,
          Math.min(n - 1, remainder > threshold ? base + 1 : base)
        );
        return target * step;
      };

      const scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        autoAlpha: 0.75, // <-- was 1

        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,

          scrub: 1,
          end: () => "+=" + (sections.length - 1) * window.innerWidth,
          snap: {
            snapTo: snapToIndex,
            duration: 0.5,
            ease: "power1.out",
            delay: 0,
            directional: true,
          },
          anticipatePin: 1,
          markers: false,
          invalidateOnRefresh: true,
        },
      });

      // ---- 1) First slide animates on load (same as before) ----
      const firstItems = sections[0]?.querySelectorAll(".childTextElement");
      if (firstItems && firstItems.length) {
        gsap.set(firstItems, { y: 100, autoAlpha: 0 });
        gsap.to(firstItems, {
          y: 0,
          autoAlpha: 0.75, // <-- was 1
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.2,
          overwrite: "auto",
          delay: 0.05,
        });
      }

      // ---- 2) Slides 2+ animate on scroll (robust pattern) ----
      sections.slice(1).forEach((section) => {
        const items = section.querySelectorAll(".childTextElement");
        if (!items || !items.length) return;

        // Set initial hidden state right now
        gsap.set(items, { y: 80, autoAlpha: 0 });

        // Animate TO visible when the section approaches center
        gsap.to(items, {
          y: 0,
          autoAlpha: 0.75, // <-- was 1
          duration: 1.0,
          ease: "expo.out",
          stagger: 0.18,
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            // fire a bit EARLIER than exact center so snaps don't skip it
            start: "left 65%", // was "left center"
            once: true, // run once per slide
            // markers: true,
          },
        });
      });

      const onResize = () => ScrollTrigger.refresh();
      window.addEventListener("orientationchange", onResize, { passive: true });
      window.addEventListener("resize", onResize, { passive: true });

      return () => {
        window.removeEventListener("orientationchange", onResize);
        window.removeEventListener("resize", onResize);
        scrollTween?.scrollTrigger?.kill();
        scrollTween?.kill();
        ScrollTrigger.getAll().forEach((st) => {
          if (st?.vars?.containerAnimation === scrollTween) st.kill();
        });
      };
    },
    { scope: wrapperRef }
  );

  return (
    <div className="wrapper bg-black" ref={wrapperRef}>
      <div className="container">
        {/* SECTION 1 */}
        <HeroBlock
          title="FULL‑STACK"
          titleEnd="DEVELOPER"
          SocialContact={socialsFullStack}
        />

        {/* SECTION 2 */}
        <HeroBlock
          title="DEVOPS"
          titleEnd="ENGINEER"
          SocialContact={socialsDevOps}
        />

        {/* SECTION 3 */}
        <HeroBlock
          title="WEB‑3"
          titleEnd="DEVELOPER"
          SocialContact={socialsWeb3}
        />
      </div>
    </div>
  );
}

const HeroBlock = ({ title, titleEnd, SocialContact }: IHeroBlock) => {
  return (
    <section className="shrink-0 bg-black text-white flex flex-col justify-between px-4 md:px-6">
      <div className="h-[80%] flex items-center">
        <div className="font-bold flex flex-col items-start justify-center gap-2">
          {/* animate this */}
          <h1 className="childTextElement opacity-75 sm:text-4xl h-responsive">
            {title}
          </h1>

          <div className="w-fit flex flex-col">
            {/* animate this */}
            <h1 className="childTextElement opacity-75 sm:text-4xl h-responsive xs:ml-[1rem] ml-[4rem]  md:ml-[8rem]">
              {titleEnd}
            </h1>
            {/* animate this */}
            <h2 className="childTextElement text-sm md:text-base font-normal text-right self-end">
              BASED IN INDIA
            </h2>
          </div>
        </div>
      </div>

      <div className="h-[20%]">
        <footer className="roboto-slab flex flex-col md:flex-row justify-between items-center gap-4 text-center leading-6 h-full md:px-4 heroFooter text-sm md:text-lg py-4">
          <p className="childTextElement">B.TECH CSE @ LPU</p>

          <p className="childTextElement ctaLine hover:scale-105 transition-all duration-300 cursor-pointer">
            AVAILABLE FOR FREELANCE PROJECTS
            <br /> & COLLABORATIONS
          </p>

          <div className="flex space-x-6 text-2xl md:text-3xl">
            {SocialContact?.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <Icon className="opacity-80 childTextElement" />
              </a>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
};
