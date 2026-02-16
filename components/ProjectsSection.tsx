"use client";
import { useState } from "react";
import { projectsData } from "./data/projectsData";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const [expandedId, setExpandedId] = useState<string>(projectsData[0].id);

  return (
    // 👈 تم تغيير bg-[#050810] إلى bg-[#020617] (الكحلي الغامق السادة)
    <section id="projects" className="py-32 bg-[#020617] min-h-screen scroll-mt-20">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
              Featured <span className="text-blue-500">Apps</span>
            </h2>
            <p className="text-slate-400 font-light text-lg">
              Click on an app to explore its features and interface.
            </p>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]" />
        </div>

        {/* Projects Layout */}
        <div className="flex flex-col lg:flex-row gap-4 max-w-7xl mx-auto h-auto lg:h-[650px]">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={expandedId === project.id}
              onExpand={setExpandedId}
            />
          ))}
        </div>

        {/* Footer Hint */}
        <div className="mt-16 text-center">
           <p className="text-slate-600 text-xs font-mono tracking-widest uppercase">
             Scroll to explore more projects
           </p>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;