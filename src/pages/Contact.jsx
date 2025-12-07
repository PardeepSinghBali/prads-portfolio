import React from "react";
import SectionTitle from "../components/SectionTitle.jsx";
import AnimatedSection from "../components/AnimatedSection.jsx";

function Contact() {
  return (
    <>
      <SectionTitle
        eyebrow="Let’s collaborate"
        title="Contact & Availability"
        subtitle="Whether it’s a Website, film, an AI-powered app, or a full digital campaign, I’d love to hear from you."
      />

      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-3 text-sm"
          >
            <div>
              <label className="block mb-1 text-xs text-white/70">
                Name
              </label>
              <input
                type="text"
                className="w-full rounded-lg bg-black/50 border border-white/10 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primaryBlue"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block mb-1 text-xs text-white/70">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-lg bg-black/50 border border-white/10 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primaryBlue"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-1 text-xs text-white/70">
                What would you like to work on?
              </label>
              <select className="w-full rounded-lg bg-black/50 border border-white/10 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primaryBlue">
                <option>General collaboration</option>
                <option>Software / Web project</option>
                <option>AI integration / automation</option>
                <option>Film / video project</option>
                <option>Digital marketing campaign</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-xs text-white/70">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full rounded-lg bg-black/50 border border-white/10 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primaryBlue"
                placeholder="Tell me a bit about your idea..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-2 text-xs font-semibold hover:shadow-lg transition-all"
            >
              Send message (use the email id mentioned at right side ----)
            </button>
          </form>

          <div className="text-sm text-white/70 space-y-2">
            <p>
              Prefer email or DMs? Reach out directly and I’ll get back to you
              as soon as I can:
            </p>
            <p>
              <span className="text-white">Email:</span>{" "}
              pardeepsingh3062@gmail.com
            </p>
            <p>
              <span className="text-white">LinkedIn:</span> https://www.linkedin.com/in/pardeep-singh-bali
            </p>
            <p>
              <span className="text-white">Instagram / YouTube:</span> <br></br>https://www.instagram.com/yourtravellingmonk<br></br>https://www.youtube.com/@TravellingMonk
            </p>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default Contact;