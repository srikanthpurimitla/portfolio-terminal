import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Link2, Code2, MessageSquare, Terminal, ShieldCheck } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full flex flex-col items-center"
    >
      <div className="w-full max-w-7xl px-8 flex flex-col items-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-1.5 rounded-full border border-blue/10 glass-elite mb-12 md:mb-16 text-blue/40 text-[8px] md:text-[9px] font-black uppercase tracking-[3px] shadow-lg mx-auto">
          <ShieldCheck size={12} /> Open for SDE-II / Infrastructure Roles
        </div>
        
        {/* Header */}
        <section className="w-full text-center flex flex-col items-center mb-20 md:mb-32">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black heading-font tracking-tighter leading-tight mb-12 text-hero text-center uppercase">
            Build <br className="sm:hidden" /> <span className="text-accent-gradient">At Scale.</span>
          </h1>
          <p className="text-gray/50 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed text-center">
            Currently accepting inquiries for high-throughput distributed systems and core infrastructure engineering.
          </p>
        </section>

        {/* Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-24 md:mb-40 w-full max-w-5xl justify-items-center">
          <a 
            href="mailto:srikanthpurimitla3@gmail.com"
            className="group p-10 md:p-14 glass-elite rounded-[2.5rem] border border-white/5 bg-white/[0.005] flex flex-col items-center gap-8 hover:border-blue/10 transition-all shadow-2xl w-full"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue/5 border border-blue/10 flex items-center justify-center text-blue/30 group-hover:text-blue group-hover:scale-105 transition-all shadow-lg">
              <Mail size={32} />
            </div>
            <div className="flex flex-col items-center overflow-hidden w-full gap-3">
              <div className="text-[9px] font-black text-gray/30 uppercase tracking-[4px]">Professional Inquiry</div>
              <div className="text-base md:text-lg lg:text-xl font-black text-center truncate w-full opacity-60 group-hover:opacity-100 transition-opacity uppercase tracking-tighter leading-relaxed">srikanthpurimitla3@gmail.com</div>
            </div>
          </a>

          <a 
            href="https://linkedin.com/in/srikanth-purimitla"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-10 md:p-14 glass-elite rounded-[2.5rem] border border-white/5 bg-white/[0.005] flex flex-col items-center gap-8 hover:border-cyan/10 transition-all shadow-2xl w-full"
          >
            <div className="w-16 h-16 rounded-2xl bg-cyan/5 border border-cyan/10 flex items-center justify-center text-cyan/30 group-hover:text-cyan group-hover:scale-105 transition-all shadow-lg">
              <Link2 size={32} />
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="text-[9px] font-black text-gray/30 uppercase tracking-[4px]">Network Hub</div>
              <div className="text-base md:text-lg lg:text-xl font-black text-center opacity-60 group-hover:opacity-100 transition-opacity uppercase tracking-tighter leading-relaxed">LinkedIn Networking</div>
            </div>
          </a>

          <a 
            href="tel:+918096696726"
            className="group p-10 md:p-14 glass-elite rounded-[2.5rem] border border-white/5 bg-white/[0.005] flex flex-col items-center gap-8 hover:border-blue/10 transition-all shadow-2xl w-full lg:col-span-2 max-w-2xl mx-auto"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue/5 border border-blue/10 flex items-center justify-center text-blue/30 group-hover:text-blue group-hover:scale-105 transition-all shadow-lg">
              <span className="text-2xl font-black italic">#</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="text-[9px] font-black text-gray/30 uppercase tracking-[4px]">Direct Line</div>
              <div className="text-base md:text-lg lg:text-xl font-black text-center opacity-60 group-hover:opacity-100 transition-opacity uppercase tracking-tighter leading-relaxed">+91 8096696726</div>
            </div>
          </a>
        </div>

        {/* Formal Footer */}
        <div className="flex flex-col items-center gap-12 w-full pt-24 border-t border-white/5">
           <div className="flex flex-col items-center gap-8">
              <div className="flex items-center gap-6 opacity-20 grayscale saturate-0">
                 <Terminal size={18} />
                 <Code2 size={18} />
                 <MessageSquare size={18} />
              </div>
              <div className="text-[9px] font-black text-gray/10 uppercase tracking-[8px] md:tracking-[12px] text-center px-4 leading-loose">ARCHITECTURE • INTEGRITY • PERFORMANCE</div>
           </div>
           
           <div className="flex flex-col items-center gap-4 mb-20">
              <div className="text-[9px] text-gray/10 font-black uppercase tracking-[4px]">Designed & Engineered for MNC Standards</div>
              <div className="text-[8px] text-gray/5 font-bold uppercase tracking-[3px]">Srikanth Purimitla © 2026 • Distributed Systems Hub</div>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
