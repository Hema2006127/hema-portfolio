"use client";

import { Code2, Rocket, Layers, Smartphone, ArrowUpRight } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  size: string; // لإدارة شكل الـ Bento
};

const features: Feature[] = [
  { 
    title: "Clean Architecture", 
    description: "Architecting apps with SOLID principles for maximum scalability and zero technical debt.", 
    icon: Layers,
    size: "md:col-span-2" 
  },
  { 
    title: "Flutter Pro", 
    description: "High-performance cross-platform mastery.", 
    icon: Smartphone,
    size: "md:col-span-1" 
  },
  { 
    title: "Logic & UX", 
    description: "Transforming wireframes into pixel-perfect reality.", 
    icon: Code2,
    size: "md:col-span-1" 
  },
  { 
    title: "Performance Optimization", 
    description: "60 FPS is not a goal, it's a standard. Deep profiling and memory management expert.", 
    icon: Rocket,
    size: "md:col-span-2" 
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // إضافة Spring للأرقام لجعل الحركة أنعم (Smooth movement)
  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      className={`group relative rounded-[2.5rem] border border-white/5 bg-slate-950/20 p-8 overflow-hidden backdrop-blur-sm ${feature.size}`}
    >
      {/* 1. Interactive Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${dx}px ${dy}px,
              rgba(59, 130, 246, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          {/* 2. Floating Icon with Shadow */}
          <motion.div 
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10 border border-blue-500/20 group-hover:bg-blue-600/20 transition-all duration-500"
          >
            <Icon className="text-blue-500 shadow-blue-500/50 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" size={30} />
          </motion.div>

          <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
            {feature.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed max-w-[250px] group-hover:text-slate-200 transition-colors">
            {feature.description}
          </p>
        </div>

        {/* 3. Aesthetic Corner Badge */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <div className="p-2 rounded-full bg-white/5 border border-white/10">
            <ArrowUpRight size={16} className="text-blue-400" />
          </div>
        </div>
      </div>

      {/* 4. Glass Border Highlight */}
      <div className="absolute inset-0 rounded-[2.5rem] border border-white/[0.03] group-hover:border-blue-500/20 transition-colors pointer-events-none" />
    </motion.div>
  );
}

export default function AboutFeatures() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </div>
  );
}