"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AboutFeatures from "./AboutFeatures";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // تتبع السكرول الخاص بالقسم فقط لعمل تأثيرات حركية دقيقة
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // تحريك العناصر الهندسية في الخلفية بناءً على السكرول
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-40 px-6 scroll-mt-28 bg-[#020617] overflow-hidden"
    >
      {/* --- Decorative Background Elements (Advanced) --- */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-20 right-[10%] w-64 h-64 border border-blue-500/10 rounded-[3rem] pointer-events-none"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 left-[5%] w-40 h-40 bg-gradient-to-br from-indigo-500/5 to-transparent blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-32">
          
          {/* Badge مع أنيميشن الدخول */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
              The Architect
            </span>
          </motion.div>

          {/* Title مع تأثير الظهور الحرفي */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black mb-12 tracking-tighter text-white"
          >
            Behind the <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700">Code.</span>
          </motion.h2>

          {/* Paragraph بتنسيق "Focus" متقدم */}
          <div className="relative max-w-4xl">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-light leading-[1.4] text-slate-400 text-balance"
            >
              I’m <span className="text-white font-medium border-b-2 border-blue-500/20">Ibrahim Mohamed</span>, 
              a digital craftsman specializing in <span className="text-slate-200">Flutter ecosystems</span>. 
              I don't just write functions; I engineer <span className="text-blue-400 italic">experiences</span> 
              rooted in clean architecture and uncompromised performance.
            </motion.p>
            
            {/* علامة اقتباس جمالية ضخمة في الخلفية */}
            <span className="absolute -top-10 -left-10 text-[15rem] text-white/[0.03] font-serif pointer-events-none select-none">
              “
            </span>
          </div>
        </div>

        {/* الـ Features Component مع دخول متدرج */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* لمسة إضاءة خلف الكروت */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          <AboutFeatures />
        </motion.div>
      </div>

      {/* Decorative Line (Side) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-1/2 bg-gradient-to-b from-transparent via-slate-800 to-transparent" />
    </section>
  );
}