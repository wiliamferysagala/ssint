import { cn } from "@/lib/util";
import React from "react";

export default function Base({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "w-full min-h-screen",
        "flex justify-center items-center",
        "bg-[#0088ff]",
        "text-white font-bold text-2xl"
      )}
    >
      {children}
    </div>
  );
}
