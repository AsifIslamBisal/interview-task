import { Sparkles } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full py-16 px-4 sm:px-8 lg:px-20 xl:px-40">
      <div className="max-w-3xl mx-auto text-center space-y-5 mt-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Now,
        </h1>
        <h3 className="font-semibold text-lg sm:text-xl md:text-2xl text-gray-800">
          I think you should get that god damn design
        </h3>
        <h2 className="font-serif italic font-medium relative inline-block text-xl sm:text-2xl md:text-3xl text-gray-800">
          Revamped
        </h2>
        <button className="group relative bg-black text-white text-base sm:text-lg font-medium w-full sm:w-[400px] md:w-[500px] h-12 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden mx-auto">
          <span className="relative z-10 flex items-center gap-2">
            I want a Revamp <Sparkles className="w-5 h-5 text-yellow-200" />
          </span>
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
        </button>
      </div>
      <div className="max-w-3xl mx-auto text-center mt-20 space-y-5">
        <h2 className="font-semibold text-lg sm:text-xl md:text-2xl text-gray-900">
          Need something different?
        </h2>
        <h2 className="font-semibold text-lg sm:text-xl md:text-2xl text-gray-900">
          Don’t mind sharing
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Let us know if we are your fit, for your awesome exceptional work!
        </p>

        <a
          href="mailto:bisalasif@gmail.com"
          className="inline-block bg-white text-black font-medium text-base sm:text-lg px-6 sm:px-8 py-3 rounded-xl border border-gray-400 hover:bg-gray-100 transition-all duration-300"
        >
          Send us Mail at <span className="font-semibold">bisalasif@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
