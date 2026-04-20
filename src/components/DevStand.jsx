import React from 'react';
import { motion } from 'framer-motion';
import devImage from '../assets/dev_stand.png';

const DevStand = () => {
  return (
    <div className="relative w-full h-[350px] md:h-[600px] flex items-center justify-center perspective-1000">
      {/* Pedestal Base */}
      <div className="absolute bottom-6 md:bottom-10 w-48 md:w-64 h-16 md:h-24 bg-blue/10 rounded-[100%] border border-blue/20 blur-md animate-pulse" />
      <div className="absolute bottom-10 md:bottom-16 w-36 md:w-48 h-8 md:h-12 bg-cyan/20 rounded-[100%] border border-cyan/40 shadow-[0_0_30px_rgba(6,182,212,0.3)] md:shadow-[0_0_50px_rgba(6,182,212,0.5)]" />
      
      {/* Holographic Rays */}
      <div className="absolute bottom-14 md:bottom-20 w-1 h-48 md:h-64 bg-gradient-to-t from-cyan/40 to-transparent blur-sm opacity-20" />
      <div className="absolute bottom-14 md:bottom-20 w-24 md:w-32 h-48 md:h-64 bg-gradient-to-t from-blue/5 to-transparent skew-x-12 opacity-10" />

      {/* The Developer Model */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotateY: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative z-10 w-full max-w-[280px] md:max-w-md pointer-events-none select-none drop-shadow-[0_0_20px_rgba(59,130,246,0.2)] md:drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
      >
        <img 
          src={devImage} 
          alt="Srikanth P." 
          className="w-full h-auto object-contain mask-gradient-to-b"
        />
        
        {/* Scanning Line Animation */}
        <motion.div 
          animate={{ y: [0, 300, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-px bg-cyan/40 shadow-[0_0_10px_cyan]"
        />
      </motion.div>

      {/* Floating Status Particles */}
      <div className="absolute top-1/4 left-1/4 w-1.5 md:w-2 h-1.5 md:h-2 bg-blue-400/20 rounded-full animate-ping" />
      <div className="absolute bottom-1/3 right-1/4 w-1 md:w-1.5 h-1 md:h-1.5 bg-cyan-400/20 rounded-full animate-bounce [animation-delay:1s]" />
      <div className="absolute top-1/2 right-12 md:right-20 w-2 md:w-3 h-2 md:h-3 bg-purple-400/10 rounded-full blur-sm" />
    </div>
  );
};

export default DevStand;
