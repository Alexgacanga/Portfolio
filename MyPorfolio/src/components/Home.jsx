import { useState, useEffect } from "react";
import Header from "./Header";
import pp from "../assets/pp.jpeg"

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <div
        className="pt-30 pb-15 min-h-screen flex items-center  justify-center relative overflow-hidden"
        style={{
          background: "linear-gradient(to left, #14b8a6 0%, #991b1b 100%)",
        }}
      >
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-30 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #0d9488 0%, transparent 70%)",
            transform: "translate(-30%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #7f1d1d 0%, transparent 70%)",
            transform: "translate(20%, 20%)",
          }}
        />
        <div
          className="text-center px-6 max-w-2xl mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="flex justify-center mb-5">
            <div
              className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "scale(1)" : "scale(0.85)",
                transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
              }}
            >
              <div
                className="flex w-full h-full items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #d4a5c9, #a5b8d4)",
                }}
              >
                <img src={pp} className="h-25 w-30 rounded-full object-cover" alt="profile"/>
              </div>
            </div>
          </div>
          <p
            className="text-white/80 text-lg mb-3 tracking-wide"
            style={{
              fontFamily: "'Georgia', serif",
              opacity: visible ? 1 : 0,
              transition: "opacity 0.6s ease 0.25s",
            }}
          >
            Hi! I'm Gacanga Alex Mwangi
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s",
            }}
          >
            Software Engineer
            <br />
            based in Nairobi, Kenya.
          </h1>
          <p
            className="text-white/70 text-base leading-relaxed mb-10 max-w-lg mx-auto"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.6s ease 0.5s",
            }}
          >
            Software Engineer dedicated to shipping scalable digital solutions
            and secure integrations. Committed to technical excellence, from
            architecting clean systems to delivering seamless, high-impact user
            experiences.
          </p>
          <div
            className="flex items-center justify-center gap-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.6s ease 0.65s, transform 0.6s ease 0.65s",
            }}
          >
            <button
              className="px-8 py-3 rounded-full text-white font-semibold text-sm tracking-wide flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #e040a0 0%, #f06030 100%)",
                border: "none",
                cursor: "pointer",
              }}
            >
              contact me
            </button>
            <button
              className="px-8 py-3 rounded-full font-semibold text-sm tracking-wide flex items-center gap-2 bg-white/10 border border-white/30 text-white shadow-sm hover:shadow-md hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm"
              style={{ cursor: "pointer" }}
            >
              My Projects
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
