"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) setVisible(true);
        else setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-5000 top-10 inset-x-0 mx-auto px-6 py-3 rounded-lg border border-white/10 shadow-lg items-center justify-center space-x-2",
          className
        )}
        style={{
          backdropFilter: "blur(10px) saturate(180%)",
          
          backgroundColor: "rgba(255, 255, 255, 0)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.15)", // optional light border
        }}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 flex items-center space-x-1 text-white dark:hover:text-neutral-300 transition duration-300",
              "px-3 py-1.5 rounded-full",
              "hover:bg-white hover:bg-opacity-20 hover:scale-[1.1] hover:-translate-y-0.5",
              "hover:shadow-lg hover:shadow-white/20"
            )}
          >
            {navItem.icon && (
              <span className="block sm:hidden">{navItem.icon}</span>
            )}
            <span className="text-sm cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
