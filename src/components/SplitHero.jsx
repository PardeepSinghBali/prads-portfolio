import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function SplitHero() {
  const [hoverSide, setHoverSide] = useState(null); // 'tech' | 'creative' | null

  const techActive = hoverSide === "tech";
  const creativeActive = hoverSide === "creative";

  return (
    <section className="mt-4 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 min-h-[320px]">
        {/* Left: Tech / AI */}
        <motion.div
          className={`relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-techBg via-slate-900 to-black cursor-pointer group`}
          onMouseEnter={() => setHoverSide("tech")}
          onMouseLeave={() => setHoverSide(null)}
          animate={{
            flex: techActive ? 1.2 : creativeActive ? 0.8 : 1,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <div className="absolute inset-0">
            <div className="absolute -top-20 -left-10 h-64 w-64 bg-primaryBlue/20 blur-3xl" />
            <div className="absolute -bottom-10 right-0 h-64 w-64 bg-blue-500/10 blur-3xl" />
          </div>

          <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primaryBlue mb-3">
                Software · AI · Systems
              </p>
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-2">
                Software Engineer & AI Integrator
              </h2>
              <p className="text-sm md:text-base text-white/70 max-w-md">
                I design and build modern web & mobile experiences, integrate
                AI APIs, and automate workflows—from prototypes to production.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                Software Engineering
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                Agile - sprint - scrum
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                Database - design & development
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                React · React Native
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                AI API Integration
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                Web design & Development
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                Azure Devops
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                Prompt Engineering
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
               ...and more
              </span>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <Link
                to="/software"
                className="text-xs md:text-sm px-4 py-2 rounded-full bg-white text-black font-medium shadow hover:shadow-lg transition-all duration-200"
              >
                View Software CV
              </Link>

              <Link
                to="/ai"
                className="text-xs md:text-sm text-primaryBlue hover:text-primaryBlue/80 underline-offset-4 hover:underline"
              >
                Explore AI & Automation →
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right: Creative / Film / Marketing */}
        <motion.div
          className={`relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-creativeBg via-zinc-900 to-black cursor-pointer group`}
          onMouseEnter={() => setHoverSide("creative")}
          onMouseLeave={() => setHoverSide(null)}
          animate={{
            flex: creativeActive ? 1.2 : techActive ? 0.8 : 1,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          {/* Fake grain & vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
          <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(circle_at_top,_#ffffff10,_transparent_55%)]" />

          <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-accentGold mb-3">
                Filmmaking · Editing · Marketing
              </p>
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-2">
                Filmmaker & Digital Storyteller
              </h2>
              <p className="text-sm md:text-base text-white/70 max-w-md">
                I craft music videos, short films, and digital campaigns that
                blend cinematic visuals with strategy and data-driven marketing.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-2xl bg-black/40 border border-white/10 p-3">
                <p className="font-serifDisplay text-sm mb-1">Filmmaking</p>
                <p className="text-white/70">
                  Music videos, narrative shorts, and branded content.
                </p>
              </div>
              <div className="rounded-2xl bg-black/40 border border-white/10 p-3">
                <p className="font-serifDisplay text-sm mb-1">
                  Digital Marketing
                </p>
                <p className="text-white/70">
                  Content strategy, social campaigns, and growth-focused funnels.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <Link
                to="/films"
                className="text-xs md:text-sm px-4 py-2 rounded-full bg-white/5 border border-white/30 font-medium hover:bg-white/10 transition-all duration-200"
              >
                Watch Showreel
              </Link>

              <Link
                to="/marketing"
                className="text-xs md:text-sm text-accentGold hover:text-accentGold/80 underline-offset-4 hover:underline"
              >
                See Digital Marketing Work →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SplitHero;