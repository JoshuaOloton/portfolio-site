import { motion, Variants } from "motion/react";

type Props = {
  framework: { name: string; level: number };
  itemVariant: Variants;
};

const FrameworkCard = ({ framework, itemVariant }: Props) => {
  return (
    <motion.div
      variants={itemVariant}
      whileHover={{ scale: 1.02 }}
      className="flex items-center justify-between gap-4 p-3 rounded-md bg-[#161616] border border-gray-800"
      aria-label={`${framework.name} proficiency ${framework.level} percent`}
    >
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium">{framework.name}</span>
        <span className="text-xs text-gray-400 hidden sm:inline">
          • {framework.level}%
        </span>
      </div>
      <div className="w-28">
        <div className="h-1 rounded-full bg-gray-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] transition-all duration-700"
            style={{ width: `${framework.level}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default FrameworkCard;
