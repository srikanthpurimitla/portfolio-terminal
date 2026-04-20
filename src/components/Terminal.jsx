import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, ChevronRight, Square } from 'lucide-react';

const Terminal = ({ command, content, title = "srikanth@sys:~$ system-viewer" }) => {
  const [displayedCommand, setDisplayedCommand] = useState('');
  const [displayedContent, setDisplayedContent] = useState('');
  const [phase, setPhase] = useState('command'); // 'command', 'delay', 'content'
  const scrollRef = useRef(null);

  // Phase 1 & 2 & 3: Sequential Typing Logic
  useEffect(() => {
    if (!content || !command) return;
    
    // RESET INSTANTLY: Clear previous state before delay
    setPhase('command');
    setDisplayedCommand('');
    setDisplayedContent('');
    
    // DELAYED START: Wait for cinematic feel
    const bootTimeout = setTimeout(() => {
      let cmdIndex = 0;
      const cmdInterval = setInterval(() => {
        setDisplayedCommand(command.slice(0, cmdIndex + 1));
        cmdIndex++;
        
        if (cmdIndex >= command.length) {
          clearInterval(cmdInterval);
          setTimeout(() => setPhase('content'), 300); // 300ms pause after command
        }
      }, 40); // Slower, more deliberate command typing

      return () => clearInterval(cmdInterval);
    }, 1500); // 1.5s delay for boot sequence

    return () => clearTimeout(bootTimeout);
  }, [command, content]);

  useEffect(() => {
    if (phase !== 'content') return;
    
    let contentIndex = 0;
    const contentInterval = setInterval(() => {
      setDisplayedContent(content.slice(0, contentIndex + 1));
      contentIndex++;
      
      if (contentIndex >= content.length) {
        clearInterval(contentInterval);
      }
    }, 5); // Fast output typing

    return () => clearInterval(contentInterval);
  }, [phase, content]);

  // Auto-scroll logic
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [displayedCommand, displayedContent]);

  return (
    <div className="w-full h-full flex flex-col glass-elite rounded-2xl border border-white/10 shadow-[0_35px_80px_-15px_rgba(0,0,0,0.6)] overflow-hidden bg-[#0D1224]/80 backdrop-blur-3xl">
      {/* Terminal Title Bar */}
      <div className="bg-white/[0.05] px-6 py-4 flex items-center justify-between border-b border-white/5">
        <div className="flex gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] opacity-60" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] opacity-60" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] opacity-60" />
        </div>
        <div className="text-[9px] font-black uppercase tracking-[3.5px] text-gray/40 flex items-center gap-3">
          <TerminalIcon size={12} className="text-cyan/40" />
          {title}
        </div>
        <div className="text-[8px] text-cyan/20 font-mono tracking-widest hidden md:block">
           SECURE_SHELL_V3
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={scrollRef}
        className="flex-1 p-8 md:p-12 overflow-y-auto font-mono text-[13px] md:text-sm leading-relaxed md:leading-loose custom-scrollbar"
      >
        <div className="flex flex-col gap-8 w-full">
           {/* The Active Command Line */}
           <div className="flex items-center gap-4 text-cyan/80">
              <span className="text-green-500/60 font-black tracking-tighter">$</span>
              <span className="font-bold tracking-widest uppercase">
                {`> ${displayedCommand}`}
                {phase === 'command' && (
                  <motion.span 
                    animate={{ opacity: [1, 0] }} 
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className="inline-block w-2.5 h-4 bg-cyan/50 ml-1 translate-y-0.5"
                  />
                )}
              </span>
           </div>

           {/* The Output Stream */}
           <AnimatePresence mode="wait">
              {phase === 'content' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="whitespace-pre-wrap text-gray/40 font-medium"
                >
                  {displayedContent.split('\n').map((line, i) => {
                    const isBullet = line.startsWith('- ');
                    const isHeader = line.endsWith(')') && line.includes('('); // Match Experience e.g. "Backend Engineer @ CMS (May 2024)"
                    
                    return (
                      <div key={i} className={`mb-1.5 flex gap-3 ${isBullet ? 'pl-4' : ''}`}>
                         {isBullet && <div className="w-1.5 h-1.5 rounded-sm bg-cyan/20 mt-2 shrink-0" />}
                         <span className={`
                           ${isHeader ? 'text-white font-black uppercase tracking-tight text-sm' : ''}
                           ${!isHeader && line.endsWith(':') ? 'text-cyan/60 font-black uppercase tracking-[2px] text-[10px] mt-4 block mb-2' : ''}
                         `}>
                           {line.split(' ').map((word, index) => {
                             if (word.startsWith('http')) {
                               return (
                                 <a key={index} href={word} target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline hover:text-cyan/80 transition-all mr-1">
                                   {word}
                                 </a>
                               );
                             }
                             return word + (index === line.split(' ').length - 1 ? '' : ' ');
                           })}
                         </span>
                      </div>
                    );
                  })}
                  
                  {phase === 'content' && displayedContent.length < content.length && (
                    <motion.span 
                      animate={{ opacity: [1, 0] }} 
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-cyan ml-1 translate-y-0.5 shadow-[0_0_8px_cyan]"
                    />
                  )}
                </motion.div>
              )}
           </AnimatePresence>
        </div>
      </div>

      {/* Footer System Info */}
      <div className="bg-white/[0.01] px-8 py-3 text-[8px] font-black uppercase tracking-[4px] text-gray/10 border-t border-white/5 flex justify-between">
         <span>Srikanth Purimitla // Root_Authorized</span>
         <span className="flex gap-4">
            <span className="text-cyan/10">KERNEL: 5.10.0-VITE</span>
            <span className="text-blue/10">STABLE</span>
         </span>
      </div>
    </div>
  );
};

export default Terminal;
