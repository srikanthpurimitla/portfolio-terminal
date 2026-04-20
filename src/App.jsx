import React from 'react';

// Layout & Components
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="w-full min-h-screen relative selection:bg-cyan selection:text-navy scroll-smooth font-sans text-white bg-navy overflow-hidden">
      {/* --- GLOBAL UI LAYER --- */}
      <div className="bg-elite fixed inset-0 z-[-2]" />
      <div className="bg-dot-grid fixed inset-0 opacity-[0.05] z-[-2]" />
      <div className="gradient-blob top-[10%] -left-[10%] animate-pulse-slow fixed w-[60vw] h-[60vw] z-[-1] opacity-20" />
      <div className="gradient-blob bottom-[10%] -right-[10%] animate-pulse-slow fixed w-[60vw] h-[60vw] z-[-1] opacity-20" style={{ animationDelay: '3s' }} />
      
      {/* The Single Source of Truth for the Terminal Portal */}
      <Home />

      {/* --- REFINED MINI FOOTER --- */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 py-4 px-10 flex justify-between items-center bg-navy/30 backdrop-blur-md border-t border-white/5 pointer-events-none">
         <div className="text-[8px] font-black text-gray/20 uppercase tracking-[4px]">
            Srikanth Purimitla // Terminal_Portal_v3.01
         </div>
         <div className="flex gap-6 text-[8px] font-black text-cyan/10 uppercase tracking-[3px]">
            <span>System_Active</span>
            <span>Auth_Verified</span>
         </div>
      </footer>
    </div>
  );
};

export default App;
