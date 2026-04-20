import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Zap, Target, Layers, Terminal as TerminalIcon, Cpu, Command } from 'lucide-react';

const AIEdge = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full flex flex-col items-center"
    >
      <div className="w-full max-w-7xl px-8 flex flex-col items-center">
        {/* Intro Section */}
        <section className="w-full text-center flex flex-col items-center mb-20 md:mb-32">
           <div className="inline-flex items-center gap-2.5 px-5 py-1.5 rounded-full border border-cyan/5 glass-elite mb-10 text-cyan/50 text-[8px] md:text-[9px] font-black uppercase tracking-[4px] mx-auto shadow-lg">
            <Sparkles size={12} className="animate-pulse" /> The 10X Engineering Paradigm
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black heading-font tracking-tighter leading-tight mb-8 text-center w-full max-w-[20ch] uppercase">
            AI-Augmented <br /> <span className="text-accent-gradient">System Design.</span>
          </h1>
          
          <p className="text-gray/50 text-base md:text-lg max-w-2xl mx-auto leading-loose font-medium text-center">
            Synchronizing collaborative LLM agents to architecture, simulate, and stress-test complex systems for P99 reliability.
          </p>
        </section>

        {/* Capabilities */}
        <section className="w-full mb-24 md:mb-32 border-t border-white/5 pt-20 flex flex-col items-center">
           <div className="text-center mb-16">
              <h2 className="text-xl md:text-2xl font-black heading-font tracking-tighter uppercase whitespace-nowrap">Scalable <span className="text-blue">Workflows.</span></h2>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 w-full px-2 justify-items-center">
            {[
              {
                icon: <Brain className="text-cyan/40" size={24} />,
                title: "Agent Orchestration",
                desc: "Using custom agents to conduct deep-repo analysis, ensuring architectural consistency across 12M+ assets."
              },
              {
                icon: <Target className="text-blue/40" size={24} />,
                title: "P90 Automated QA",
                desc: "AI-assisted regression suites validating performance thresholds during every deployment cycle."
              },
              {
                icon: <Layers className="text-purple/40" size={24} />,
                title: "Rapid Prototyping",
                desc: "Reduced 'concept-to-production' lag. Built the Easthi 2.0 MVP in 8 weeks via AI-pair programming."
              }
            ].map(card => (
              <div key={card.title} className="p-9 md:p-11 glass-elite rounded-3xl border border-white/5 bg-white/[0.005] hover:border-cyan/10 transition-all group flex flex-col items-center w-full shadow-xl">
                <div className="mb-8 p-5 rounded-2xl bg-white/[0.02] flex items-center justify-center group-hover:scale-105 transition-transform duration-500 shadow-lg border border-white/5">
                  {card.icon}
                </div>
                <h3 className="text-base md:text-lg font-black mb-4 text-white/90 text-center uppercase tracking-tighter">{card.title}</h3>
                <p className="text-gray/50 text-sm leading-relaxed text-center font-medium max-w-[28ch]">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="w-full p-10 md:p-14 glass-elite rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-navy/40 to-navy relative flex flex-col items-center shadow-2xl overflow-hidden mb-20 md:mb-32">
           <div className="absolute -top-[10%] -right-[5%] opacity-[0.02] text-cyan pointer-events-none">
             <Cpu size={300} />
           </div>
           
           <div className="relative z-10 text-center w-full flex flex-col items-center">
            <h2 className="text-lg md:text-xl font-black heading-font mb-16 text-center uppercase tracking-tighter opacity-80 whitespace-nowrap">Active AI Tech Stack</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-10 md:gap-14 w-full justify-items-center">
              {[
                { name: "Cursor", usage: "AI-First Dev" },
                { name: "Claude 3.5", usage: "Architecture" },
                { name: "Windsurf", usage: "Debugging" },
                { name: "GPT-4o", usage: "Simulation" },
                { name: "Antigravity", usage: "Automation" },
                { name: "v0.dev", usage: "UI Blueprints" }
              ].map(tool => (
                <div key={tool.name} className="flex flex-col items-center gap-6 group">
                   <div className="w-16 h-16 md:w-24 md:h-24 rounded-3xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-gray/40 font-black text-[10px] md:text-xs uppercase tracking-tighter group-hover:border-cyan/20 group-hover:bg-cyan/5 group-hover:text-white/80 transition-all relative shadow-xl">
                     {tool.name.split(' ')[0]}
                   </div>
                   <div className="text-[7px] md:text-[8px] font-black text-cyan/20 uppercase tracking-[2px] group-hover:text-cyan/40 transition-colors">{tool.usage}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default AIEdge;
