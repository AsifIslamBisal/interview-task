import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const XLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);
const SocialPill = ({ name }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href="#"
      className="relative flex items-center justify-center p-2 text-gray-600 hover:text-black transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={false}
      layout
    >
      <XLogo className="w-4 h-4" />
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ width: 0, opacity: 0, marginLeft: 0 }}
            animate={{ width: 'auto', opacity: 1, marginLeft: 6 }}
            exit={{ width: 0, opacity: 0, marginLeft: 0 }}
            className="text-xs font-medium overflow-hidden whitespace-nowrap"
          >
            {name}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  );
};


const Header = () => {
  return (
    <div className="w-full flex justify-center pt-8 z-50">
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex items-center bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-full px-2 py-2 shadow-sm gap-2">
        <div className="pl-3 pr-2 border-r border-gray-200">
          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-black">
            
            <img src="https://framerusercontent.com/images/66wj6QOMNJl0FwYZztL5LCgYNGc.png" alt="" />
            
          </div>
        </div>

        <div className="flex items-center gap-1 px-1">
          <SocialPill name="Asif" />
          <SocialPill name="Bisal" />
        </div>
        <button className="bg-revamp-black text-white bg-black px-5 py-2 rounded-full text-sm font-medium hover:bg-black/80 transition-transform active:scale-95 flex items-center gap-2">
          Get a Revamp
        </button>
      </motion.nav>
    </div>
  );
};

export default Header;
