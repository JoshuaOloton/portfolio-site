import ContactForm from "./ContactForm";
import Link from "next/link";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { inter } from "@/app/fonts";
import { IoMdMail } from "react-icons/io";
import { motion } from "motion/react";

type Props = {
  ref: React.RefObject<HTMLDivElement>;
};

const ContactMe = ({ ref }: Props) => {

  const titleText: string = "CONTACT ME";

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/joshua-oloton/",
      icon: <FaLinkedin />,
      text: "Joshua Oloton on LinkedIn",
    },
    {
      href: "mailto:olotonjoshua23@gmail.com",
      icon: <IoMdMail />,
      text: "olotonjoshua23@gmail.com",
    },
    {
      href: "https://x.com/josh_thedev_",
      icon: <FaXTwitter />,
      text: "@josh_thedev_ on X",
    },
  ];

  return (
    <section
      className={`${inter.className} section-layout`}
      ref={ref}
      id="contact"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:h-screen px-6 py-16 md:px-20 md:py-24 items-center">
        {/* Left side - Form */}
        <div className="md:col-span-3 w-full">
          <div className="text-center md:text-left mb-8">
            <motion.h2
              className="section-header text-3xl font-bold mb-4"
              initial="initial"
              whileInView="animate"
              transition={{
                staggerChildren: 0.02,
                delayChildren: 0.2,
              }}
              // viewport={{ once: true }}
            >
              {titleText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    initial: { y: 50, opacity: 0 },
                    animate: { y: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="inline-block whitespace-pre"
                >
                  {char}
                </motion.span>
              ))}
            </motion.h2>
            <motion.p
              className="section-subheader text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              // viewport={{ once: true }}
            >
              I'd love to hear from you — whether it's a question, a
              collaboration idea, or just a friendly hello!
            </motion.p>
          </div>
          <ContactForm />
        </div>

        {/* Right side - Contact Info */}
        <motion.div
          className="md:col-span-2 w-full rounded-xl shadow-sm px-8 py-10 space-y-6 text-left"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
          <div className="space-y-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                className="flex items-center gap-4 hover:text-yellow-500 transition-colors duration-300"
              >
                <span className="border border-gray-300 rounded-full p-3 text-xl">
                  {link.icon}
                </span>
                <span>{link.text}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
