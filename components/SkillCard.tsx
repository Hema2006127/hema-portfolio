"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import SkillProgress from "./SkillProgress";

type Skill = {
  name: string;
  level: number;
};

type Props = {
  category: string;
  skills: Skill[];
};

export default function SkillCard({ category, skills }: Props) {
  // تأثير الـ 3D Tilt (الميل مع الماوس)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative group bg-[#0A0F1C]/80 backdrop-blur-xl p-8 rounded-[2rem] 
                 border border-white/5 hover:border-blue-500/20 
                 transition-colors duration-500 cursor-default"
    >
      {/* Dynamic Background Spotlight */}
      <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
           style={{
             background: `radial-gradient(circle at center, rgba(59, 130, 246, 0.08) 0%, transparent 70%)`
           }} />

      {/* Side Glow Line */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-blue-500 group-hover:h-1/2 transition-all duration-700 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

      <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
        {/* Category Header with Icon-like Dot */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,1)]" />
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em]">
            {category}
          </h3>
        </div>

        {/* Skills List with Staggered Container Effect */}
        <div className="space-y-7">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <SkillProgress
                name={skill.name}
                level={skill.level}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-4 right-6 text-[10px] font-mono text-slate-700 group-hover:text-blue-500/40 transition-colors uppercase tracking-tighter">
        Technical Layer
      </div>
    </motion.div>
  );
}