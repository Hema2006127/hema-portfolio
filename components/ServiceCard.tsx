"use client";

import { useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Smartphone,
  Layers,
  Code2,
  Palette,
  Globe,
  Cpu,
  Search,
  MessageSquare,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import type { Service } from "./data/servicesData";

/* ===========================
   🔹 Strongly Typed Icon Map
=========================== */

const iconMap: Record<string, LucideIcon> = {
  mobile: Smartphone,
  "mobile-development": Smartphone,

  architecture: Layers,
  "app-architecture": Layers,
  "system-design": Layers,

  backend: Cpu,
  "backend-integration": Cpu,
  api: Cpu,

  ui: Palette,
  "ui-ux": Palette,
  design: Palette,

  web: Globe,

  development: Code2,

  review: Search,
  "code-review": Search,

  consulting: MessageSquare,
  technical: MessageSquare,
};

export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const IconComponent: LucideIcon =
    iconMap[service.icon] || HelpCircle;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const springConfig = { stiffness: 150, damping: 20 };

  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [
    "10deg",
    "-10deg",
  ]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [
    "-12deg",
    "12deg",
  ]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);

    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative p-[1px] rounded-[2.5rem] 
                 bg-gradient-to-br from-blue-500/20 
                 via-transparent to-cyan-500/20"
    >
      <div
        className="relative h-full bg-[#0B1220]/90 backdrop-blur-2xl 
                   rounded-[2.5rem] p-10 border border-white/5 
                   overflow-hidden transition-all duration-500 
                   group-hover:border-blue-500/30"
      >
        {/* Mouse Follow Glow */}
        <div
          className="absolute inset-0 opacity-0 
                     group-hover:opacity-100 
                     transition-opacity duration-500 
                     pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(59,130,246,0.12), transparent 70%)`,
          }}
        />

        <div
          className="relative z-10"
          style={{ transform: "translateZ(60px)" }}
        >
          {/* Icon */}
          <div
            className="relative w-16 h-16 flex items-center 
                       justify-center rounded-2xl 
                       bg-blue-500/10 text-blue-400 
                       mb-8 shadow-inner"
          >
            <IconComponent size={32} strokeWidth={1.5} />
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl -z-10 rounded-full" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
            {service.title}
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
            {service.description}
          </p>

          <ul className="space-y-4">
            {service.features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.1 + i * 0.1,
                }}
                className="flex items-center gap-3 text-[13px] text-slate-300/80"
              >
                <CheckCircle2
                  size={16}
                  className="text-blue-500/50"
                />
                <span className="group-hover:text-slate-200 transition-colors">
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div
          className="absolute top-6 right-8 text-[10px] 
                     font-mono text-slate-700 
                     group-hover:text-blue-500/40 
                     transition-colors uppercase tracking-widest"
        >
          SERVICE LAYER
        </div>
      </div>
    </motion.div>
  );
}
