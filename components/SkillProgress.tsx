"use client";

import { motion } from "framer-motion";

type Props = {
  name: string;
  level: number;
};

export default function SkillProgress({ name, level }: Props) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-slate-300 text-sm">{name}</span>
        <span className="text-blue-400 text-sm">{level}%</span>
      </div>

      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
        />
      </div>
    </div>
  );
}
