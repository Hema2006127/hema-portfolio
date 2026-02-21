"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "./data/projectsData";
import { Smartphone, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onExpand: (id: string) => void;
}

const ProjectCard = ({ project, isExpanded, onExpand }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      onClick={() => onExpand(project.id)}
      className={`relative h-[600px] rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] bg-[#0B1220] border border-white/5 ${
        isExpanded
          ? "flex-[4] shadow-2xl shadow-blue-500/10"
          : "flex-1 hover:border-blue-500/30"
      }`}
    >
      {!isExpanded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <motion.div
            layout
            className="origin-center rotate-90 whitespace-nowrap text-xl font-bold text-white/20 uppercase tracking-[0.3em]"
          >
            {project.title}
          </motion.div>
        </div>
      )}

      <div className="flex h-full w-full">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-[1.5] p-10 flex flex-col justify-center gap-6"
            >
              <div className="flex items-center gap-3 text-blue-400">
                <Smartphone size={20} />
                <span className="text-xs font-mono uppercase tracking-widest">
                  {project.category}
                </span>
              </div>

              <h3 className="text-4xl font-black text-white">
                {project.title}
              </h3>

              <p className="text-slate-400 leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] rounded-full border border-blue-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="mt-4 flex items-center gap-2 text-white bg-blue-600 w-fit px-6 py-3 rounded-xl hover:bg-blue-500 transition-all">
                Case Study <ExternalLink size={16} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phone Side */}
        <div
          className={`relative flex-1 flex items-center justify-center p-6 ${
            !isExpanded ? "opacity-30 grayscale" : "opacity-100"
          }`}
        >
          <div className="relative w-[280px] h-[560px] bg-black rounded-[3rem] border-[8px] border-slate-800 shadow-2xl">
            
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20" />

            {/* Scrollable Screenshots */}
            <div className="h-full w-full overflow-y-scroll snap-y snap-mandatory">
              {project.screenshots.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  className="w-full h-auto snap-start"
                  alt="screenshot"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
