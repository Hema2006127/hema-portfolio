"use client";

import { motion } from "framer-motion";
import EducationCard from "./EducationCard";
import { educationData } from "./data/educationData";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="relative py-32 px-6 bg-[#020617] scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Title Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="h-[1px] w-8 bg-blue-500" />
            <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs">Academic Journey</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter"
          >
            LEARNING<span className="text-blue-500">_</span>PATH
          </motion.h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main List */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {educationData.map((edu, index) => (
              <EducationCard key={index} edu={edu} index={index} />
            ))}
          </div>

          {/* Side Info / Stats Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-4 p-10 rounded-[2.5rem] bg-gradient-to-br from-blue-600/20 to-indigo-900/20 border border-blue-500/10 backdrop-blur-xl flex flex-col justify-between overflow-hidden relative"
          >
            {/* الخلفية المزخرفة للكارت الجانبي */}
            <div className="absolute -right-10 -bottom-10 text-white/5 rotate-12">
               <GraduationCap size={200} />
            </div>

            <div className="relative z-10">
              <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-4">Philosophy</h4>
              <p className="text-slate-400 leading-relaxed italic">
                "Continuous learning is the minimum requirement for success in the tech industry."
              </p>
            </div>

            <div className="relative z-10 mt-12 space-y-6">
              <div>
                <span className="block text-4xl font-black text-white tracking-tighter">4.0</span>
                <span className="text-[10px] uppercase font-bold text-blue-400 tracking-widest">Knowledge Index</span>
              </div>
              <div className="h-px bg-white/10 w-full" />
              <p className="text-xs text-slate-500 uppercase font-bold tracking-[0.2em]">Always evolving, always building.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}