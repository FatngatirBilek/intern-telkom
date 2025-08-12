"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="relative w-full h-full flex justify-end items-center xl:pr-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 2.4, duration: 0.5, ease: "easeInOut" },
          }}
          className="relative w-[220px] h-[220px] md:w-[300px] md:h-[300px] xl:w-[420px] xl:h-[420px] mix-blend-lighten"
        >
          <Image
            src="/logo.svg"
            priority
            quality={100}
            fill
            alt="Jambu logo"
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
