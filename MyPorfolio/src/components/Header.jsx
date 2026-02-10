import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-3 md:py-4 shadow max-w-5xl rounded-full mx-auto w-full bg-white">
      <a href="https://prebuiltui.com">
        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/prebuiltuiDummyLogo.svg"
          alt="Logo"
        />
      </a>

      <nav
        className={`
          max-md:absolute max-md:top-0 max-md:left-0
          max-md:overflow-hidden max-md:h-full
          transition-[width] bg-white/50 backdrop-blur
          flex flex-col md:flex-row gap-8 text-gray-900 text-sm
          ${menuOpen ? "max-md:w-full" : "max-md:w-0"}
        `}
      >
        <a className="hover:text-indigo-600" href="#">Products</a>
        <a className="hover:text-indigo-600" href="#">Customer Stories</a>
        <a className="hover:text-indigo-600" href="#">Pricing</a>
        <a className="hover:text-indigo-600" href="#">Docs</a>

        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>
      </nav>

      <div className="flex items-center space-x-4">
        <a className="hidden md:flex bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition" href="#">
          Sign up
        </a>

        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
