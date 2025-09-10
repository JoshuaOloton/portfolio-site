import { motion } from "motion/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BsFillSendFill } from "react-icons/bs";
import { ContactFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect } from "react";

type Props = {};

const ContactForm = ({}: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof ContactFormSchema>> = (formData) => {
    console.log("Form Data:", formData);
    // Handle form submission logic here

    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom ${formData.name} <${formData.email}>`);

    window.location.href = `mailto:olotonjoshua23@gmail.com?subject=${subject}&body=${body}`;
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ name: "", email: "", message: "" });
    }
  }, [isSubmitSuccessful]);
  
  return (
    <motion.form
      method="POST"
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg mx-auto md:mx-0 space-y-3 md:space-y-6"
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
          {...register("name")}
          type="text"
          placeholder="Enter your name"
          required
          className="form-input"
        />
        {errors.name && (
          <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
        )}
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Your Email <span className="text-red-500">*</span>
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="Enter your email"
          required
          className="form-input"
        />
        {errors.email && (
          <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
        )}
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Type your message here"
          required
          className="form-input"
        />
        {errors.message && (
          <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-sm md:text-base text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 w-full flex items-center justify-center gap-2 hover:rotate-1 hover:scale-105"
      >
        Send Message
        <BsFillSendFill />
      </button>
    </motion.form>
  );
};

export default ContactForm;
