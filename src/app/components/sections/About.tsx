"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export function About() {
  return (
    <motion.section
      className="max-w-[1900px] mx-auto p-8 md:p-16 lg:p-24 mb-5 md:mb-10 lg:mb-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div
        className="
        grid grid-cols-1 lg:grid-cols-12 lg:gap-x-8
        lg:items-end
        mb-8 md:mb-12
      "
      >
        <motion.div className="lg:col-start-1" variants={itemVariants}>
          <span className="text-base text-black font-medium">• about/</span>
        </motion.div>

        <motion.h1
          className="lg:col-start-3 lg:col-span-10 text-7xl md:text-8xl lg:text-9xl font-medium tracking-tighter mt-4 lg:mt-0"
          variants={itemVariants}
        >
          <span className="block">About &</span>
          <span className="block">Background</span>
        </motion.h1>
      </div>

      <motion.div
        className="border-t border-black"
        initial={{ scaleX: 0, transformOrigin: "left" }}
        whileInView={{
          scaleX: 1,
          transition: { duration: 1, delay: 0.5, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
      />

      {/* HÀNG 3: Đoạn văn */}
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-8 mt-8 md:mt-12">
        <motion.p
          className="lg:col-start-3 lg:col-span-10 text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight"
          variants={itemVariants}
        >
          My journey into design began at the University of California,
          Berkeley, where I earned a Bachelor’s degree in Industrial Design.
          During my studies, I discovered my love for transforming ideas into
          tangible products.
        </motion.p>
      </div>
    </motion.section>
  );
}
