import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ServicesSection from "@/components/ServicesSection";

import ProjectsSection from "@/components/ProjectsSection";


import ContactSection from "@/components/ContactSection";

export default function Page() {
  return (
    <main className="bg-[#020617] scroll-smooth">
      <Navbar />

      <HomeSection />
      <AboutSection />
        <SkillsSection />
        <EducationSection />
      <ServicesSection />
          <ProjectsSection />
      
     
      <ContactSection />
    </main>
  );
}
