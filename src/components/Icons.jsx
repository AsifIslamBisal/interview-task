import { motion } from "framer-motion";
import { FaStar, FaSnowflake, FaSun, FaLeaf, FaHeart, FaRegMoon } from "react-icons/fa";

const Icons = () => {
  const icons = [FaStar, FaSnowflake, FaSun, FaLeaf, FaHeart, FaRegMoon];

  return (
    <div className="w-full mt-10 px-4 sm:px-8 lg:px-100">
      
      <div className="overflow-hidden h-[50px] sm:h-[60px] flex justify-center">
        <motion.div
          className="flex gap-6 sm:gap-8 text-gray-500 text-3xl sm:text-4xl md:text-5xl"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "linear",
          }}
        >
          {[...icons, ...icons, ...icons].map((Icon, i) => (
            <Icon key={i} className="shrink-0" />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Icons;
