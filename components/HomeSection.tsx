"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, ArrowRight, ExternalLink } from "lucide-react";
import AnimatedAvatar from "@/components/AnimatedAvatar";

export default function HomeSection() {
  const [count, setCount] = useState(0);

  // تأثير الـ Parallax للصورة عند حركة الماوس
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX / rect.width - 0.5);
    y.set(e.clientY / rect.height - 0.5);
  };

  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 2000;
    const increment = end / (duration / 16);
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(counter);
  }, []);

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center pt-20 px-6 lg:px-20 bg-[#020617] overflow-hidden"
    >
      {/* 1. Background Dynamic Elements (الإضاءة) */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full animate-pulse delay-700" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE - IMAGE WITH 3D EFFECT */}
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-start group"
        >
          {/* Decorative Rings around Image */}
          <div className="absolute inset-0 border-2 border-blue-500/10 rounded-full scale-125 animate-[ping_5s_infinite]" />
          <div className="absolute inset-0 border border-indigo-500/20 rounded-full scale-110" />
          
          <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
            <AnimatedAvatar />
          </div>
        </motion.div>

        {/* RIGHT SIDE - TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for Freelance
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4 leading-none">
            Ibrahim <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-sky-400">
              Mohamed<span className="text-blue-500">.</span>
            </span>
          </h1>

          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-slate-700" />
            <TypeAnimation
              sequence={["Flutter Developer", 2000, "Web Architect", 2000, "System Designer", 2000]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="text-xl md:text-2xl text-slate-400 font-medium font-mono"
            />
          </div>

          <p className="text-slate-400 text-lg mb-10 max-w-xl leading-relaxed">
            Crafting high-performance <span className="text-white">mobile applications</span> and digital 
            experiences with a focus on clean architecture and user-centric design.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-5 mb-12">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center gap-2 overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span>Hire Me Now</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-slate-800 hover:border-slate-600 text-slate-200 rounded-2xl font-bold transition-all backdrop-blur-sm"
            >
              View Projects
            </motion.button>
          </div>

          {/* Social Links with Tooltip style */}
          <div className="flex gap-4">
            {[
              { icon: Github, link: "https://github.com/Hema2006127", color: "hover:text-white" },
              { icon: Linkedin, link: "https://www.linkedin.com/...", color: "hover:text-blue-400" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.link} 
                target="_blank"
                className={`p-4 rounded-2xl bg-slate-900/50 border border-white/5 text-slate-500 ${social.color} transition-all hover:border-blue-500/30 hover:-translate-y-1`}
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* STATS SECTION - GLASS DESIGN */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto w-full grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 p-8 rounded-[2.5rem] border border-white/5 bg-slate-900/20 backdrop-blur-md"
      >
        {[
          { label: "Experience", value: "1+" },
          { label: "Projects", value: "3+" },
          { label: "Stack", value: "Flutter/Web" },
          { label: "Satisfaction", value: `${count}%` },
        ].map((stat, i) => (
          <div key={i} className="text-center lg:text-left space-y-1">
            <h3 className="text-3xl font-black text-white">{stat.value}</h3>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}