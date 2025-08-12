import { motion, Variants } from "motion/react";

type Props = {
  data: string[];
  itemVariant: Variants;
};

const Favorites = ({ data, itemVariant }: Props) => {
  return (
    <motion.div
      variants={itemVariant}
      className="bg-[#1E1E1E] border border-gray-800 rounded-xl p-6"
    >
      <h3 className="text-xl font-semibold mb-3">Favorites</h3>
      <p className="text-sm text-gray-300 mb-4">
        These are the tools I enjoy working with most — my “happy stack”.
      </p>
      <div className="flex flex-wrap gap-3">
        {data.map((fav, index) => (
          <motion.span
            key={index}
            variants={itemVariant}
            whileHover={{ scale: 1.04 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1DB954]/30 via-transparent to-transparent border border-[#2b2b2b] px-4 py-2 rounded-full text-sm font-medium"
            aria-label={`Favorite: ${fav}`}
          >
            <span className="px-2 py-1 bg-[#1DB954] text-black rounded-full text-xs font-semibold">
              ★
            </span>
            {fav}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default Favorites;
