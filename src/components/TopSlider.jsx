import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronsLeftRight } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Data to Design Perfection",
    beforeImg: "https://picsum.photos/seed/before1/600/400?grayscale&blur=2",
    afterImg: "https://picsum.photos/seed/after1/600/400",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Interface Reimagined",
    beforeImg: "https://picsum.photos/seed/before2/600/400?grayscale&blur=2",
    afterImg: "https://picsum.photos/seed/after2/600/400",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Clean Modern Layout",
    beforeImg: "https://picsum.photos/seed/before3/600/400?grayscale&blur=2",
    afterImg: "https://picsum.photos/seed/after3/600/400",
  },
  {
    id: 4,
    title: "Project Four",
    description: "Minimalist Aesthetic",
    beforeImg: "https://picsum.photos/seed/before4/600/400?grayscale&blur=2",
    afterImg: "https://picsum.photos/seed/after4/600/400",
  },
];

const Card = ({ project, type }) => (
  <div className="relative shrink-0 w-[300px] sm:w-[350px] md:w-[400px] h-[220px] sm:h-[280px] md:h-[400px] rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-lg select-none">
    <img
      src={type === "before" ? project.beforeImg : project.afterImg}
      alt={project.title}
      className="w-full h-full object-cover"
      draggable={false}
    />
    <div
      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center py-2 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wide ${
        type === "before"
          ? "bg-white text-black border-t border-gray-200"
          : "bg-black text-white"
      }`}
    >
      {type}
    </div>
  </div>
);

const MarqueeTrack = ({ type }) => (
  <div className="flex items-center gap-4 sm:gap-6 animate-marquee will-change-transform">
    {projects.map((p) => (
      <Card key={`${type}-${p.id}`} project={p} type={type} />
    ))}
    {projects.map((p) => (
      <Card key={`${type}-dup-${p.id}`} project={p} type={type} />
    ))}
  </div>
);

const TopSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleDrag = useCallback((clientX) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      setSliderPosition((x / rect.width) * 100);
    }
  }, []);

  const onMouseDown = () => setIsDragging(true);
  const onTouchStart = () => setIsDragging(true);

  useEffect(() => {
    const onMouseMove = (e) => isDragging && handleDrag(e.clientX);
    const onTouchMove = (e) => isDragging && handleDrag(e.touches[0].clientX);
    const onUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onUp);
      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("touchend", onUp);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [isDragging, handleDrag]);

  return (
    <div className="w-full py-12 md:py-20 relative select-none">
      <div className="text-center mb-8 px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif mb-2">
          Our Transformation Gallery
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base">
          Hover to pause, drag the slider to compare.
        </p>
      </div>
      <div
        ref={containerRef}
        className="relative w-full h-[220px] sm:h-[280px] md:h-[400px] overflow-hidden bg-gray-50 cursor-col-resize"
      >
        <div className="absolute inset-0 flex items-center gap-4 sm:gap-6">
          <MarqueeTrack type="before" />
        </div>

        <div
          className="absolute inset-0 flex items-center gap-4 sm:gap-6 pointer-events-none"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        >
          <MarqueeTrack type="after" />
        </div>
        <div
          className="absolute top-0 bottom-0 w-[2px] sm:w-[3px] bg-gray-300 z-30"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-700 transform transition-transform hover:scale-110 active:scale-95">
            <ChevronsLeftRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .pause-on-hover:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TopSlider;
