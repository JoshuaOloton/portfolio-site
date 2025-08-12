import { motion, Variants } from "motion/react";
import ToolItem from "./ToolItem";

type Props = {
  data: { name: string; level: number }[];
  itemVariant: Variants;
};

const Tools = ({ data, itemVariant }: Props) => {
  return (
    <motion.div
      variants={itemVariant}
      className="bg-[#1E1E1E] border border-gray-800 rounded-xl p-6"
    >
      <h4 id="tools-heading" className="text-lg font-semibold mb-3">
        Tools & Platforms
      </h4>
      <ul className="flex flex-col gap-3">
        {data.map((tool, index) => (
          <ToolItem key={index} tool={tool} itemVariant={itemVariant} />
        ))}
      </ul>
    </motion.div>
  );
};

export default Tools;
