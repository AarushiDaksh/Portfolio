"use client";
import React from "react";
import { motion } from "framer-motion";

const phases = [
  {
    number: "01",
    title: "Planning & Strategy",
    description:
      "We'll collaborate to map out your project's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
  },
  {
    number: "02",
    title: "Development & Progress",
    description:
      "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
  },
];

const Approach = () => {
  return (
    <section
      className="w-full py-20"
      style={{ borderTop: "1px solid #b6b5b5" }}
    >
      {/* Heading */}
      <div style={{ marginBottom: "3.5rem" }}>
        <p
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: "0.7rem",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            color: "#838282",
            marginBottom: "0.75rem",
          }}
        >
          How I work
        </p>
        <h1
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontWeight: 700,
            letterSpacing: "-0.05em",
            lineHeight: 0.9,
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            color: "#111111",
          }}
        >
          My Approach
        </h1>
      </div>

      {/* Phase cards */}
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-px"
        style={{ backgroundColor: "#b6b5b5" }}
      >
        {phases.map((phase, i) => (
          <motion.div
            key={phase.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.77, 0, 0.175, 1],
            }}
            viewport={{ once: true, margin: "-40px" }}
            style={{
              backgroundColor: "#f2f2f2",
              padding: "3rem",
              display: "flex",
              flexDirection: "column",
              cursor: "default",
              transition: "background-color 0.3s ease",
            }}
            whileHover={{ backgroundColor: "#e8e8e8" } as any}
          >
            {/* Phase number */}
            <span
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontWeight: 700,
                letterSpacing: "-0.05em",
                lineHeight: 0.9,
                fontSize: "5rem",
                color: "#111111",
                opacity: 0.12,
                marginBottom: "2rem",
                display: "block",
              }}
            >
              {phase.number}
            </span>

            {/* Title */}
            <h2
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 1.0,
                fontSize: "1.4rem",
                color: "#111111",
                marginBottom: "1rem",
              }}
            >
              {phase.title}
            </h2>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontWeight: 500,
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: "#838282",
              }}
            >
              {phase.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Approach;
