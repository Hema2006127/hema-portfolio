import ServiceCard from "./ServiceCard";
import { servicesData } from "./data/servicesData";

const ServicesSection = () => {
  return (
    // 👈 الخلفية كحلي غامق سادة تماماً بدون أي إضافات
    <section id="services" className="relative py-32 bg-[#020617] scroll-mt-20">
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-blue-400">
              Expertise & Solutions
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-none">
            Services I <span className="text-blue-500">Offer</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mb-8" />

          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Delivering high-performance software solutions focused on scalability, 
            cutting-edge architecture, and seamless user experiences.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
            />
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-20 text-center">
          <p className="text-slate-500 text-sm font-mono tracking-widest uppercase">
            Ready to build something extraordinary?
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;