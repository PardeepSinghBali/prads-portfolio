import React from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/software", label: "Software" },
  { to: "/ai", label: "AI & Automation" },
  { to: "/films", label: "Filmmaking" },
  { to: "/marketing", label: "Marketing" },
  { to: "/academics", label: "Academics" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-primaryBlue to-accentGold shadow-lg shadow-primaryBlue/40" />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-sm tracking-wide uppercase text-primaryBlue">
              Pardeep Singh Bali
            </span>
            <span className="text-xs text-white/70">
              Tech × Film × AI × Marketing
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex gap-4 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-3 py-1 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-white text-black"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;