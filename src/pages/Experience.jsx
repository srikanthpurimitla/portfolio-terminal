import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, Briefcase, Download, MapPin, Milestone, Server, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "CMS Computers Ltd. (Government Systems Hub)",
      role: "Java Backend-Focused Full Stack Developer",
      period: "May 2025 – Present",
      location: "Bengaluru, India",
      impact: [
        "Easthi 2.0: Architected Property Tax engine & PDF pipelines for 12M+ records.",
        "MultiKhata: Built automated workflows & dynamic reporting using OpenPDF.",
        "PK Recruitment: Led zero-loss migration of legacy systems to modular Spring Boot.",
        "System Perf: Optimized SQL queries reducing response times from 15s to 500ms.",
        "Automation: Implemented complex Quartz-based background computation services."
      ],
      stack: ["Java 17", "Spring Boot", "Kafka", "Postgres", "jOOQ", "Quartz", "OpenPDF"]
    },
    {
      company: "Bapatla Engineering College",
      role: "Engineering Graduate",
      period: "2021 – 2025",
      location: "Andhra Pradesh",
      impact: [
        "Specialized in Java development and distributed systems architecture.",
        "Engineered academic prototypes focusing on secure backend workflows.",
        "Maintained high academic standing while contributing to open-source projects."
      ],
      stack: ["Core Java", "Python", "SQL", "Network Security"]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full flex flex-col items-center"
    >
      <div className="w-full max-w-7xl px-8 flex flex-col items-center">
        {/* Header Section */}
        <div className="w-full text-center mb-20 md:mb-32 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-blue/5 glass-elite mb-10 text-blue/40 text-[8px] md:text-[9px] font-black uppercase tracking-[4px] mx-auto shadow-lg">
            <Award size={12} /> Professional Trajectory
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black heading-font tracking-tighter leading-tight mb-10 text-hero uppercase">Career Timeline.</h1>
          
          <div className="flex flex-col items-center gap-8">
            <p className="text-gray/50 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">From designing academic prototypes to architecting municipal infrastructure.</p>
            <a 
              href="/resume.pdf" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-blue text-white text-[8px] font-black uppercase tracking-[3px] hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all border border-blue/40 group shadow-xl"
            >
              <Download size={14} className="group-hover:translate-y-0.5 transition-transform" /> 
              <span>Download CV (.PDF)</span>
            </a>
          </div>
        </div>

        {/* Timeline Hub */}
        <div className="relative w-full max-w-5xl">
           {/* Center Line */}
           <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue/20 via-blue/5 to-transparent opacity-10" />

           <div className="space-y-24 md:space-y-40">
             {experiences.map((exp, index) => (
               <div key={exp.company} className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:items-start gap-12 md:gap-0`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-[20px] md:left-1/2 top-3 md:top-8 -translate-x-1/2 z-20">
                     <div className="w-2.5 h-2.5 rounded-full bg-navy border-2 border-cyan shadow-[0_0_8px_cyan]" />
                  </div>

                  {/* Card Side */}
                  <div className="w-full md:w-[45%] pl-12 md:pl-0">
                     <div className="glass-elite rounded-[2.5rem] p-8 md:p-11 border border-white/5 hover:border-cyan/10 transition-all group flex flex-col items-center text-center gap-8 bg-white/[0.002] shadow-2xl">
                        <div className="flex flex-col items-center gap-3">
                           <div className="flex items-center gap-2 text-cyan/30 text-[8px] font-black uppercase tracking-widest">
                              <Calendar size={12} /> {exp.period}
                           </div>
                           <h3 className="text-lg md:text-xl font-black text-white/90 leading-tight uppercase tracking-tighter text-center">{exp.company}</h3>
                           <div className="inline-flex items-center gap-2 text-blue/60 text-[9px] font-black uppercase tracking-widest">
                              <Briefcase size={12} /> {exp.role}
                           </div>
                        </div>

                        <div className="flex flex-col items-center gap-6 w-full">
                           {exp.impact.map((point, i) => (
                             <div key={i} className="flex flex-col items-center gap-2 group/item max-w-[45ch]">
                                <div className="flex items-center gap-2">
                                   <CheckCircle2 size={12} className="text-cyan/20 shrink-0" />
                                   <span className="text-[7px] font-black text-cyan/10 uppercase tracking-widest">Achievement_{i + 1}</span>
                                </div>
                                <p className="text-gray/50 text-[13px] md:text-sm leading-relaxed font-medium group-hover/item:text-white/80 transition-colors text-center">{point}</p>
                             </div>
                           ))}
                        </div>

                        <div className="pt-8 border-t border-white/5 flex flex-wrap gap-2.5 justify-center w-full">
                           {exp.stack.map(tech => (
                             <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[7px] font-black uppercase tracking-widest text-gray/30 group-hover:border-cyan/10 transition-all">
                                {tech}
                             </span>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Spacer label */}
                  <div className="hidden md:flex w-[10%] px-4 pt-16 flex-col items-center">
                     <div className="text-[9px] font-black text-white/5 uppercase tracking-[6px] rotate-90 whitespace-nowrap origin-center">ENGINEERING_STAGE_{index + 1}</div>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
