"use client";

import { motion, type Variant } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "scale" | "none";

const variants: Record<Direction, { hidden: Variant; visible: Variant }> = {
  up: { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -60 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } },
  none: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}) {
  const v = variants[direction];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: v.hidden,
        visible: {
          ...v.visible,
          transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
