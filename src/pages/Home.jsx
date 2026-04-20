import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal as TerminalIcon, Zap, Server, Code2 } from 'lucide-react';
import DevStand from '../components/DevStand';
import Terminal from '../components/Terminal';
import IntroSplash from '../components/IntroSplash';

const RESUME_DATA = {
  whoami: `Srikanth Purimitla\nJava Backend-Focused Full Stack Developer (Spring Boot | Kafka | React)`,
  introduction: `Java Full Stack Developer with 1 year of experience building scalable backend systems using Spring Boot and Kafka,\nwith frontend experience in React(Basics).\n\nWorked on multiple production-grade municipal systems handling millions of records.\nFocused on REST API development, database optimization, and performance improvement.`,
  skills: `Languages: Java\nBackend: Spring Boot, Spring Security, REST APIs, Microservices\nEvent Streaming: Apache Kafka\nDatabases: MySQL, PostgreSQL, Hibernate/JPA, jOOQ\nFrontend: React.js, Tailwind CSS(Basics)\nTools: Git, Maven, Docker \nOther: Quartz Scheduler, OpenPDF, Redis `,
  experience: `Backend Engineer @ CMS Computers Ltd. (May 2025 – Present)\n\nWorked on multiple large-scale government systems:\n\nEasthi 2.0 (Property Tax & Asset Management System)\n- Contributed to development and delivery within a 2-month timeline\n- Built and optimized REST APIs for high-volume property data processing\n- Implemented Quartz scheduler jobs for background aggregation and pre-computation\n- Optimized SQL queries, reducing API response time from 15s to 500ms (30X improvement)\n- Handled large datasets (10M+ records) ensuring performance and consistency\n\nMultiKhata System\n- Developed REST APIs for property data processing and workflow integration\n- Implemented dynamic PDF generation using OpenPDF\n- Built Quartz scheduler jobs for automation and batch processing\n- Optimized MySQL queries and indexing strategies\n\nPK Recruitment (GBA Migration)\n- Migrated legacy recruitment system to modular architecture (Ward/Zone based)\n- Developed backend logic using Spring Boot & JPA\n- Ensured zero data loss with validation during migration\n\nProperty GPS System\n- Built CRUD APIs for GPS-tagged property data\n- Implemented scheduled synchronization jobs for data updates\n- Added structured logging and error handling\n\nElectoral Roll Management System\n- Developed REST APIs for voter data ingestion and validation\n- Applied business rules and ensured transactional data integrity`,
  achievements: `- Improved API performance by 30X (15s → 500ms)\n- Worked on systems handling 12M+ records\n- Successfully migrated legacy system without data loss\n- Automated workflows using schedulers reducing manual effort\n- Delivered major backend system (Easthi 2.0) within 2 months by using ai agent`,
  deep_dive_performance: `Problem:\nLarge dataset caused slow API response when calculating counts dynamically\n\nSolution:\nImplemented Quartz Scheduler to precompute and store aggregated data in a separate table\n\nImpact:\nSignificantly reduced API response time and improved usability`,
  deep_dive_migration: `Problem:\nLegacy recruitment system needed migration without data loss\n\nSolution:\nDesigned APIs, implemented validation logic, and handled structured data migration\n\nImpact:\nMigration completed successfully with zero data loss`,
  projects: `E-Commerce Web Application (Full Stack - Personal Project)\n- Built using Spring Boot (backend) and React (frontend)\n- Implemented product catalog, cart, and order management\n- Developed REST APIs and handled backend logic\n- Integrated MySQL database\n- Designed responsive UI using React and Tailwind CSS`,
  ai: `- Used Cursor, Claude, and Antigravity for development acceleration and debugging\n- Leveraged Antigravity's agentic capabilities for complex architectural refactoring\n- Reduced repetitive coding effort while ensuring production-quality code.`,
  contact: `Email: srikanthpurimitla3@gmail.com\nMobile: +91 8096696726\nLinkedIn: https://linkedin.com/in/srikanth-purimitla`,
  exit: `Thank you for visiting.`
};

const Home = () => {
  const [activeSection, setActiveSection] = useState('whoami');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  const sections = [
    { id: 'whoami', name: 'whoami' },
    { id: 'introduction', name: 'introduction' },
    { id: 'skills', name: 'skills' },
    { id: 'experience', name: 'experience' },
    { id: 'achievements', name: 'achievements' },
    { id: 'deep_dive_performance', name: 'perf_deep_dive' },
    { id: 'deep_dive_migration', name: 'mig_deep_dive' },
    { id: 'projects', name: 'projects' },
    { id: 'ai', name: 'ai' },
    { id: 'contact', name: 'contact' },
    { id: 'exit', name: 'exit' }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col relative overflow-hidden bg-[#0A0F1E]">
      <AnimatePresence mode="wait">
        {!isIntroComplete ? (
          <IntroSplash key="intro" onComplete={() => setIsIntroComplete(true)} />
        ) : (
          <motion.div
            key="interface"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full min-h-screen flex flex-col"
          >
            {/* 🚀 COMMAND NAV */}
            <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-8 flex items-center justify-between pointer-events-auto">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center font-black text-xs text-cyan border border-cyan/20 shadow-[0_0_15px_rgba(6,182,212,0.2)]">S</div>
                <span className="text-[10px] font-black uppercase tracking-[4px] text-cyan/60 hidden md:block">SRIKANTH:/SYS$</span>
              </div>

              {/* Desktop CMD Buttons */}
              <div className="hidden lg:flex items-center gap-2 p-1.5 glass-elite rounded-2xl border border-white/5 bg-white/[0.02]">
                {sections.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setActiveSection(s.id)}
                    className={`px-4 py-2 rounded-lg text-[10px] font-mono tracking-widest transition-all relative
                      ${activeSection === s.id ? 'text-cyan bg-cyan/10 border border-cyan/20' : 'text-gray/40 hover:text-white hover:bg-white/5'}
                    `}
                  >
                    {`> ${s.name}`}
                    {activeSection === s.id && (
                      <motion.div layoutId="activeNav" className="absolute inset-0 bg-cyan/5 rounded-lg -z-10" />
                    )}
                  </button>
                ))}
              </div>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-3 glass-elite rounded-xl border border-white/10 text-cyan shadow-lg"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </nav>

            {/* 📱 Mobile Menu Overlay */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="fixed inset-0 z-[100] glass-elite backdrop-blur-2xl p-12 flex flex-col items-center justify-center gap-6 lg:hidden"
                >
                  {sections.map(s => (
                    <button
                      key={s.id}
                      onClick={() => { setActiveSection(s.id); setIsMenuOpen(false); }}
                      className={`text-base font-mono tracking-widest ${activeSection === s.id ? 'text-cyan' : 'text-white/40'}`}
                    >
                      {`> ${s.name}`}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* 🚀 MAIN INTERFACE */}
            <main className="flex-1 w-full max-w-[1750px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 py-32 lg:py-0 min-h-screen">

              {/* Left: The Developer Model Stand */}
              <div className="w-full lg:w-[42%] flex justify-center items-center h-full order-2 lg:order-1">
                <DevStand />
              </div>

              {/* Right: The Terminal Hub */}
              <div className="w-full lg:w-[58%] h-[600px] lg:h-[700px] relative z-10 order-1 lg:order-2">
                <Terminal command={activeSection} content={RESUME_DATA[activeSection]} />

                {/* Diagnostic Stats Overlay */}
                <div className="absolute -top-12 left-0 right-0 flex justify-between px-2 opacity-30">
                  <div className="flex items-center gap-3 text-[8px] font-black text-cyan tracking-[4px] uppercase underline underline-offset-8">
                    <Zap size={10} className="animate-pulse" /> COMMAND_PROCESSOR: {activeSection}
                  </div>
                  <div className="text-[8px] font-black text-gray/40 tracking-[4px] uppercase">
                    MEMORY_SECURE: PASS // CPU: 2%
                  </div>
                </div>
              </div>
            </main>

            {/* Background Ambience Icons */}
            <div className="absolute top-[20%] right-[10%] opacity-5 text-cyan animate-pulse-slow">
              <Server size={180} />
            </div>
            <div className="absolute bottom-[20%] left-[10%] opacity-5 text-blue animate-pulse-slow [animation-delay:2s]">
              <Code2 size={240} />
            </div>

            {/* 📥 FLOATING RESUME DOWNLOAD (LEFT SIDE) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="fixed left-6 bottom-32 z-50 hidden lg:block"
            >
              <a 
                href="/Srikanth_Purimitla_Java_FullStack_Developer.pdf"
                download="Srikanth_Purimitla_Java_FullStack_Developer.pdf"
                className="flex items-center gap-4 px-6 py-4 glass-elite rounded-2xl border border-cyan/20 bg-cyan/5 hover:bg-cyan/10 hover:border-cyan/40 transition-all group shadow-[0_0_30px_rgba(6,182,212,0.1)]"
              >
                <div className="bg-cyan/20 p-2 rounded-lg group-hover:scale-110 transition-transform">
                  <TerminalIcon size={16} className="text-cyan" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-[3px] text-cyan/60">System_Output</span>
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider">Download CV (.PDF)</span>
                </div>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
