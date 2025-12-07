import React from "react";
import SectionTitle from "../components/SectionTitle.jsx";
import AnimatedSection from "../components/AnimatedSection.jsx";

function Marketing() {
  return (
    <>
      <SectionTitle
        eyebrow="Campaigns · Content · Strategy"
        title="Digital Marketing & Content Strategy"
        subtitle="From content calendars to performance campaigns, I blend creativity with analytics."
      />

     <AnimatedSection>
  <h2 className="text-lg font-semibold mb-3">Campaign Highlights</h2>

  <p className="text-sm text-white/70 mb-3">
    I manage full-funnel digital marketing campaigns across Google Ads, YouTube,
    eCommerce platforms, and creator ecosystems. My experience spans multiple
    countries and industries — delivering measurable results in both B2B and B2C
    markets.
  </p>

  <div className="grid md:grid-cols-3 gap-4 text-xs">
    <MetricCard label="Campaigns Executed" value="250+ Worldwide" />
    <MetricCard label="Total Viewership" value="100M+ Views" />
    <MetricCard label="Subscribers Gained" value="5M+ Growth" />
  </div>
</AnimatedSection>


{/* ------------------------------------- */}
{/* GOOGLE ADS SECTION */}
{/* ------------------------------------- */}
<AnimatedSection delay={0.1}>
  <h2 className="text-lg font-semibold mb-3">Google Ads Expertise</h2>

  <p className="text-sm text-white/70 mb-4">
    I run high-performance Google Ads campaigns across multiple verticals —
    optimizing for conversions, ROAS, and brand visibility. My experience spans
    eCommerce, IT services, professional services, and entertainment.
  </p>

  <ul className="list-disc list-inside text-sm text-white/70 space-y-1">
    <li>E-commerce campaigns (UK, India, Europe, Canada, USA)</li>
    <li>Google Merchant Center setup & product feed optimization</li>
    <li>Lead generation for IT companies, janitorial services,trades,e-commerce etc</li>
    <li>Global PPC management for B2B and B2C brands</li>
    <li>Conversion-focused targeting & remarketing funnels</li>
  </ul>
</AnimatedSection>


{/* ------------------------------------- */}
{/* YOUTUBE & ENTERTAINMENT MARKETING */}
{/* ------------------------------------- */}
<AnimatedSection delay={0.2}>
  <h2 className="text-lg font-semibold mb-3">
    YouTube Promotion & Creator Marketing
  </h2>

  <p className="text-sm text-white/70 mb-4">
    I specialize in YouTube channel growth, content promotion, and entertainment
    marketing. My campaigns have supported creators, musicians, content studios,
    and independent filmmakers — driving large-scale audience growth.
  </p>

  <ul className="list-disc list-inside text-sm text-white/70 space-y-1">
    <li>YouTube Ads for short films, music videos, and web series</li>
    <li>Audience development strategy for creators and studios</li>
    <li>5M+ subscriptions achieved across combined campaigns</li>
    <li>100M+ cumulative views delivered via optimized targeting</li>
    <li>Custom thumbnail, click-through optimization & retention strategy</li>
  </ul>
</AnimatedSection>


{/* ------------------------------------- */}
{/* E-COMMERCE MARKETING (eBay, Deliveroo, etc.) */}
{/* ------------------------------------- */}
<AnimatedSection delay={0.3}>
  <h2 className="text-lg font-semibold mb-3">E-commerce Marketing</h2>

  <p className="text-sm text-white/70 mb-4">
    I support sellers and brands with marketplace optimization and performance
    marketing, helping them grow visibility, traffic, and sales.
  </p>

  <ul className="list-disc list-inside text-sm text-white/70 space-y-1">
    <li>eBay product listings, optimization & ad campaigning</li>
    <li>Deliveroo product listing improvement and performance analytics</li>
    <li>E-commerce funnel optimization for small and medium businesses</li>
    <li>Market-specific campaign strategies for UK, EU, India & North America</li>
  </ul>
</AnimatedSection>

      <AnimatedSection delay={0.1}>
        <h2 className="text-lg font-semibold mb-3">What I Offer</h2>
        <ul className="list-disc list-inside text-sm text-white/70 space-y-1">
          <li>Content strategy & calendars</li>
          <li>Scriptwriting & creative direction</li>
          <li>Performance tracking and optimization</li>
        </ul>
      </AnimatedSection>
    </>
  );
}

function MetricCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs text-white/60 mb-1">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  );
}

export default Marketing;