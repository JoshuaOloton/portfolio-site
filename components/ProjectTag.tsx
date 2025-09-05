import { motion } from "motion/react";
import React from "react";

type Props = {
  children: React.ReactNode;
  index: number;
};

const ProjectTag = ({ children, index }: Props) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: ((index + 1) * 0.95) / 5 }}
      className="bg-[#1F1F1F] text-gray-200 border border-gray-700 rounded-full px-4 py-1 text-sm font-medium shadow-sm hover:bg-[#2A2A2A] transition-colors duration-200"
    >
      {children}
    </motion.span>
  );
};

export default ProjectTag;
