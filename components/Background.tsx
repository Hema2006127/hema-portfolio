"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Background() {
  // 1. بنستخدم state عشان نعرف إحنا بقينا على المتصفح (Client) ولا لسه
  const [mounted, setMounted] = useState(false);

  // 2. أول ما الـ component يترندر لأول مرة على المتصفح، هنغير الحالة
  useEffect(() => {
    setMounted(true);
  }, []);

  // 3. لو لسه على السيرفر، هنعرض الخلفية سادة من غير النقط العشوائية
  if (!mounted) {
    return <div className="fixed inset-0 bg-[#0F172A] -z-10" />;
  }

  return (
    <div className="fixed inset-0 bg-[#0F172A] -z-10 overflow-hidden">
      {/* Floating Particles */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[3px] h-[3px] bg-blue-400 rounded-full opacity-40"
          initial={{
            // دلوقتي Math.random() آمنة لأنها مش هتشتغل غير على المتصفح فقط
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}