import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-6 flex flex-col sm:flex-row gap-4 items-center justify-between text-xs text-white/60">
        <p>© {year} Prads. All rights reserved.</p>
        <div className="flex gap-4">
          <Link
            to="/contact"
            className="hover:text-white transition-colors duration-150"
          >
            Let&apos;s work together
          </Link>
          <a
            href="https://github.com/PardeepSinghBali"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors duration-150"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pardeep-singh-bali/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors duration-150"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;