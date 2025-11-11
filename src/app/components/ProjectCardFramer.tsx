"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, Variants } from "framer-motion";

// Định nghĩa props cho card
type ProjectCardProps = {
  src: string;
  title: string;
  category: string;
};

const magnifierVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
};

export function ProjectCardFramer({ src, title, category }: ProjectCardProps) {
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (imageWrapperRef.current) {
      setDimensions({
        width: imageWrapperRef.current.offsetWidth,
        height: imageWrapperRef.current.offsetHeight,
      });
    }

    const handleResize = () => {
      if (imageWrapperRef.current) {
        setDimensions({
          width: imageWrapperRef.current.offsetWidth,
          height: imageWrapperRef.current.offsetHeight,
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const x = useMotionValue(dimensions.width / 2);
  const y = useMotionValue(dimensions.height / 2);

  const imageX = useTransform(x, [0, dimensions.width], [50, -50]);
  const imageY = useTransform(y, [0, dimensions.height], [50, -50]);

  const textX = useTransform(x, [0, dimensions.width], [-15, 15]);
  const textY = useTransform(y, [0, dimensions.height], [-15, 15]);

  const magnifierScaleX = useTransform(x, [0, dimensions.width], [1.03, 0.97]);
  const magnifierScaleY = useTransform(y, [0, dimensions.height], [1.03, 0.97]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  // 6. Reset khi chuột rời
  const handleMouseLeave = () => {
    setIsHovering(false);
    x.set(dimensions.width / 2);
    y.set(dimensions.height / 2);
  };

  return (
    <motion.div
      className="relative"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <motion.div
        ref={imageWrapperRef}
        className="relative overflow-hidden cursor-none"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          animate={{ filter: isHovering ? "brightness(0.4)" : "brightness(1)" }}
          transition={{ duration: 0.3 }}
        >
          <img src={src} alt={title} className="w-full h-auto object-cover" />
        </motion.div>

        <motion.div
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-32 h-32 md:w-48 md:h-48 rounded-full
            overflow-hidden pointer-events-none
            flex items-center justify-center
            bg-black
          "
          style={{
            scaleX: magnifierScaleX,
            scaleY: magnifierScaleY,
          }}
          variants={magnifierVariants}
          animate={isHovering ? "visible" : "hidden"}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              x: imageX,
              y: imageY,
              scale: 1.5,
            }}
          >
            <img src={src} alt={title} className="w-full h-full object-cover" />
          </motion.div>
          <motion.span
            className="relative z-10 text-white text-xs font-semibold uppercase"
            style={{
              x: textX,
              y: textY,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
            }}
          >
            See the project
          </motion.span>
        </motion.div>
      </motion.div>

      <div className="flex justify-between text-sm mt-3">
        <p className="font-medium">{title}</p>
        <p className="text-gray-500">{category}</p>
      </div>
    </motion.div>
  );
}
