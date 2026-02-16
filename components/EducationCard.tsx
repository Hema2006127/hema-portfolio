"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image"; // للتصحيح: استعمل Image من Next.js
import { Education } from "./data/educationData";

export default function EducationCard({ edu, index }: { edu: Education; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative p-8 rounded-[2rem] bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-start gap-6">
        
        {/* Logo Container */}
        <div className="relative shrink-0 w-20 h-20 rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          <img 
            src={edu.logo} 
            alt={edu.institution}
            className="w-full h-full object-contain p-2"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex flex-col mb-4">
            <div className="flex items-center gap-2 mb-1">
               <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">
                {edu.duration}
              </span>
              {!edu.isCompleted && (
                 <span className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-400 font-bold uppercase animate-pulse">
                   In Progress
                 </span>
              )}
            </div>
            
            <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">
              {edu.title}
            </h3>
            <p className="text-slate-400 font-medium">{edu.institution}</p>
          </div>
          
          <p className="text-slate-500 leading-relaxed group-hover:text-slate-300 transition-colors">
            {edu.description}
          </p>
        </div>
      </div>

      {/* Status Icon */}
      {edu.isCompleted && (
        <div className="absolute top-6 right-6 opacity-40 group-hover:opacity-100 transition-all duration-500">
          <CheckCircle2 size={22} className="text-blue-500" />
        </div>
      )}

      {/* Hover Gradient Line */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-600 via-indigo-500 to-transparent group-hover:w-full transition-all duration-700" />
    </motion.div>
  );
}