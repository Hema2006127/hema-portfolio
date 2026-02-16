"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Mail, Linkedin, Github, Phone, Send, CheckCircle2, Sparkles } from "lucide-react";

const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "c8e66b5e-c182-4bbc-8384-71b453897867"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  // 📝 مصفوفة بيانات التواصل مع الروابط الفعلية
  const contactLinks = [
    { 
      icon: <Mail className="w-5 h-5" />, 
      label: "Direct Mail", 
      value: "mahmiho631@gmail.com", 
      href: "mailto:mahmiho631@gmail.com" 
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      label: "Linkedin Profile", 
      value: "Ibrahim Elsayed", 
      href: "https://linkedin.com/in/YOUR_USERNAME" // 👈 استبدل YOUR_USERNAME بيوزرك
    },
    { 
      icon: <Github className="w-5 h-5" />, 
      label: "Source Repo", 
      value: "ibrahim-github", 
      href: "https://github.com/YOUR_USERNAME" // 👈 استبدل YOUR_USERNAME بيوزرك
    },
    { 
      icon: <Phone className="w-5 h-5" />, 
      label: "Call Me", 
      value: "+20 10XXXXXXX", 
      href: "tel:+2010XXXXXXX" 
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-[#020617] overflow-hidden scroll-mt-20">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* الجانب الأيسر: معلومات التواصل */}
          <div className="space-y-10">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-semibold text-blue-400/80">Available for Projects</span>
              </div>
              <h2 className="text-6xl font-black text-white tracking-tighter leading-none">
                LET&apos;S <br />
                <span className="text-blue-500">CONNECT.</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-md font-light">
                Have a vision? Let&apos;s turn it into a high-performance reality.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              {contactLinks.map((item, i) => (
                <a 
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? "_blank" : undefined}
                  rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0F172A] flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{item.label}</span>
                    <span className="text-slate-200 text-sm font-medium">{item.value}</span>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* الجانب الأيمن: الفورم */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -inset-1 bg-blue-500/10 blur-3xl rounded-[2.5rem]" />
            
            <div className="relative bg-[#0F172A] p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Quick Message
              </h3>
              
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-12 text-center space-y-4">
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
                    <h4 className="text-white text-xl font-bold">Transmission Sent!</h4>
                    <p className="text-slate-400 text-sm">I will get back to you as soon as possible.</p>
                    <button onClick={() => setStatus("idle")} className="text-blue-500 text-sm font-bold mt-4 hover:underline">Send Another</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-slate-500 ml-1">Identity</label>
                        <input name="name" type="text" required placeholder="Your Name" className="w-full bg-[#020617] border border-white/5 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition-all placeholder:text-slate-700" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-slate-500 ml-1">Digital Address</label>
                        <input name="email" type="email" required placeholder="Email Address" className="w-full bg-[#020617] border border-white/5 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition-all placeholder:text-slate-700" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-slate-500 ml-1">Phone Number</label>
                      <input name="phone" type="tel" required placeholder="+20 1XXXXXXXXX" className="w-full bg-[#020617] border border-white/5 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition-all placeholder:text-slate-700" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-slate-500 ml-1">The Mission</label>
                      <textarea name="message" required rows={3} placeholder="How can I help you?" className="w-full bg-[#020617] border border-white/5 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 transition-all resize-none placeholder:text-slate-700" />
                    </div>

                    <button 
                      disabled={status === "sending"}
                      className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-lg hover:bg-blue-500 transition-all disabled:bg-slate-800 disabled:text-slate-500"
                    >
                      {status === "sending" ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;