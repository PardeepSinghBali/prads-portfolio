// import React from "react";
// import SectionTitle from "../components/SectionTitle.jsx";
// import AnimatedSection from "../components/AnimatedSection.jsx";

// function Films() {
//   return (
//     <>
//       <SectionTitle
//         eyebrow="Filmmaking · Video Editing"
//         title="Filmmaking, Music Videos & Visual Storytelling"
//         subtitle="A curated selection of music videos, short films, and content I’ve directed, shot, or edited."
//       />

//       <AnimatedSection>
//         <p className="text-sm text-white/70 mb-4">
//           Embed your showreel or featured videos here using YouTube/Vimeo
//           embeds. Each project can have a short description with your role,
//           tools used, and creative goals.
//         </p>

//         <div className="grid md:grid-cols-2 gap-4 md:gap-6">
//           {/* Placeholder project card */}
//           <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
//             <div className="aspect-video rounded-xl bg-white/5 mb-3 flex items-center justify-center text-xs text-white/40">
//               Video embed placeholder
//             </div>
//             <h3 className="text-sm font-semibold mb-1">Music Video Title</h3>
//             <p className="text-xs text-white/70 mb-1">
//               Role: Director · Editor · Color grade
//             </p>
//             <p className="text-xs text-white/60">
//               Short logline of the piece and what you were experimenting with
//               visually or narratively.
//             </p>
//           </div>
//         </div>
//       </AnimatedSection>
//     </>
//   );
// }

// export default Films;
import React from "react";
import SectionTitle from "../components/SectionTitle.jsx";
import AnimatedSection from "../components/AnimatedSection.jsx";

function Films() {
  return (
    <>
      <SectionTitle
        eyebrow="Filmmaking · Cinematography · Editing"
        title="Filmmaking, Music Videos & Visual Storytelling"
        subtitle="I create cinematic visuals across music videos, documentaries, vlogs, and narrative storytelling. My work blends cinematography, editing, color grading, and storytelling craft."
      />

      {/* ------------------------------------- */}
      {/* SHOWREEL / YOUTUBE CHANNEL */}
      {/* ------------------------------------- */}
      <AnimatedSection>
        <h2 className="text-lg font-semibold mb-3">Featured Showreel</h2>

        <p className="text-sm text-white/70 mb-4">
          Below is a recent achievement of work from my YouTube channel - achieveing 100K+ subscribers on Youtube{" "}
          <a 
            href="https://www.youtube.com/@TravellingMonk"
            target="_blank"
            rel="noreferrer"
            className="underline text-accentGold"
          >
            @TravellingMonk
          </a>.  
          I film and edit cinematic travel content, short documentaries, vlogs, 
          and creative storytelling pieces.
        </p>

        <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40 mb-8">
          <iframe
            className="w-full aspect-video"
            src="https://youtu.be/Sl3fIXH0qpQ?si=7SUe-S0CQN8SL9sp"
            title="YouTube Showreel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </AnimatedSection>


      {/* ------------------------------------- */}
      {/* PROFESSIONAL FILM WORK */}
      {/* ------------------------------------- */}
      <AnimatedSection delay={0.1}>
        <h2 className="text-lg font-semibold mb-3">Professional Film Work</h2>

        <p className="text-sm text-white/70 mb-4">
          Outside of YouTube, I work professionally in filmmaking — directing, 
          shooting, and editing music videos, short films, and web series. 
          My work spans pre-production to post-production including scriptwriting, 
          screenplay development, cinematography, and color grading.
        </p>

        <ul className="list-disc list-inside text-sm text-white/70 space-y-1">
          <li>Music Video Cinematography & Direction</li>
          <li>Short film cinematography and narrative development</li>
          <li>Vlogs, travel films & documentary-style storytelling</li>
          <li>Scriptwriting & Screenplay (short films & web series)</li>
          <li>Full production: shooting, editing, color grading</li>
        </ul>
      </AnimatedSection>


      {/* ------------------------------------- */}
      {/* FILM FESTIVAL & PORTFOLIO */}
      {/* ------------------------------------- */}
      <AnimatedSection delay={0.2}>
        <h2 className="text-lg font-semibold mb-3">Film Festival Profile</h2>

        <p className="text-sm text-white/70 mb-4">
          Some of my narrative and documentary work has been showcased on 
          platforms like FilmFreeway. View my filmmaking portfolio, festival 
          submissions, and project history here:
        </p>

        <a
          href="https://filmfreeway.com/PardeepSingh"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition-all"
        >
          View FilmFreeway Profile →
        </a>
      </AnimatedSection>


      {/* ------------------------------------- */}
      {/* FUTURE PROJECTS */}
      {/* ------------------------------------- */}
      <AnimatedSection delay={0.3}>
        <h2 className="text-lg font-semibold mb-3">Current & Upcoming Projects</h2>

        <p className="text-sm text-white/70 mb-4">
          I continue to explore storytelling across formats — from cinematic 
          travel films to AI-assisted filmmaking and music video direction. 
          My upcoming work focuses on blending traditional cinematography with 
          AI-powered pre-visualization, storyboarding, and concept design.
        </p>
      </AnimatedSection>
    </>
  );
}

export default Films;