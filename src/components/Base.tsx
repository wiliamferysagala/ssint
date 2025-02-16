import { cn } from "@/lib/util";
import { ReactNode } from "react";
import { motion, useScroll, useSpring } from "motion/react";

const Base = ({ children }: { children: ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  console.log(scrollYProgress);
  console.log(scaleX);

  const classVal = [
    "min-h-[150vh] w-full",
    "bg-[#0088ff]",
    "text-white font-bold text-2xl",
    "relative",
  ];

  return (
    <motion.div className={cn(classVal)}>
      <motion.div
        style={{ scaleX }}
        className="w-full bg-red-500 fixed top-0 h-1 left-0"
      />
      <main>{children}</main>
    </motion.div>
  );
};

export default Base;
