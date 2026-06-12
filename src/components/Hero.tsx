import React from "react";
import { FaLocationArrow } from "react-icons/fa";

function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center pt-28 pb-20">
      {/* Kicker label */}
      <p
        style={{
          fontFamily: "'Satoshi', sans-serif",
          fontWeight: 500,
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.3em",
          color: "#838282",
          marginBottom: "2.5rem",
        }}
      >
        More than just a developer
      </p>

      {/* Echo headline */}
      <h1
        className="echo-text"
        style={{
          fontFamily: "'Clash Display', sans-serif",
          fontWeight: 700,
          letterSpacing: "-0.05em",
          lineHeight: 0.9,
          fontSize: "clamp(4rem, 13vw, 11rem)",
          color: "#111111",
        }}
      >
        Building
        <br />
        the Future.
      </h1>

      {/* Name + bio */}
      <div style={{ marginTop: "3rem", maxWidth: "36rem" }}>
        <p
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            color: "#111111",
            marginBottom: "0.5rem",
          }}
        >
          Hi, I&apos;m{" "}
          <span
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontWeight: 700,
              letterSpacing: "-0.05em",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            }}
          >
            Aryan
          </span>
        </p>
        <p
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontWeight: 500,
            color: "#838282",
            fontSize: "1rem",
          }}
        >
          A full-stack developer based in India.
        </p>
      </div>

      {/* CTAs */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          marginTop: "3rem",
        }}
      >
        <a href="#about" className="swiss-btn">
          My Work
          <FaLocationArrow style={{ fontSize: "0.75rem" }} />
        </a>
        <a
          href="https://drive.google.com/file/d/1qWwMwiZvji-brkFQ_Q0QsAi32PxtDmBb/view?usp=drive_link"
          className="swiss-btn swiss-btn--outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
          <FaLocationArrow style={{ fontSize: "0.75rem" }} />
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: 0,
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <div
          style={{
            width: "2rem",
            height: "1px",
            backgroundColor: "#b6b5b5",
          }}
        />
        <span
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: "0.65rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#b6b5b5",
          }}
        >
          Scroll
        </span>
      </div>
    </div>
  );
}

export default Hero;
