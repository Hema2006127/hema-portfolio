"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

export default function AnimatedAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative w-[350px] h-[350px]"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl animate-pulse" />

      {/* Image */}
      <MotionImage
        src="/profile.jpg"   // ← اسم صورتك الصح
        alt="Profile"
        fill
        className="rounded-full object-cover border-4 border-blue-500 shadow-xl"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      />
    </motion.div>
  );
}
