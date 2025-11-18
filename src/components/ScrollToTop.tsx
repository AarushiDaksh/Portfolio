"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="
            fixed bottom-8 right-8 z-9999
            bg-white/10 backdrop-blur-xl 
            p-3 rounded-full 
            border border-white/20 
            hover:bg-white/20 
            shadow-lg 
            text-white 
            cursor-pointer
          "
        >
          <FaArrowUp className="text-xl" />
        </motion.button>
      )}
    </>
  );
}
