"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-px mx-auto",
        className
      )}
      style={{ backgroundColor: "#b6b5b5" }}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["Typescript", "NodeJS", "ReactJS"];
  const rightLists = ["Native", "NextJS", "MongoDB"];

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("aaryan.kumar3212@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden group/bento transition-colors duration-300 flex flex-col",
        className
      )}
      style={{ backgroundColor: "#ebebeb" }}
    >
      <div className={`${id === 6 ? "flex justify-center" : ""} h-full`}>
        {/* Background image — very faint texture */}
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt=""
              className={cn(imgClassName, "object-cover object-center")}
              style={{ opacity: 0.06 }}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 ? "w-full" : ""}`}
          style={id === 5 ? { opacity: 0.06 } : {}}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt=""
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {/* Content */}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-1 transition-transform duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* Description */}
          {description && (
            <div
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontWeight: 500,
                fontSize: "0.8rem",
                color: "#838282",
                marginBottom: "0.5rem",
                position: "relative",
                zIndex: 10,
              }}
            >
              {description}
            </div>
          )}

          {/* Title */}
          <div
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              fontSize: "clamp(1rem, 2vw, 1.5rem)",
              color: "#111111",
              position: "relative",
              zIndex: 10,
            }}
          >
            {title}
          </div>

          {/* id=2: Timezone flexibility */}
          {id === 2 && (
            <div style={{ marginTop: "auto", paddingTop: "1.5rem" }}>
              <p
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontSize: "0.65rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "#838282",
                  marginBottom: "0.75rem",
                }}
              >
                Time zones covered
              </p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {["UTC−5", "UTC+0", "UTC+5:30", "UTC+8"].map((tz) => (
                  <span
                    key={tz}
                    style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontSize: "0.7rem",
                      border: "1px solid #b6b5b5",
                      padding: "0.25rem 0.5rem",
                      color: "#838282",
                    }}
                  >
                    {tz}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* id=3: Tech stack */}
          {id === 3 && (
            <div
              className="flex gap-1 lg:gap-5 w-fit absolute"
              style={{ right: "-0.75rem" }}
            >
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "0.5rem 0.75rem",
                      fontSize: "0.75rem",
                      textAlign: "center",
                      backgroundColor: "#e0e0e0",
                      border: "1px solid #b6b5b5",
                      color: "#111111",
                      fontFamily: "'Satoshi', sans-serif",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item}
                  </span>
                ))}
                <span
                  style={{
                    padding: "1rem 0.75rem",
                    backgroundColor: "#e0e0e0",
                    border: "1px solid #b6b5b5",
                  }}
                />
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span
                  style={{
                    padding: "1rem 0.75rem",
                    backgroundColor: "#e0e0e0",
                    border: "1px solid #b6b5b5",
                  }}
                />
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "0.5rem 0.75rem",
                      fontSize: "0.75rem",
                      textAlign: "center",
                      backgroundColor: "#e0e0e0",
                      border: "1px solid #b6b5b5",
                      color: "#111111",
                      fontFamily: "'Satoshi', sans-serif",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* id=6: Copy email */}
          {id === 6 && (
            <div style={{ marginTop: "1.25rem" }}>
              <button
                onClick={handleCopy}
                className="swiss-btn"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <IoCopyOutline />
                {copied ? "Email Copied!" : "Copy my email address"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
