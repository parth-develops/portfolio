"use client"
import { motion } from "framer-motion";

export default function Divider() {
    return (
        <motion.div className="bg-gray-200 mb-10 h-16 w-1 rounded-full hidden sm:block dark:bg-gray-200/20"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.135 }}
        ></motion.div>
    )
}
