import { BorderBeam } from "@/components/magicui/border-beam";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { FaGithub } from "react-icons/fa6";
const theme = {
  level0: "#ebedf0",
  level1: "#c6e48b",
  level2: "#7bc96f",
  level3: "#239a3b",
  level4: "#196127",
  text: "#000",
};
const labels = {
  months: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  totalCount: "{{count}} contributions in {{year}}",
  legend: { less: "Less", more: "More" },
};
export default function GithubContributionGraph() {
  return (
    <Card className="relative  overflow-hidden w-full flex justify-center items-center mt-10 mb-10 ">
      <div className="text-center">
        <CardTitle className="md:text-2xl font-semibold dark:text-slate-300 text-slate-700 text-2xl justify-center gap-x-2 flex items-center">
          <FaGithub /> GitHub Contributions – {new Date().getFullYear()}
        </CardTitle>
        <CardDescription className=" text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 ">
          A snapshot of my coding activity, projects, open-source work, pull
          requests, and fixes this year.
        </CardDescription>
      </div>
      <GitHubCalendar
        username="thissidemayur"
        blockMargin={4}
        blockSize={14}
        // labels={labels}
        colorScheme="light"
        // theme={theme}
      />
      <BorderBeam
        duration={10}
        size={300}
        className="from-transparent via-[#e6e6e6] to-transparent"
      />
    </Card>
  );
}
<ShimmerButton>Shimmer Button</ShimmerButton>;
