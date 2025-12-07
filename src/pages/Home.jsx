import React from "react";
import { Link } from "react-router-dom";
import SplitHero from "../components/SplitHero.jsx";
import AnimatedSection from "../components/AnimatedSection.jsx";

function Home() {
  return (
    <>
      <SplitHero />

      <AnimatedSection delay={0.1}>
        <div className="grid md:grid-cols-4 gap-4 md:gap-6">
          <HomeCard
            title="Software Engineering"
            to="/software"
            description="Clean, modern web & mobile apps with a focus on UX, performance, and scalability."
          />
          <HomeCard
            title="AI & Automation"
            to="/ai"
            description="Prompt engineering, AI-driven storytelling, and API integrations that ship."
          />
          <HomeCard
            title="Filmmaking & Editing"
            to="/films"
            description="Music videos, short films, and cinematic visuals that tell powerful stories."
          />
          <HomeCard
            title="Digital Marketing"
            to="/marketing"
            description="End-to-end content and campaigns, from idea to execution and analytics."
          />
        </div>
      </AnimatedSection>
    </>
  );
}

function HomeCard({ title, description, to }) {
  return (
    <Link
      to={to}
      className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-200 p-4 flex flex-col justify-between"
    >
      <div>
        <h3 className="text-sm font-semibold mb-1">{title}</h3>
        <p className="text-xs text-white/70">{description}</p>
      </div>
      <span className="mt-4 text-[11px] text-primaryBlue group-hover:translate-x-1 transition-transform">
        View section →
      </span>
    </Link>
  );
}

export default Home;