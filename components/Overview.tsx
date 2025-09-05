import { motion, Variants } from "motion/react";

type Props = {
  data: string[];
  itemVariant: Variants;
};

const Overview = ({ data, itemVariant }: Props) => {
  return (
    <motion.div
      variants={itemVariant}
      className="bg-[#1E1E1E] border border-gray-800 rounded-xl p-6 flex flex-col items-center"
    >
      <h4 className="text-lg font-semibold mb-3">Overview</h4>

      <div className="w-full flex flex-col items-center gap-4">
        {/* Simple legend */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#4DA0FA]" />
            <span className="text-sm text-gray-300">Core</span>
            <span className="mx-3 text-gray-500">•</span>
            <span className="w-3 h-3 rounded-full bg-[#6EE7B7]" />
            <span className="text-sm text-gray-300">Comfortable</span>
          </div>
        </div>

        {/* Favorite badges */}
        <div className="flex flex-wrap gap-3 justify-center">
          {data.map((f) => (
            <motion.div
              key={f}
              variants={itemVariant}
              whileHover={{ scale: 1.06 }}
              className="flex items-center gap-2 bg-[#141414] border border-gray-700 px-3 py-2 rounded-full"
            >
              <span className="text-xs md:text-sm font-semibold">{f}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Overview;
