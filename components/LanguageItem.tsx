import { motion, Variants } from "motion/react";

type Props = {
  lang: { name: string; level: number };
  variant: Variants;
};

const LanguageItem = ({ lang, variant }: Props) => {
  return (
    <motion.li
      variants={variant}
      className="flex flex-col md:flex-row md:items-center md:justify-between gap-2"
    >
      <div className="flex items-center gap-3">
        <span className="font-medium">{lang.name}</span>
        <span className="text-xs text-gray-400 hidden md:inline">
          • {lang.level}%
        </span>
      </div>

      <div className="w-full md:max-w-[60%]">
        <div
          className="h-2 rounded-full bg-gray-800"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={lang.level}
          aria-label={`${lang.name} proficiency is ${lang.level} percent`}
        >
          <div
            className="h-2 rounded-full bg-gradient-to-r from-[#4DA0FA] to-[#6EE7B7] transition-all duration-700"
            style={{ width: `${lang.level}%` }}
          />
        </div>
      </div>
    </motion.li>
  );
};

export default LanguageItem;
