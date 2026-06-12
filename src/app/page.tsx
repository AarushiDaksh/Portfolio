import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import Clients from "@/components/Clients";
import { navItems } from "@/data";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SkillsMarquee from "@/components/Skills";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"
      style={{ backgroundColor: "#f2f2f2" }}
    >
      {/* Swiss Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-16 py-5"
        style={{
          backgroundColor: "rgba(242,242,242,0.92)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid #b6b5b5",
        }}
      >
        <span
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontWeight: 700,
            letterSpacing: "-0.05em",
            lineHeight: 1,
            fontSize: "1.5rem",
            color: "#111111",
          }}
        >
          AK
        </span>
        <div className="flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="swiss-nav-link"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <RecentProject />
        <SkillsMarquee />
        <Clients />
        <Approach />
        <Footer />
        <ScrollToTop />
      </div>
    </main>
  );
}
