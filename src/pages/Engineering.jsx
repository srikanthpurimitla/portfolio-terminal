import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Zap, Cpu, Monitor, Workflow, Database, AlertCircle, CheckCircle2, Server } from 'lucide-react';

const ArchitectureDiagram = () => (
  <div className="w-full flex flex-col items-center gap-12 md:gap-16">
    <div className="text-center relative z-10 w-full">
      <div className="text-cyan/40 text-[8px] md:text-[9px] font-black uppercase tracking-[5px] mb-4 text-center">SYSTEM DESIGN BLUEPRINTS</div>
      <h2 className="text-xl md:text-2xl font-black heading-font tracking-tighter text-center leading-tight uppercase">High-Availability <br className="lg:hidden" /> <span className="text-blue">Core.</span></h2>
    </div>
    
    <div className="relative w-full flex flex-col items-stretch justify-center gap-6 md:gap-10 p-8 md:p-12 glass-elite rounded-2xl border-white/5 bg-navy/20">
      {/* Entrance */}
      <div className="flex flex-col gap-4 w-full">
        <div className="p-6 glass-elite rounded-xl border-white/5 text-center flex flex-col items-center justify-center">
          <Monitor className="text-blue/40 mb-3" size={24} />
          <div className="text-[9px] font-black uppercase tracking-widest text-gray/50 leading-tight">Edge Gateway</div>
        </div>
      </div>

      <div className="flex justify-center items-center text-white/5 py-2">
         <Zap size={20} className="rotate-90" />
      </div>

      {/* Logic */}
      <div className="p-8 glass-elite rounded-[2rem] border-cyan/10 w-full bg-white/[0.01] relative flex flex-col items-center shadow-2xl">
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-blue text-white text-[8px] font-black uppercase tracking-widest whitespace-nowrap z-30 shadow-xl">Service Layer</div>
        <Cpu className="text-cyan/30 mb-6" size={40} />
        <div className="text-xs font-black uppercase tracking-widest text-center mb-6 text-white/80">Spring Microservices</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
          <div className="text-[9px] text-gray/40 uppercase font-black text-center border border-white/5 rounded-md py-3 px-2">Redis Cache</div>
          <div className="text-[9px] text-gray/40 uppercase font-black text-center border border-white/5 rounded-md py-3 px-2">Auth0 IAM</div>
        </div>
      </div>

      <div className="flex justify-center items-center text-white/5 py-2">
         <Zap size={20} className="rotate-90" />
      </div>

      {/* Storage/Event */}
      <div className="flex flex-col gap-4 w-full">
        <div className="p-6 glass-elite rounded-xl border-white/5 text-center flex flex-col items-center justify-center">
          <Workflow className="text-purple/40 mb-3" size={24} />
          <div className="text-[9px] font-black uppercase tracking-widest text-gray/50 leading-tight">Kafka Bus</div>
        </div>
        <div className="p-6 glass-elite rounded-xl border-white/5 text-center flex flex-col items-center justify-center">
          <Database className="text-blue/40 mb-3" size={24} />
          <div className="text-[9px] font-black uppercase tracking-widest text-gray/50 leading-tight">PostgreSQL</div>
        </div>
      </div>
    </div>
  </div>
);

const CaseStudyMetric = () => (
  <div className="w-full flex flex-col items-center gap-12 md:gap-16">
    <div className="text-center relative z-10 w-full">
       <div className="text-cyan/40 text-[8px] md:text-[9px] font-black uppercase tracking-[6px] mb-5">IMPACT CASE STUDY</div>
       <h2 className="text-2xl md:text-3xl font-black heading-font tracking-tighter leading-tight uppercase">Performance <span className="text-accent-gradient uppercase">Refactoring.</span></h2>
    </div>

    <div className="flex flex-col gap-10 md:gap-12 w-full items-center">
      {/* Problem */}
      <div className="glass-elite p-10 md:p-12 rounded-[2.5rem] border-red-500/10 flex flex-col items-center text-center gap-8 bg-red-500/[0.005] w-full relative">
         <div className="flex items-center gap-3 text-red-400 opacity-60">
            <AlertCircle size={20} />
            <span className="text-[10px] font-black uppercase tracking-[2px]">The Problem</span>
         </div>
         <h4 className="text-lg md:text-xl font-black text-white/80 leading-tight uppercase tracking-tighter">Synchronous <br /> Latency</h4>
         <p className="text-[14px] text-gray/50 leading-relaxed font-medium max-w-[28ch]">Legacy spatial engine processing massive data synchronously, leading to 15-second timeouts.</p>
         <div className="mt-auto pt-8 border-t border-white/5 w-full">
            <div className="text-2xl font-black text-red-500/30 tracking-tighter uppercase whitespace-nowrap">15,000ms SLA</div>
         </div>
      </div>

      {/* Solution */}
      <div className="glass-elite p-10 md:p-12 rounded-[2.5rem] border-cyan/10 flex flex-col items-center text-center gap-8 bg-cyan/[0.015] relative w-full shadow-2xl overflow-visible">
         <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-cyan text-navy text-[8px] font-black uppercase tracking-widest shadow-2xl z-20 whitespace-nowrap uppercase">Architectural Pivot</div>
         <div className="flex items-center gap-3 text-cyan">
            <Server size={20} />
            <span className="text-[10px] font-black uppercase tracking-[2px]">The Solution</span>
         </div>
         <h4 className="text-lg md:text-xl font-black text-white leading-tight uppercase tracking-tighter">Event-Driven <br /> Pipeline</h4>
         <p className="text-[14px] text-white/70 leading-relaxed font-medium max-w-[30ch]">Decoupled aggregation via Kafka. Parallel workers with Quartz for background pre-computation.</p>
         <div className="flex flex-wrap gap-2 mt-2 justify-center">
            {["Kafka", "Queues", "Workers"].map(t => (
               <span key={t} className="text-[8px] font-black text-cyan/50 uppercase tracking-widest px-3 py-1.5 rounded-lg border border-cyan/10 bg-cyan/5 whitespace-nowrap">{t}</span>
            ))}
         </div>
      </div>

      {/* Result */}
      <div className="glass-elite p-10 md:p-12 rounded-[2.5rem] border-green-500/10 flex flex-col items-center text-center gap-8 bg-green-500/[0.005] w-full relative">
         <div className="flex items-center gap-3 text-green-400 opacity-60">
            <CheckCircle2 size={20} />
            <span className="text-[10px] font-black uppercase tracking-[2px]">The Result</span>
         </div>
         <h4 className="text-lg md:text-xl font-black text-white/80 leading-tight uppercase tracking-tighter">30X Speedup <br /> Achieved</h4>
         <p className="text-[14px] text-gray/50 leading-relaxed font-medium max-w-[28ch]">Reduced perceived latency to sub-second levels while maintaining 100% data integrity.</p>
         <div className="mt-auto pt-8 border-t border-white/5 w-full">
            <div className="text-3xl font-black text-cyan tracking-tighter uppercase whitespace-nowrap">500ms SLA</div>
         </div>
      </div>
    </div>
  </div>
);

const Engineering = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full flex flex-col items-center"
    >
      <div className="w-full max-w-7xl px-8 flex flex-col items-center text-center gap-24 md:gap-32">
        {/* Top Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start w-full">
           {/* Column 1: Case Study */}
           <section className="w-full">
             <CaseStudyMetric />
           </section>

           {/* Column 2: Blueprint */}
           <section className="w-full pt-16 lg:pt-0 lg:border-l border-white/5 lg:pl-24">
             <ArchitectureDiagram />
           </section>
        </div>
        
        {/* Project Details Footer */}
        <div className="w-full flex flex-col items-center border-t border-white/5 pt-24">
           <div className="text-center mb-16">
              <div className="text-gray/20 text-[9px] font-black tracking-[6px] uppercase mb-4">SYSTEM ARTIFACTS</div>
              <h2 className="text-xl md:text-2xl font-black heading-font tracking-tighter uppercase">Deployed <span className="text-blue">Core.</span></h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 justify-items-center w-full max-w-5xl">
             <div className="p-10 md:p-14 glass-elite rounded-3xl border-white/5 text-center flex flex-col items-center w-full group hover:border-cyan/10 transition-all bg-white/[0.002]">
               <h4 className="text-base md:text-lg font-black mb-6 text-white/80 uppercase tracking-tighter text-center">Easthi Core Micro</h4>
               <p className="text-gray/50 text-[14px] md:text-base leading-relaxed mb-8 font-medium max-w-[35ch] text-center">Architecting municipal microservices handling 12M+ records with transactional consistency.</p>
               <ul className="flex flex-wrap gap-4 justify-center text-[8px] text-gray/30 font-black uppercase tracking-widest whitespace-nowrap">
                 <li>• Data Sync</li>
                 <li>• Tax Engines</li>
                 <li>• Citizen Vault</li>
               </ul>
             </div>
             <div className="p-10 md:p-14 glass-elite rounded-3xl border-white/5 text-center flex flex-col items-center w-full group hover:border-blue/10 transition-all bg-white/[0.002]">
               <h4 className="text-base md:text-lg font-black mb-6 text-white/80 uppercase tracking-tighter text-center">Event Streams</h4>
               <p className="text-gray/50 text-[14px] md:text-base leading-relaxed mb-8 font-medium max-w-[35ch] text-center">Built high-throughput recruitment pipelines for 12,000+ candidates using Kafka and workers.</p>
               <ul className="flex flex-wrap gap-4 justify-center text-[8px] text-gray/30 font-black uppercase tracking-widest whitespace-nowrap">
                 <li>• Scoring</li>
                 <li>• Resilient Topics</li>
                 <li>• Partitioning</li>
               </ul>
             </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Engineering;
