import { motion } from "motion/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BsFillSendFill } from "react-icons/bs";

type Props = {};

const ContactForm = ({}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log("Form Data:", data);
    // Handle form submission logic here
  };
  
  return (
    <motion.form
      method="POST"
      className="w-full max-w-lg mx-auto md:mx-0 space-y-6"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: true }}
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
        className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 w-full flex items-center justify-center gap-2 hover:rotate-1 hover:scale-105"
      >
        Send Message
        <BsFillSendFill />
      </button>
    </motion.form>
  );
};

export default ContactForm;
