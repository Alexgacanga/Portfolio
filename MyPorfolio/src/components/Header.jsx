"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navlist = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contacts", href: "#contacts" },
  ];

  // Optional: close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setScrolled(true);
      else setScrolled(false);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  // Close menu when clicking a nav link
  const handleNavClick = () => setMenuOpen(false);

  return (
    <div className="flex justify-center">
      <header
        className={`z-50 fixed top-5 md:top-10 sm:top-7 mx-3 sm:left-auto sm:right-auto left-0 right-0
                     flex flex-col
                     px-4 py-1 sm:py-2 lg:py-3
                     shadow-xl rounded-2xl sm:rounded-full
                     bg-white w-auto sm:w-3/5
                     transition-all duration-300`}
      >
        {/* Top bar: logo + nav + hamburger */}
        <div className="flex items-center justify-between w-full">
          <a href="/" className="shrink-0">
            <p className="text-red-700 font-bold text-lg font-display pt-0.5 hover:text-red-600 lg:text-3xl md:pl-10 whitespace-nowrap">
              GAM
            </p>
          </a>

          {/* Desktop nav */}
          <nav className="hidden sm:flex pl-2 text-xs text-gray-900 font-bold gap-8 sm:justify-around md:pr-10 lg:text-sm">
            <ul className="flex flex-row">
              {navlist.map((item, index) => (
                <li key={index} className="px-2 py-1 group">
                  <a href={item.href}>
                    {item.name}
                    <div className="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger button — mobile only */}
          <button
            className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 rounded-md focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {/* Animated burger lines */}
            <span
              className={`block h-0.5 w-5 bg-gray-800 rounded transition-all duration-300 origin-center
                          ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-gray-800 rounded transition-all duration-300
                          ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-gray-800 rounded transition-all duration-300 origin-center
                          ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile dropdown nav */}
        <div
          className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out
                      ${menuOpen ? "max-h-60 opacity-100 pt-2 pb-3" : "max-h-0 opacity-0"}`}
        >
          <ul className="flex flex-col gap-1">
            {navlist.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="block px-3 py-2 rounded-lg text-sm font-bold text-gray-800
                             hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}