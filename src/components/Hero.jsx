import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Avatar = ({ src, alt, className = "", style = {} }) => (
  <div
    className={`w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-lg ${className}`}
    style={style}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, filter: "blur(10px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 100, damping: 20, mass: 1 },
    },
  };

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center mt-20 sm:mt-32 text-center max-w-4xl mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-center -space-x-2 mb-8"
      >
        <Avatar src="https://i.ibb.co.com/GQSKtfwz/1723144611280.jpg" alt="Jay" className="z-10" />
        <Avatar src="https://picsum.photos/seed/satya/200" alt="Satya" className="z-20" />
      </motion.div>
      <motion.h1
        variants={itemVariants}
        className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-revamp-black mb-2 leading-[1.1]"
      >
        Hey, it’s Asif and Bisal,
      </motion.h1>

      <motion.div
        variants={itemVariants}
        className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-revamp-black mb-8 leading-[1.1] flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-4"
      >
        <span>and yes we</span>
        <span className="font-serif italic font-medium relative inline-block">
          Revamp
          <svg
            className="absolute w-full h-3 -bottom-1 left-0 text-gray-200 -z-10"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M0 5 Q 50 10 100 5"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
          </svg>
        </span>
        <span className="font-hand font-normal text-2xl sm:text-3xl md:text-4xl text-gray-400 -rotate-6 self-end -translate-y-3 sm:-translate-y-4">
          (your designs)
        </span>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-2 mb-10 bg-green-50 px-3 py-1.5 rounded-full border border-green-100"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-revamp-green opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600"></span>
        </span>
        <span className="text-sm font-medium text-green-600">
          Available for new revamps
        </span>
      </motion.div>
      <motion.div variants={itemVariants}>
        <button className="group relative bg-black text-white text-lg font-medium px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 overflow-hidden">
          <span className="relative z-10 flex items-center gap-2">
            I want a Revamp <Sparkles className="w-5 h-5 text-yellow-200" />
          </span>
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]  from-gray-100 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"
      />
    </motion.div>
  );
};

export default Hero;
