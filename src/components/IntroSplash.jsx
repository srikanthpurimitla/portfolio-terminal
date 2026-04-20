import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield, Zap } from 'lucide-react';

const IntroSplash = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('INITIALIZING_CORE_SYSTEMS');

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4500); // 4.5 seconds for a full cinematic feel

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    const statusMessages = [
      'INITIALIZING_CORE_SYSTEMS',
      'ESTABLISHING_SECURE_TUNNEL',
      'SYNCING_NEURAL_INTERFACE',
      'ACCESS_GRANTED',
      'WELCOME_TO_MY_WORLD'
    ];

    let currentStatus = 0;
    const statusInterval = setInterval(() => {
      if (currentStatus < statusMessages.length - 1) {
        currentStatus++;
        setStatus(statusMessages[currentStatus]);
      } else {
        clearInterval(statusInterval);
      }
    }, 800);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
      clearInterval(statusInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#05070A] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.03]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-cyan/5 rounded-full blur-[120px] animate-pulse" />

      {/* Central Content */}
      <div className="relative flex flex-col items-center gap-12 w-full max-w-xl px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-4 mb-4">
             <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="text-cyan/40"
             >
                <Shield size={24} />
             </motion.div>
             <div className="h-px w-12 bg-white/10" />
             <div className="text-[10px] font-black text-cyan tracking-[6px] uppercase">Srikanth://Portal</div>
             <div className="h-px w-12 bg-white/10" />
             <Zap size={24} className="text-blue/40 animate-pulse" />
          </div>

          <AnimatePresence mode="wait">
            <motion.h1
              key={status}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="text-2xl md:text-4xl font-black heading-font text-white text-center tracking-tighter uppercase"
            >
              {status === 'WELCOME_TO_MY_WORLD' ? (
                <span className="text-accent-gradient">Welcome to my World.</span>
              ) : (
                status.replace(/_/g, ' ')
              )}
            </motion.h1>
          </AnimatePresence>
        </motion.div>

        {/* Progress System */}
        <div className="w-full flex flex-col gap-4">
           <div className="flex justify-between items-end">
              <div className="flex items-center gap-3">
                 <Terminal size={14} className="text-cyan/60" />
                 <span className="text-[8px] font-black text-white/20 uppercase tracking-[4px]">System_Link: {progress}%</span>
              </div>
              <div className="text-[7px] font-mono text-cyan/30 animate-pulse">0x8892A-STABLE</div>
           </div>
           
           <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden border border-white/5 relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="absolute top-0 left-0 bottom-0 bg-cyan shadow-[0_0_15px_cyan]"
              />
           </div>
        </div>

        {/* Decorative Scanning Line */}
        <motion.div 
          animate={{ y: [-300, 300] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent"
        />
      </div>

      {/* Bottom Technical Overlay */}
      <div className="absolute bottom-12 left-12 right-12 flex justify-between items-center opacity-20">
         <div className="text-[8px] font-black text-white/40 tracking-[4px] uppercase">Kernel_OS_v3.01</div>
         <div className="text-[8px] font-black text-white/40 tracking-[4px] uppercase flex gap-4">
            <span>Secure_Protocol</span>
            <span>Auth_Check</span>
         </div>
      </div>
    </motion.div>
  );
};

export default IntroSplash;
