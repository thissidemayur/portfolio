"use client";

import { Button } from "@/components/ui/button";

import { ClipboardCheck, Share2Icon } from "lucide-react";
import { useState } from "react";

export function ShareLink({
  url,
  title,
  text = "Check out this blog post!",
}: {
  url: string;
  title: string;
  text?: string;
}) {
  const [shared, setShared] = useState(false);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text,
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
      }

      setShared(true);

      setTimeout(() => setShared(false), 3000);
    } catch (err) {
      console.error("Share failed:", err);
    }
  };

  return (
    <Button variant="outline" className="w-20" onClick={handleShare}>
      {shared ? (
        <ClipboardCheck className="text-green-600 dark:text-green-800" />
      ) : (
        <Share2Icon />
      )}
    </Button>
  );
}
