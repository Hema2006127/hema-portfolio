"use client";

import { motion } from "framer-motion";
import { skillsData } from "./data/skillsData";
import SkillCard from "./SkillCard";

// أنيميشن ظهور الحاويات بتتابع
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 bg-[#020617] overflow-hidden scroll-mt-28"
    >
      {/* عناصر جمالية في الخلفية (Background Decor) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Title Section */}
        <div className="text-left mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs"
          >
            Technical Arsenal
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-tight"
          >
            SKILLS <span className="text-slate-800">&</span> <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
              TECHNOLOGIES.
            </span>
          </motion.h2>
        </div>

        {/* Grid System (Cards) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillsData.map((category, index) => (
            <SkillCard
              key={index}
              category={category.category}
              skills={category.skills}
            />
          ))}
        </motion.div>

        {/* --- Advanced Bottom Banner --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative mt-24 p-8 md:p-12 rounded-[2.5rem] border border-dashed border-slate-800 bg-slate-900/10 backdrop-blur-sm overflow-hidden group"
        >
          {/* تأثير الـ Scanning (الشعاع المتحرك) */}
          <motion.div 
            animate={{ top: ["-100%", "200%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-20 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent pointer-events-none"
          />

          {/* تأثير الـ Shine عند الـ Hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shine_2.5s_infinite] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            
            {/* القول المأثور (Quote) */}
            <div className="flex flex-col gap-3">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-slate-400 text-lg md:text-xl italic font-light tracking-wide max-w-xl"
              >
                "Always <span className="text-blue-500 font-medium not-italic">learning</span>, 
                always <span className="text-indigo-400 font-medium not-italic">building</span>, 
                always pushing limits."
              </motion.p>
              <div className="h-[1px] w-12 bg-blue-500/40 group-hover:w-full transition-all duration-1000 ease-in-out" />
            </div>

            {/* نظام الحالة (System Status Style Indicators) */}
            <div className="flex items-center gap-6">
              <div className="hidden sm:flex flex-col items-end opacity-60">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em]">Deployment State</span>
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.2em]">Ready for Production</span>
              </div>

              <div className="flex gap-4 bg-slate-950/50 p-4 rounded-3xl border border-white/5 shadow-inner">
                {[
                  { color: "bg-blue-600", shadow: "shadow-blue-500/40", delay: 0 },
                  { color: "bg-indigo-500", shadow: "shadow-indigo-500/40", delay: 0.2 },
                  { color: "bg-cyan-400", shadow: "shadow-cyan-400/40", delay: 0.4 },
                ].map((dot, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.25, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: dot.delay,
                      ease: "easeInOut"
                    }}
                    className={`h-2.5 w-2.5 rounded-full ${dot.color} ${dot.shadow} shadow-[0_0_12px]`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CSS للأنيشمين (Shine Effect) */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}