"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const TopNav = ({
  navItems,
  className,
  logo,
}: {
  navItems: { name: string; link: string }[];
  className?: string;
  logo?: React.ReactNode;
}) => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed top-0 left-0 w-full z-[5000] px-6 py-3 flex items-center justify-between",
        "backdrop-blur-lg bg-black/40 border-b border-white/10 shadow-md",
        className
      )}
    >
      {/* ---- LOGO ---- */}
      <div className="flex items-center space-x-2">
        {logo ? (
          logo
        ) : (
          <span className="text-white text-xl font-bold tracking-wide">
            LOGO
          </span>
        )}
      </div>

      {/* ---- NAV LINKS ---- */}
      <div className="flex items-center space-x-6">
        {navItems.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className="text-sm text-white/90 hover:text-white transition font-medium"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};
