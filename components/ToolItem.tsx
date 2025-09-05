import { motion, Variants } from "motion/react";

type Props = {
  itemVariant: Variants;
  tool: { name: string; level: number };
};

const ToolItem = ({ tool, itemVariant }: Props) => {
  return (
    <motion.li
      key={tool.name}
      variants={itemVariant}
      whileHover={{ scale: 1.03 }}
      className="flex items-center justify-between gap-4 p-3 rounded-md bg-[#161616] border border-gray-800 text-sm"
    >
      <span>{tool.name}</span>
      <span className="text-gray-400">{tool.level}%</span>
    </motion.li>
  );
};

export default ToolItem;
