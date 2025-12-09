
import React from "react";
import { motion } from "framer-motion";
import PostCard from "./PostCard";

const PostSlider = ({ data }) => {
  const repeatedPosts = [...data, ...data, ...data];

  return (
    <div className="relative w-full overflow-hidden py-8">
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 25, 
          ease: "linear",
        }}
      >
        {repeatedPosts.map((post, i) => (
          <div key={i} className="shrink-0 w-[400px]">
            <PostCard post={post} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PostSlider;
