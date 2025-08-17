"use client";

import { motion } from "motion/react";
import { SideNavLinks } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function ScrollTracker() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <nav className="z-[999] fixed max-[1100px]:bg-slate-50/80 max-[1100px]:dark:bg-[#060606]/80 max-[1100px]:bottom-0 max-[1100px]:left-1/2 max-[1100px]:-translate-x-1/2 min-[1100px]:top-1/2 min-[1100px]:-translate-y-1/2 min-[1100px]:right-4 py-2 max-[1100px]:w-full">
      <div className="relative">
        <ul className="flex min-[1100px]:flex-col flex-wrap items-center justify-center text-[0.9rem] font-medium text-gray-500">
          {
            SideNavLinks.map(link => (
              <motion.li
                key={link.hash}
                className="h-3/4 flex items-center justify-center relative"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { ease: "easeIn" } }}
              >
                <Link
                  title={link.name}
                  href={link.hash}
                  className={
                    clsx("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 dark:text-gray-400 transition dark:hover:text-gray-100",
                      { "text-gray-950 dark:!text-gray-100": activeSection === link.name })
                  }
                  onClick={() => {
                    setTimeOfLastClick(Date.now());
                    setActiveSection(link.name);
                  }}
                >
                  <link.icon size={link.name === activeSection ? 24 : 20} className={`${link.name === activeSection ? "fill-white text-white" : "fill-black text-black dark:fill-white dark:text-white"}`} />
                  {link.name === activeSection && (
                    <motion.span
                      className="rounded-full absolute inset-0 -z-10 bg-cyan-700 dark:bg-opacity-80"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))
          }
        </ul>
      </div>
    </nav>
  );
}
