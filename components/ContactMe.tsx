import { inter } from "@/app/fonts";
import { useForm, SubmitHandler } from "react-hook-form";
import { BsFillSendFill } from "react-icons/bs";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";

type Props = {
  ref: React.RefObject<HTMLDivElement>;
};

const ContactMe = ({ ref }: Props) => {
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
            <h2 className="section-header text-3xl font-bold mb-4">
              CONTACT ME
            </h2>
            <p className="section-subheader text-gray-600">
              I’d love to hear from you — whether it’s a question, a
              collaboration idea, or just a friendly hello!
            </p>
          </div>
          <form
            method="POST"
            className="w-full max-w-lg mx-auto md:mx-0 space-y-6"
          >
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Type your message here"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none "
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 w-full flex items-center justify-center gap-2"
            >
              Send Message
              <BsFillSendFill />
            </button>
          </form>
        </div>

        {/* Right side - Contact Info */}
        <div className="md:col-span-2 w-full rounded-xl shadow-sm px-8 py-10 space-y-6 text-left">
          <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
          <Link
            href="https://www.linkedin.com/in/joshua-oloton/"
            target="_blank"
            className="flex items-center gap-4 hover:text-blue-700 transition-colors"
          >
            <span className="border border-gray-300 rounded-full p-3 text-xl">
              <FaLinkedin />
            </span>
            <span>Joshua Oloton on LinkedIn</span>
          </Link>
          <Link
            href="mailto:olotonjoshua23@gmail.com"
            className="flex items-center gap-4 hover:text-blue-700 transition-colors"
          >
            <span className="border border-gray-300 rounded-full p-3 text-xl">
              <IoMdMail />
            </span>
            <span>olotonjoshua23@gmail.com</span>
          </Link>
          <Link
            href="https://x.com/josh_thedev_"
            target="_blank"
            className="flex items-center gap-4 hover:text-blue-700 transition-colors"
          >
            <span className="border border-gray-300 rounded-full p-3 text-xl">
              <FaXTwitter />
            </span>
            <span>@josh_thedev_</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
