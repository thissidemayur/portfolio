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

export default function Navbar() {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[90%] lg:w-[80%] z-50 backdrop-blur-sm bg-white/80 dark:bg-neutral-900/80 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 transition-all">
      <div className="flex justify-between items-center px-4 py-2">
        {/* Sidebar Trigger */}
        <SidebarTrigger />

        {/* Right Side */}
        <div className="flex items-center gap-x-4">
          {/* Dark Mode */}
          <AnimatedThemeToggler />

          {/* Notifications */}
          <Sheet>
            <SheetTrigger className="flex items-center">
              <Bell className="text-gray-700 dark:text-gray-200" />
            </SheetTrigger>
            <SheetContent className="gap-y-0 space-y-0 pt-6 px-3">
              <SheetTitle>Notifications from Mayur</SheetTitle>
              <SheetDescription className="text-xs mt-2">
                All the important notifications, discounts (freelance projects),
                achievements, are here.
              </SheetDescription>
              <p className="text-sm mt-2">1. Let's collaborate</p>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
