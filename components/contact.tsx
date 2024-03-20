"use client";

import { FaPaperPlane } from "react-icons/fa";
import Heading from "./heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Skills", 0.5);

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
      <p className="text-gray-700 text-center">Please contact me directly at <a href="mailto:example@gmail.com"></a> or through this form.</p>

      <form action={async (formData) => {
        await sendEmail(formData);
      }} className="mt-10 flex flex-col">
        <input type="email" name="email"
          required
          maxLength={500}
          className="h-14 px-4 rounded-lg borderBlack focus:outline-black focus:outline focus:outline-2" placeholder="Your email"
        />
        <textarea name="message" id="message"
          required
          maxLength={5000}
          className="h-52 my-3 rounded-lg borderBlack p-4 focus:outline-black focus:outline focus:outline-2"
          placeholder="Your message"
        ></textarea>
        <button type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 outline-none text-white rounded-full transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
        >
          Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  )
}
