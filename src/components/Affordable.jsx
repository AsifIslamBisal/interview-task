import React from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

const Affordable = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-20">
      <div className="text-start ">
        {" "}
        <h2 className="text-3xl font-bold">Why We’re Fast & Affordable</h2>{" "}
        <div className="space-y-4 pt-5">
          {" "}
          <p className="text-gray-700">
            We love design and some coffee - plain and simple. It’s what we do
            <br /> best, turning ideas into stunning visuals at lightning speed.
            Unlike
            <br /> traditional agencies bogged down by meetings and contracts,
            we cut
            <br /> the fluff and focus on delivering great design.
          </p>{" "}
          <p className="text-gray-700">
            Here’s how: You send your design, share your vision, maybe a few
            <br /> examples, that’s it. No delays, no bureaucracy, just fast,
            high-quality
            <br /> work.
          </p>{" "}
          <p className="text-gray-700">
            Our streamlined process lets us offer top-tier designs at a fraction
            of
            <br /> the cost without sacrificing quality. Need tweaks? Revisions
            (where
            <br /> applicable) ensure you get exactly what you want.
          </p>{" "}
          <p className="text-gray-700">
            Great design doesn’t have to be complicated or pricey—it just has to
            <br /> work. And that’s what we do. 🚀
          </p>{" "}
        </div>{" "}
      </div>

      {/* image section */}
      
      <div className="relative w-[400px] h-[350px] mt-12">
        
        <motion.div
          whileHover={{ rotate: -5, y: -10, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 150 }}
          className="absolute top-16 left-0 bg-white shadow-xl rounded-sm rotate-[-4deg] p-3 w-64"
        >
          <img
            src="https://i.ibb.co.com/23SGQ6nK/b28122c859a4f9280df9df2c499abdd3.jpg"
            alt="coffee"
            className="rounded-sm"
          />
          <p className="mt-2 text-sm italic text-center text-gray-600">
            Asif Islam Bisal
          </p>
        </motion.div>

        <motion.div
          whileHover={{ rotate: 5, y: -10, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 150 }}
          className="absolute top-0 right-5 bg-white shadow-2xl rounded-sm rotate-[6deg] p-3 w-64"
        >
          <img
            src="https://i.ibb.co.com/JWMp96cy/551e94ae8845df9d455f221c07421dcd.jpg"
            alt="laptop"
            className="rounded-sm"
          />
          <p className="mt-2 text-sm italic text-center text-gray-600">
            Some of my recent photography
          </p>
        </motion.div>
      </div>

      <div className="mt-30 text-start mr-">
        <div>
            <h1 className="font-bold text-3xl">Work Experience</h1>
        </div>
        <div className="space-y-6 pt-7">
            <div className="flex items-center gap-5">
            <p>2024 - Present</p>
            <p>Founders of Sprrrint Asset Library</p>
            <button className="flex items-center justify-center border border-pink-400 bg-pink-100 gap-2 text-pink-500 font-semibold rounded-lg w-40 h-8"><span><FaInstagram className="text-pink-400" /></span>Sprrrint Design</button>
        </div>
        <div className="flex items-center gap-5">
            <p>2020 - 2022</p>
            <p>Founders of Sprrrint Asset Library</p>
            <button className="flex items-center justify-center border border-sky-300 bg-sky-100 gap-2 text-black font-semibold rounded-lg w-40 h-8"><span><IoIosLink /></span>Sprrrint.com</button>
        </div>
        <div className="flex items-center gap-5">
            <p>2024 - Present</p>
            <p>Designers at Kree8 Agency</p>
            <button className="flex items-center justify-center border border-gray-400 bg-gray-200 gap-2 text-black font-semibold rounded-lg w-40 h-8"><span><IoIosLink /></span>kree8.agency</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Affordable;
