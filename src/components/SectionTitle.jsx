import React from "react";

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-primaryBlue mb-2">
          {eyebrow}
        </p>
      )}
      <h1 className="text-2xl md:text-3xl font-display font-semibold mb-2">
        {title}
      </h1>
      {subtitle && (
        <p className="text-sm md:text-base text-white/70 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;