// import React from "react";
// import SectionTitle from "../components/SectionTitle.jsx";
// import AnimatedSection from "../components/AnimatedSection.jsx";

// function AIPage() {
//   return (
//     <>
//       <SectionTitle
//         eyebrow="AI · Prompting · Automation"
//         title="AI Prompting, Video Creation & API Integrations"
//         subtitle="I design prompts, workflows, and integrations that turn AI models into usable products."
//       />

//       <AnimatedSection>
//         <h2 className="text-lg font-semibold mb-3">Prompt Engineering</h2>
//         <p className="text-sm text-white/70 mb-3">
//           Showcase examples of prompts you&apos;ve used for storytelling,
//           product copy, code generation, or research workflows. You can use
//           before/after style: the input vs the AI-powered output.
//         </p>
//       </AnimatedSection>

//       <AnimatedSection delay={0.1}>
//         <h2 className="text-lg font-semibold mb-3">AI Video Creation</h2>
//         <p className="text-sm text-white/70 mb-3">
//           Talk about how you create video content with AI – e.g., storyboarding
//           with prompts, image generation pipelines, voiceovers, and editing
//           workflows.
//         </p>
//       </AnimatedSection>

//       <AnimatedSection delay={0.2}>
//         <h2 className="text-lg font-semibold mb-3">API Integrations</h2>
//         <ul className="list-disc list-inside text-sm text-white/70 space-y-1">
//           <li>ChatGPT / OpenAI API integration in apps.</li>
//           <li>Automated workflows that call multiple APIs together.</li>
//           <li>React / React Native frontends calling AI backends.</li>
//         </ul>
//       </AnimatedSection>
//     </>
//   );
// }

// export default AIPage;

import React from "react";
import SectionTitle from "../components/SectionTitle.jsx";
import AnimatedSection from "../components/AnimatedSection.jsx";

function AIPage() {
  return (
    <>
      <SectionTitle
        eyebrow="AI · Prompting · Automation"
        title="AI Prompting, Video Creation & API Integrations"
        subtitle="I build AI-driven workflows, prompts, and integrations that power real applications across web, mobile, and creative pipelines."
      />

      {/* ------------------------------------- */}
      {/* PROMPT ENGINEERING */}
      {/* ------------------------------------- */}
      <AnimatedSection>
        <h2 className="text-lg font-semibold mb-3">Prompt Engineering</h2>

        <p className="text-sm text-white/70 mb-3">
          I specialize in writing structured, multi-turn and system-level prompts for 
          ChatGPT, Claude, Gemini and Grok. My work focuses on workflow prompting, 
          long-form content generation, academic writing assistance, and building 
          prompts for software engineering use cases such as code generation, 
          architecture planning, and API communication.
        </p>

        <ul className="list-disc list-inside text-sm text-white/70 space-y-1">
          <li>Session-aware prompting for consistent long-flow outputs</li>
          <li>Instruction and system prompts for academic & technical writing</li>
          <li>Software development prompting — architecture, DB schema, API design</li>
          <li>Role-based + agent-style prompting for workflow automation</li>
          <li>Prompt chaining for multi-step tasks and controlled generation</li>
        </ul>
      </AnimatedSection>


      {/* ------------------------------------- */}
      {/* AI VIDEO CREATION */}
      {/* ------------------------------------- */}
      <AnimatedSection delay={0.1}>
        <h2 className="text-lg font-semibold mb-3">AI Video & Image Generation</h2>

        <p className="text-sm text-white/70 mb-3">
          I create high-quality AI-generated visuals using tools such as Leonardo AI, 
          Midjourney, Pika Labs, OpenArt, and Stable Diffusion. My work includes 
          character-consistent story sequences, cinematic stills, music-video style 
          animations, and stylized creative content.
        </p>

        <ul className="list-disc list-inside text-sm text-white/70 space-y-1">
          <li>Video generation using Pika Labs and Leonardo AI</li>
          <li>Midjourney + Stable Diffusion for creative stills and concept art</li>
          <li>Character consistency using ControlNet & SDXL pipelines</li>
          <li>Series generation for storytelling and episodic content</li>
          <li>Style-matching and visual identity creation for brands & creators</li>
        </ul>
      </AnimatedSection>


      {/* ------------------------------------- */}
      {/* API INTEGRATION */}
      {/* ------------------------------------- */}
      <AnimatedSection delay={0.2}>
        <h2 className="text-lg font-semibold mb-3">AI API Integrations</h2>

        <p className="text-sm text-white/70 mb-3">
          I integrate AI models directly into production applications. This includes 
          building AI-powered features in web apps, mobile apps (React Native), and backend
          workflows that automate or accelerate user tasks.
        </p>

        <ul className="list-disc list-inside text-sm text-white/70 space-y-1">
          <li>OpenAI APIs (GPT-4, GPT-4o, embeddings, function calling)</li>
          <li>Claude, Gemini, and Grok API usage for specialized tasks</li>
          <li>AI-powered user workflows in web and mobile apps</li>
          <li>Server-side automation with Node.js & cloud functions</li>
          <li>Building multi-model pipelines (image → prompt → video → script)</li>
        </ul>
      </AnimatedSection>
    </>
  );
}

export default AIPage;