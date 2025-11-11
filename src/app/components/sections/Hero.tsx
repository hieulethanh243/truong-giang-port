"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-start pt-[10px] overflow-hidden bg-white mb-5 md:mb-10 lg:mb-16">
      <motion.div
        initial={{ opacity: 0, scale: 1, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-[95vw] flex justify-center z-10 mb-[40px]"
      >
        <h1
          className="font-medium text-black leading-none text-[30vw] whitespace-nowrap select-none"
          style={{ lineHeight: 0.9, width: "fit-content" }}
        >
          Sansa
        </h1>
      </motion.div>

      <div className="relative w-full z-10 -mt-[70px]">
        {" "}
        <div className="max-w-[1900px] mx-auto flex justify-between gap-[2%] px-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="w-[49%] rounded-md overflow-hidden translate-y-[-100px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1600&q=80"
              alt="Portrait 1"
              width={1600}
              height={1200}
              className="object-cover w-full h-[80vh]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="w-[49%] rounded-md overflow-hidden "
          >
            <Image
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1600&q=80"
              alt="Portrait 2"
              width={1600}
              height={1200}
              className="object-cover w-full h-[85vh]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
