import { cn } from "@/lib/util";
import React from "react";

const Base = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "min-h-screen w-full",
        "flex justify-center items-center",
        "bg-[#0088ff]",
        "text-white font-bold text-2xl"
      )}
    >
      {children}
    </div>
  );
};

export default Base;
