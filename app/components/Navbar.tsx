"use client";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell } from "lucide-react";
import React from "react";

import { useRouter } from "next/navigation";

export default function Navbar() {
  return (
    <div className="flex justify-between px-4 py-2">
      <div className="flex justify-between min-w-20">
        <SidebarTrigger />
        <div>Logo</div>
      </div>

      <div className="flex items-center gap-x-4">
        {/* dark mode */}
        <AnimatedThemeToggler />

        {/* notification */}
        <div className="">
          <Sheet>
            <SheetTrigger className="flex items-center">
              <Bell />
            </SheetTrigger>
            <SheetContent className="gap-y-0 space-y-0 pt-6 px-3">
              <SheetTitle>Notifcations from Mayur</SheetTitle>
              <SheetDescription className="text-xs mt-2">
                All the important Notifications, discount(freelance project),
                acheievements, are here
              </SheetDescription>
              <p className="text-sm">1. Let collabrate</p>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
