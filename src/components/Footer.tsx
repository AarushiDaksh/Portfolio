"use client";

import { useState } from "react";
import { FaLocationArrow, FaCheck } from "react-icons/fa6";
import { socialMedia } from "@/data";

const EMAIL = "aaryan.kumar3212@gmail.com";

const Footer = () => {
  const [toastVisible, setToastVisible] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2500);
  };

  return (
    <footer
      className="w-full pt-20 pb-10"
      id="contact"
      style={{ borderTop: "1px solid #b6b5b5", position: "relative" }}
    >
      {/* Toast popup */}
      <div
        style={{
          position: "fixed",
          bottom: "2rem",
          left: "50%",
          transform: toastVisible
            ? "translateX(-50%) translateY(0)"
            : "translateX(-50%) translateY(1rem)",
          opacity: toastVisible ? 1 : 0,
          transition: "opacity 0.25s ease, transform 0.25s ease",
          pointerEvents: "none",
          zIndex: 9999,
          backgroundColor: "#111111",
          color: "#f2f2f2",
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          padding: "0.75rem 1.5rem",
          fontFamily: "'Satoshi', sans-serif",
          fontSize: "0.8rem",
          letterSpacing: "0.05em",
          whiteSpace: "nowrap",
        }}
      >
        <FaCheck style={{ fontSize: "0.7rem" }} />
        {EMAIL} copied to clipboard
      </div>

      {/* CTA block */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <p
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: "0.7rem",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            color: "#838282",
            marginBottom: "1.5rem",
          }}
        >
          Get in touch
        </p>

        <h1
          className="echo-text"
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontWeight: 700,
            letterSpacing: "-0.05em",
            lineHeight: 0.9,
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            color: "#111111",
            maxWidth: "12ch",
            marginBottom: "1.25rem",
          }}
        >
          Am I the ideal candidate?
        </h1>

        <p
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: "0.9rem",
            color: "#838282",
            marginBottom: "2.5rem",
            maxWidth: "36rem",
            lineHeight: 1.65,
          }}
        >
          Reach out to me today and let&apos;s discuss how much compensation I am
          looking for!
        </p>

        <button onClick={handleCopyEmail} className="swiss-btn">
          Let&apos;s get in touch
          <FaLocationArrow style={{ fontSize: "0.75rem" }} />
        </button>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "5rem",
          paddingTop: "2rem",
          borderTop: "1px solid #b6b5b5",
          gap: "1.5rem",
        }}
      >
        <p
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: "0.75rem",
            color: "#838282",
          }}
        >
          Copyright © 2025 Aryan Kumar
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="swiss-social-link"
            >
              <img
                src={info.img}
                alt="social"
                width={16}
                height={16}
                style={{ filter: "invert(1)", objectFit: "contain" }}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
