import React from "react";

const Clients = () => {
  return (
    <div
      id="clients"
      style={{
        borderTop: "1px solid #b6b5b5",
        borderBottom: "1px solid #b6b5b5",
        padding: "5rem 0",
      }}
    >
      <div style={{ maxWidth: "56rem", margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: "0.7rem",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            color: "#838282",
            marginBottom: "2rem",
          }}
        >
          A note
        </p>
        <blockquote
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontWeight: 700,
            letterSpacing: "-0.05em",
            lineHeight: 0.95,
            fontSize: "clamp(2rem, 5vw, 4rem)",
            color: "#111111",
            margin: 0,
          }}
        >
          You know the business.
          <br />
          <span style={{ color: "#838282" }}>I know the chemistry.</span>
        </blockquote>
      </div>
    </div>
  );
};

export default Clients;
