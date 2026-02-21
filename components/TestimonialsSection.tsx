"use client";

import { motion, Variants } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Rayan",
    role: "CEO at TechFlow",
    content: "Ibrahim is an exceptional developer. The Flutter app he built exceeded our expectations in terms of performance and UI smoothness.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed"
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    content: "The attention to detail in the Web Architecture Ibrahim designed is outstanding. Clean code and very scalable solutions.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    name: "Khaled Ali",
    role: "Startup Founder",
    content: "Working with Ibrahim was a breeze. He understands the business requirements and translates them into high-quality technical products.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Khaled"
  }
];

// تعريف الـ Variants مع الأنواع البرمجية لتجنب أخطاء TypeScript
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.2 
    }
  }
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] // استخدام Bezier Curve لضمان توافق الأنواع وأداء أسلس
    }
  }
};

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 px-6 lg:px-20 bg-[#020617] overflow-hidden">
      
      {/* Background Glow Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full animate-pulse delay-1000 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md"
          >
            <span className="text-blue-400 font-mono text-xs font-bold uppercase tracking-[0.2em]">
              Success Stories
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mt-4 tracking-tight"
          >
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400">Voices.</span>
          </motion.h2>
          <p className="text-slate-500 mt-6 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            Don't just take my word for it. Here's what industry leaders say about our collaboration and results.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
              className="group relative p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/5 backdrop-blur-xl hover:border-blue-500/40 transition-all duration-500 shadow-2xl"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-8 right-8 text-blue-500/5 group-hover:text-blue-500/10 transition-colors duration-500 pointer-events-none">
                <Quote size={80} fill="currentColor" />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1.5 mb-8">
                {[...Array(item.rating)].map((_, starIdx) => (
                  <Star 
                    key={starIdx} 
                    size={16} 
                    className="fill-blue-500 text-blue-500" 
                  />
                ))}
              </div>

              {/* Review Content */}
              <p className="text-slate-300 text-lg leading-relaxed mb-10 relative z-10 font-medium italic">
                "{item.content}"
              </p>

              {/* Footer: Client Info */}
              <div className="flex items-center gap-5 border-t border-white/10 pt-8">
                <div className="relative flex-shrink-0">
                   <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                   <img 
                    src={item.image} 
                    alt={item.name} 
                    className="relative w-14 h-14 rounded-2xl border-2 border-slate-800 group-hover:border-blue-500/50 transition-all duration-500 object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base group-hover:text-blue-400 transition-colors duration-300">
                    {item.name}
                  </h4>
                  <p className="text-slate-500 text-xs font-mono tracking-wider uppercase mt-1">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Hover Glow Overlay */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}