import React from "react";
import SectionTitle from "../components/SectionTitle.jsx";
import AnimatedSection from "../components/AnimatedSection.jsx";

function Academics() {
  return (
    <>
      <SectionTitle
        eyebrow="Academics · Qualifications"
        title="Academic Background & Research"
        subtitle="My academic journey blends engineering, digital marketing, and applied research — equipping me with both technical and strategic expertise."
      />

      {/* ------------------------------------- */}
      {/* MBA – DIGITAL MARKETING */}
      {/* ------------------------------------- */}
      <AnimatedSection>
        <h2 className="text-lg font-semibold mb-3 text-accentGold">
          MBA — Digital Marketing  
        </h2>

        <p className="text-sm text-white/70 mb-2">
          <strong>University:</strong> University of the West of Scotland  
        </p>
        <p className="text-sm text-white/70 mb-2">
          <strong>Year:</strong> 2023 – 2024  
        </p>
        <p className="text-sm text-white/70 mb-4">
          <strong>Grade:</strong> A (Distinction)
        </p>

        <p className="text-sm text-white/70 mb-4">
          I completed an MBA with a specialization in Digital Marketing, gaining deep 
          knowledge in management, leadership, global business, advertising strategies, 
          campaign development, and advanced marketing analytics. My academic focus was 
          on understanding customer engagement, digital funnels, and the role of emerging 
          platforms in global marketing.
        </p>

        {/* Dissertation */}
        <h3 className="text-md font-semibold mb-2">Dissertation</h3>
        <p className="text-sm text-white/70 mb-2">
          <strong>Research Topic:</strong> 
          TikTok’s Interactive Video Content & Conversion Rate in the U.K. Market
        </p>

        <p className="text-sm text-white/70 mb-4">
          My dissertation explored the effectiveness of TikTok’s interactive video formats 
          in driving customer engagement and conversions within the U.K. digital market. 
          Using a mixed-methods approach, I collected quantitative engagement analytics and 
          conducted qualitative interviews with buyers and TikTok users to identify 
          behavioral patterns influencing conversion rates.
        </p>

        <ul className="list-disc list-inside text-sm text-white/70 mb-4 space-y-1">
          <li>Mixed-methods research: quantitative engagement data + qualitative interviews</li>
          <li>Explored buyer psychology, engagement triggers & purchasing motivations</li>
          <li>Analysed effectiveness of interactive TikTok videos for digital marketing</li>
          <li>Produced a 5-chapter dissertation with actionable marketing recommendations</li>
        </ul>

        <p className="text-sm text-white/70 mb-4">
          This research provides insights into how entertainment-driven content influences 
          consumer decision-making in fast-paced digital environments.
        </p>

        {/* MBA Skills */}
        <h3 className="text-md font-semibold mb-2">Key Marketing Skills</h3>
        <div className="flex flex-wrap gap-2 text-xs">
          {[
            "PPC Campaigns",
            "Google Ads",
            "YouTube Marketing",
            "TikTok Marketing",
            "Social Media Advertising",
            "E-commerce Strategy",
            "B2B & B2C Funnels",
            "Shopify Optimization",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full bg-white/10 border border-white/10"
            >
              {skill}
            </span>
          ))}
        </div>
      </AnimatedSection>

      {/* ------------------------------------- */}
      {/* BACHELOR OF ENGINEERING */}
      {/* ------------------------------------- */}
      <AnimatedSection delay={0.1}>
        <h2 className="text-lg font-semibold mb-3 text-primaryBlue">
          Bachelor of Engineering — Computer Science
        </h2>

        <p className="text-sm text-white/70 mb-2">
          <strong>University:</strong> University of Jammu  
        </p>
        <p className="text-sm text-white/70 mb-2">
          <strong>Year:</strong> 2008 – 2012  
        </p>
        <p className="text-sm text-white/70 mb-4">
          <strong>Grade:</strong> A
        </p>

        <p className="text-sm text-white/70 mb-4">
          I completed a Bachelor's in Computer Engineering, gaining strong foundations 
          in software development, algorithms, system architecture, networking, and 
          database systems.
        </p>

        {/* Industrial Training */}
        <h3 className="text-md font-semibold mb-2">Industrial Training</h3>
        <ul className="list-disc list-inside text-sm text-white/70 mb-4 space-y-1">
          <li>Training Focus: Web Development</li>
          <li>Technologies: C# .NET, WebForms, MS SQL</li>
        </ul>

        {/* Final Year Project */}
        <h3 className="text-md font-semibold mb-2">Final Year Project</h3>
        <p className="text-sm text-white/70 mb-2">
          <strong>Project Title:</strong> Quad-Rotor Blade Toy Chopper with Live Streaming RF-Based Camera
        </p>

        <p className="text-sm text-white/70 mb-4">
          Designed and programmed a quad-rotor prototype integrated with an RF-based 
          live-streaming camera system. Developed DirectX-powered media software in 
          C# to receive and display live video feeds on a computer.
        </p>

        <ul className="list-disc list-inside text-sm text-white/70 mb-4 space-y-1">
          <li>Team-based engineering design & programming</li>
          <li>Developed video streaming software using DirectX</li>
          <li>Built RF camera system for remote surveillance</li>
        </ul>

        <h3 className="text-md font-semibold mb-2">Technical Skills Developed</h3>
        <div className="flex flex-wrap gap-2 text-xs">
          {[
            "C#",
            "API Development",
            "Software Engineering",
            "Problem Solving",
            "System Design",
            "Database Fundamentals",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full bg-white/10 border border-white/10"
            >
              {skill}
            </span>
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}

export default Academics;