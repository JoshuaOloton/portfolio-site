import { motion, Variants } from "motion/react";
import FrameworkCard from "./FrameworkCard";

type Props = {
  data: { name: string; level: number }[];
  itemVariant: Variants;
};

const Frameworks = ({ data, itemVariant }: Props) => {
  return (
    <motion.div
      variants={itemVariant}
      className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-6"
    >
      <h3 className="text-lg font-semibold mb-4">Frameworks & Libraries</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {data.map((fw, index) => (
          <FrameworkCard key={index} framework={fw} itemVariant={itemVariant} />
        ))}
      </div>
    </motion.div>
  );
};

export default Frameworks;
