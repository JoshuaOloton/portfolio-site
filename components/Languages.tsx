import { motion, Variants } from "motion/react";
import LanguageItem from "./LanguageItem";

type Props = {
  data: { name: string; level: number }[];
  itemVariant: Variants;
};

const Languages = ({ data, itemVariant }: Props) => {
  return (
    <motion.div
      variants={itemVariant}
      className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-6"
    >
      <h3 className="text-lg font-semibold mb-4">Languages</h3>
      <ul className="space-y-4">
        {data.map((lang, index) => (
          <LanguageItem key={index} lang={lang} variant={itemVariant} />
        ))}
      </ul>
    </motion.div>
  );
};

export default Languages;
