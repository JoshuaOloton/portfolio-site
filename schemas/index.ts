import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(3, "Please enter your name (at least 3 characters)."),
  email: z.email("Please provide a valid email address."),
  message: z.string().min(10, "Your message must be at least 10 characters long."),
});