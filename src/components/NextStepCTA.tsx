"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function NextStepCTA({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 16, opacity: 0, scale: 0.96 }}
      animate={visible ? { y: 0, opacity: 1, scale: 1 } : { y: 16, opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="pointer-events-none fixed bottom-4 left-1/2 z-40 -translate-x-1/2 md:bottom-6"
    >
      <Link
        href={href}
        className="group pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#4FBF82]/94 px-4 py-2.5 text-sm font-bold text-white shadow-xl shadow-black/20 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-[#4FBF82] active:scale-95 md:px-5 md:py-3"
      >
        {label}
        <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
      </Link>
    </motion.div>
  );
}
