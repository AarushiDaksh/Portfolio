"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects" style={{ borderTop: "1px solid #b6b5b5" }}>
      {/* Section heading */}
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
          Selected work
        </p>
        <h1
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontWeight: 700,
            letterSpacing: "-0.05em",
            lineHeight: 0.9,
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            color: "#111111",
          }}
        >
          Recent
          <br />
          Projects
        </h1>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map(({ id, title, link, img, des, iconLists }, index) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            style={{
              backgroundColor: "#ebebeb",
              border: "1px solid #b6b5b5",
              textDecoration: "none",
            }}
          >
            {/* Image */}
            <div className="relative overflow-hidden" style={{ aspectRatio: "16/7" }}>
              <motion.img
                src={img}
                alt={title}
                className="w-full h-full object-cover"
                initial={{ clipPath: "inset(0 100% 0 0)", filter: "grayscale(1)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)", filter: "grayscale(1)" }}
                whileHover={{ filter: "grayscale(0)", scale: 1.05 }}
                transition={{
                  clipPath: { duration: 0.7, ease: [0.77, 0, 0.175, 1], delay: index * 0.08 },
                  filter: { duration: 0.4, ease: "easeOut" },
                  scale: { duration: 0.7, ease: [0.77, 0, 0.175, 1] },
                }}
                viewport={{ once: true, margin: "-60px" }}
                style={{ transformOrigin: "center" }}
              />
            </div>

            {/* Card metadata */}
            <div
              style={{
                padding: "1rem 1.25rem",
                borderTop: "1px solid #b6b5b5",
              }}
            >
              {/* Tech icon row */}
              <div style={{ display: "flex", gap: "0.35rem", marginBottom: "0.625rem" }}>
                {iconLists.map((icon, i) => (
                  <div
                    key={i}
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid #b6b5b5",
                      backgroundColor: "#f2f2f2",
                    }}
                  >
                    <img
                      src={icon}
                      alt=""
                      style={{ width: "0.875rem", height: "0.875rem", objectFit: "contain", filter: "grayscale(1)" }}
                    />
                  </div>
                ))}
              </div>

              <h2
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.05,
                  fontSize: "1.1rem",
                  color: "#111111",
                  marginBottom: "0.375rem",
                }}
              >
                {title}
              </h2>
              <p
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontSize: "0.8rem",
                  lineHeight: 1.6,
                  color: "#838282",
                  marginBottom: "0.75rem",
                }}
              >
                {des}
              </p>

              <span
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontSize: "0.65rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "#111111",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  transition: "opacity 0.2s ease",
                }}
                className="group-hover:opacity-50"
              >
                View Project <FaLocationArrow style={{ fontSize: "0.55rem" }} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
