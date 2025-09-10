import React from "react";
import { Dot } from "lucide-react";
import { motion } from "motion/react";

const ProjectTags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-0 gap-y-2 md:gap-y-4 my-3">
      {tags.map((tag, index) => (
        <React.Fragment key={index}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: ((index + 1) * 0.95) / 5 }}
            className="bg-[#1F1F1F] text-gray-200 border border-gray-700 rounded-full px-4 py-1 text-xs md:text-sm font-medium shadow-sm hover:bg-[#2A2A2A] transition-colors duration-200"
          >
            {tag}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: ((index + 1) * 0.95) / 5 }}
            className="text-gray-300 last:hidden"
          >
            <Dot size={26} />
          </motion.span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProjectTags;
