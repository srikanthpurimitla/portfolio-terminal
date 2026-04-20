import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-8 py-3 md:py-4"
    >
      <div className="w-full mx-auto h-11 md:h-12 flex items-center justify-between glass-elite rounded-xl md:rounded-2xl px-5 md:px-10 border-white/10 shadow-xl backdrop-blur-md relative overflow-hidden group">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        {/* Left: Branding */}
        <NavLink to="/" className="flex items-center gap-3 group z-50 shrink-0">
          <div className="w-7 h-7 rounded-lg bg-blue/10 flex items-center justify-center font-black text-[10px] text-blue group-hover:bg-blue group-hover:text-white transition-all border border-blue/20">S</div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] md:text-xs font-black tracking-[1px] uppercase text-hero whitespace-nowrap">Srikanth P.</span>
            <div className="hidden sm:block w-px h-4 bg-white/10" />
            <span className="hidden sm:block text-[7px] md:text-[8px] font-bold tracking-[1px] uppercase text-gray opacity-60 whitespace-nowrap">Distributed Systems Engineer</span>
          </div>
        </NavLink>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 bg-white/[0.03] px-6 py-1.5 rounded-lg border border-white/5 mx-4">
          {[
            {name: 'Home', path: '/'},
            {name: 'Eng', path: '/engineering'},
            {name: 'AI Edge', path: '/ai-edge'},
            {name: 'Exp', path: '/experience'},
            {name: 'Contact', path: '/contact'}
          ].map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `
                text-[8px] xl:text-[9px] font-black uppercase tracking-[2px] transition-all relative whitespace-nowrap
                ${isActive ? 'text-cyan' : 'text-gray/60 hover:text-white'}
              `}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-underline-vfinal"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan shadow-[0_0_8px_cyan]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Right: CTA & Hamburger */}
        <div className="flex items-center gap-3 z-50 shrink-0">
          <NavLink 
            to="/contact" 
            className="hidden sm:flex px-4 py-2 rounded-lg bg-blue text-white text-[8px] font-black uppercase tracking-[2px] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all items-center gap-2 border border-blue/40 group/btn"
          >
            <Rocket size={12} className="group-hover:translate-x-0.5 transition-transform" />
            <span>Discuss Project</span>
          </NavLink>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray/80 hover:text-white transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-14 left-0 right-0 glass-elite rounded-xl border border-white/10 m-2 overflow-hidden lg:hidden"
            >
              <div className="p-6 flex flex-col items-center gap-5">
                {[
                  {name: 'Home', path: '/'},
                  {name: 'Engineering', path: '/engineering'},
                  {name: 'AI Edge', path: '/ai-edge'},
                  {name: 'Experience', path: '/experience'},
                  {name: 'Contact', path: '/contact'}
                ].map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) => `
                      text-[10px] font-black uppercase tracking-[3px] transition-all
                      ${isActive ? 'text-cyan' : 'text-gray'}
                    `}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
