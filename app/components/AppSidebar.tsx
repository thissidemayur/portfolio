"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import {
  Home,
  Folder,
  BookOpen,
  Heart,
  User,
  Mail,
  Award,
  Settings2,
  Briefcase,
  LucideOctagon,
  MessageSquareText,
  LucideProps,
} from "lucide-react";
import {
  PopoverContent,
  PopoverTrigger,
  Popover,
} from "@/components/ui/popover";
import { FaX } from "react-icons/fa6";

interface iItemProps {
  title: string;
  href: string;
  icon: React.ForwardRefExoticComponent<LucideProps>;
}

const Items: iItemProps[] = [
  { title: "Home", href: "/", icon: Home },
  { title: "Projects", href: "/projects", icon: Folder },
  { title: "Services", href: "/services", icon: Settings2 },
  { title: "Blog", href: "/blog", icon: BookOpen },
  { title: "Hire Me", href: "/hire-mayur", icon: Heart },
  { title: "About Me", href: "/about-mayur", icon: User },
  { title: "Contact", href: "/contact", icon: Mail },
  { title: "Certifications", href: "/certification", icon: Award },
  {
    title: "Internships & Experience",
    href: "/experience",
    icon: Briefcase,
  },
];

export default function AppSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();
  // Detect desktop to show tooltip
  const isDesktop =
    typeof window !== "undefined" ? window.innerWidth >= 768 : true;

  return (
    <Sidebar
      variant="floating"
      collapsible="icon"
      className="transition-all duration-300"
    >
      {/* Header */}
      <SidebarHeader className="gap-0 p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                href="/"
                className="flex items-center gap-x-2 text-lg font-bold"
              >
                <LucideOctagon className="text-primary w-6 h-6" />
                <span>Mayur Pal</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Menu Items */}
      <SidebarContent>
        <SidebarMenu className="mt-2">
          {Items.map((item) => {
            const isActive = pathname === item.href;

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link
                    href={item.href}
                    className={`
                      flex items-center gap-2 px-3 py-2 rounded-lg transition-colors
                      ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-primary/10 hover:text-primary text-gray-700 dark:text-gray-200 dark:hover:text-primary"
                      }
                    `}
                  >
                    {isDesktop ? (
                      <Tooltip>
                        <TooltipTrigger>
                          <item.icon className="w-5 h-5" />
                        </TooltipTrigger>
                        <TooltipContent>{item.title}</TooltipContent>
                      </Tooltip>
                    ) : (
                      <item.icon className="w-5 h-5" />
                    )}
                    <span className="inline">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="p-2 mt-auto">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Popover>
                <PopoverTrigger
                  className="flex gap-x-2 items-center hover:cursor-pointer "
                  asChild
                >
                  <div>
                    <Tooltip>
                      <TooltipTrigger>
                        <MessageSquareText className="w-5 h-5 hover:cursor-pointer" />
                      </TooltipTrigger>
                      <TooltipContent>Message Mayur</TooltipContent>
                      {/* Only show the text if sidebar is expanded */}
                    </Tooltip>
                    {state === "expanded" && (
                      <span className="inline">Message Mayur</span>
                    )}
                  </div>
                </PopoverTrigger>

                <PopoverContent className="inline-block max-w-44">
                  <MessageToMayur />
                </PopoverContent>
              </Popover>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
// message component
function MessageToMayur() {
  const defaultMessage = encodeURIComponent(
    "Hi Mayur, I saw your portfolio and wanted to connect!"
  );
  const contacts = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/thissidemayur/",
      icon: FaLinkedin,
      color: "text-blue-700",
      tooltip: "Click to message Mayur on LinkedIn",
    },
    {
      name: "Email",
      href: `mailto:thissidemayur@gmail.com?subject=Hello%20Mayur&body=${defaultMessage}`,
      icon: AiOutlineMail,
      color: "",
      tooltip: "Click to email Mayur",
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/916283750133?text=${defaultMessage}`,
      icon: FaWhatsapp,
      color: "text-green-500",
      tooltip: "Click to message Mayur on WhatsApp",
    },
    {
      name: "X",
      href: "https://x.com/thissidemayur",
      icon: FaX,
      color: "text-black dark:text-white",
      tooltip: "Click to message Mayur on X",
    },
  ];
  return (
    <div className="flex justify-center items-center gap-4 ">
      {contacts.map((contact) => {
        const Icon = contact.icon;
        return (
          <Tooltip key={contact.name}>
            <TooltipTrigger asChild>
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${contact.color} hover:scale-110 transition-transform`}
              >
                <Icon size={24} />
              </a>
            </TooltipTrigger>
            <TooltipContent>{contact.tooltip}</TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}
