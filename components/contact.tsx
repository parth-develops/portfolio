"use client";

import Heading from "./heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section ref={ref} id="contact" className="mb-20 sm:mb-28 w-[min(100%, 38rem)]"
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
      viewport={{ once: true }}
    >
      <Heading>Contact Me</Heading>
      <p className="text-gray-700 text-center dark:text-white/80">Please contact me directly at <a href="mailto:example@gmail.com">example@gmail.com</a> or through this form.</p>

      <form action={async (formData) => {
        const { data, error } = await sendEmail(formData);

        if (error) {
          toast.error(error);
          return;
        }

        toast.success("Email sent successfully!");
      }} className="mt-10 flex flex-col dark:text-black">
        <input type="email" name="email"
          required
          maxLength={500}
          className="h-14 px-4 rounded-lg borderBlack focus:outline-black focus:outline focus:outline-2 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" placeholder="Your email"
        />
        <textarea name="message" id="message"
          required
          maxLength={5000}
          className="h-52 my-3 rounded-lg borderBlack p-4 focus:outline-black focus:outline focus:outline-2 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
        ></textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
