// components/ProjectsFramer.tsx
"use client";

import { motion } from "framer-motion";
import { ProjectCardFramer } from "../ProjectCardFramer";
import { projects } from "@/data/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProjectsFramer() {
  return (
    <motion.section
      className="max-w-[1900px] mx-auto p-8 md:p-16 lg:p-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div>
        <motion.div className="lg:col-start-1" variants={itemVariants}>
          <div className="text-base text-black font-medium mb-8">
            • projects/
          </div>
        </motion.div>

        <motion.h1
          className="lg:col-start-3 lg:col-span-10 text-7xl md:text-8xl lg:text-9xl font-medium tracking-tighter mt-4 lg:mt-0"
          variants={itemVariants}
        >
          <div className="block mb-8">Done with love</div>
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-8">
        <motion.div
          className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12" // <-- Sửa ở đây
          variants={containerVariants}
        >
          {projects.map((project) => (
            <ProjectCardFramer
              key={project.id}
              src={project.src}
              title={project.title}
              category={project.category}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
