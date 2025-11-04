import { inter } from "@/app/fonts";
import {
  motion,
  useTransform,
  useScroll
} from "motion/react";
import { useRef } from "react";

type Props = {
  containerRef: React.RefObject<HTMLDivElement | null>;
};

const AboutMe = ({ containerRef }: Props) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const titleText: string = "A LITTLE BIT ABOUT ME";

  const titleY = useTransform(scrollYProgress, [0, 0.4], ["0%", "500%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2], [0.2, 1]);

  return (
    <section
      ref={targetRef}
      className={`${inter.className} section-layout h-[150vh] md:h-[200vh] relative border`}
      id="about"
    >
      <div className="flex flex-col items-center justify-center md:justify-center h-full border border-transparent">
        <motion.h2
          style={{ y: titleY, scale: titleScale, opacity: titleOpacity }}
          initial="initial"
          whileInView="animate"
          transition={{
            staggerChildren: 0.02
          }}
          className="section-header -z-50"
        >
          {/* {titleText} */}
          {titleText.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                initial: { y: 50, opacity: 0 },
                animate: { y: 0, opacity: 1 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="inline-block whitespace-pre"
              viewport={{ once: true }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.img
          src="/images/joshua.jpeg"
          alt="Joshua's photo"
          className="w-44 md:w-80 rounded-3xl -z-50 md:my-10"
          style={{ opacity: imageOpacity, scale: imageScale }}
        />

        <motion.p
          className="font-medium md:text-xl leading-loose text-gray-300 uppercase my-6"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-200px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          I&apos;m a software engineer driven by curiosity and a passion for building
          impactful solutions. With a background in web development and a love
          for problem-solving, I enjoy bringing ideas to life through code and
          collaboration.
        </motion.p>
        <motion.p
          className="font-medium md:text-xl leading-loose text-gray-300 uppercase my-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ margin: "-200px" }}
        >
          Outside work, you&apos;ll find me exploring new tech, contributing to open
          source, or volunteering within the community. I believe in tech&apos;s
          power to transform lives, and I&apos;m excited for what&apos;s next.
        </motion.p>

        {/* <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
        >
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
            Get in Touch
          </button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default AboutMe;
