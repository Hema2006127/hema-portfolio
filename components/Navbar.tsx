"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function Navbar() {
  // أضفنا "education" هنا بالترتيب الصحيح
  const sections = ["home", "about", "skills", "education", "services", "projects", "contact"];
  const activeSection = useScrollSpy(sections);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-300">
      <motion.div
        className="h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 origin-left"
        style={{ scaleX }}
      />

      <div className={`max-w-6xl mx-auto px-4 py-4 transition-all duration-500 ${isScrolled ? "scale-95" : "scale-100"}`}>
        <nav
          className={`relative flex items-center justify-between px-6 py-2 rounded-2xl border transition-all duration-500 ${
            isScrolled
              ? "bg-slate-950/40 backdrop-blur-xl border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo Section */}
          <Link href="#home" className="relative group flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-black text-white group-hover:rotate-12 transition-transform duration-300 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              I
            </div>
            <span className="text-lg font-black tracking-tighter text-white">
              ibrahim<span className="text-blue-500">.</span>DEV
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center bg-slate-900/40 px-2 py-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {sections.map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className="relative px-4 py-1.5 group"
              >
                <span
                  className={`relative z-10 text-[10px] uppercase font-bold tracking-[0.2em] transition-colors duration-300 ${
                    activeSection === section
                      ? "text-white"
                      : "text-slate-500 group-hover:text-slate-200"
                  }`}
                >
                  {section}
                </span>

                {activeSection === section && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-blue-600/10 border border-blue-500/20 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <motion.a
            href="/cv.pdf"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-blue-50 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="hidden sm:inline">download CV</span>
          </motion.a>
        </nav>
      </div>
    </header>
  );
}