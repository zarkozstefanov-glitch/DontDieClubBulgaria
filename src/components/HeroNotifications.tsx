"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const notifications = [
  {
    title: "Здравейте, ние сме Don't Die Club Bulgaria.",
    label: "Правим здравословния живот по-лесен.",
  },
  {
    title: "Ние сме общност за движение и навици.",
    label: "Тренираме навън, следим BioAge и вървим напред заедно.",
  },
  {
    title: "Виж повече за нас по-долу.",
    label: "Ще ти покажем как работим и къде се събираме.",
  },
];

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-3 py-2 min-[390px]:px-4 min-[390px]:py-2.5">
      <div className="flex items-center gap-[3px]">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="block h-[5px] w-[5px] rounded-full bg-white/50 min-[390px]:h-1.5 min-[390px]:w-1.5"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}

export default function HeroNotifications() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (visibleCount >= notifications.length) {
      setTyping(false);
      const btnTimer = setTimeout(() => setShowButton(true), 800);
      return () => clearTimeout(btnTimer);
    }

    // First message appears immediately (no typing), others get typing dots
    if (visibleCount === 0) {
      const timer = setTimeout(() => setVisibleCount(1), 1000);
      return () => clearTimeout(timer);
    }

    const wait = 300;
    const waitTimer = setTimeout(() => {
      setTyping(true);
      const typeTimer = setTimeout(() => {
        setTyping(false);
        setTimeout(() => setVisibleCount((c) => c + 1), 150);
      }, 1500);
      return () => clearTimeout(typeTimer);
    }, wait);

    return () => clearTimeout(waitTimer);
  }, [visibleCount]);

  return (
    <div className="mt-5 flex flex-col gap-3 min-[390px]:mt-6 min-[390px]:gap-3.5 min-[430px]:mt-8 min-[430px]:gap-4 md:mt-8">
      <AnimatePresence mode="popLayout">
        {notifications.slice(0, visibleCount).map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 140, damping: 20 }}
            className="relative rounded-2xl border border-white/12 bg-white/10 p-3.5 pr-12 text-white shadow-[0_10px_22px_rgba(0,0,0,0.1)] backdrop-blur-2xl min-[390px]:rounded-3xl min-[390px]:p-4 min-[390px]:pr-14 min-[430px]:p-5 min-[430px]:pr-16"
          >
            <div className="mb-1.5 flex items-center gap-2.5 min-[390px]:mb-2 min-[390px]:gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-white/15 shadow-sm min-[390px]:h-10 min-[390px]:w-10 min-[430px]:h-11 min-[430px]:w-11">
                <Image src="/images/logo.jpg" alt="Don't Die Club Bulgaria" width={44} height={44} className="h-full w-full object-cover" />
              </div>
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/55 min-[390px]:text-[10px] min-[430px]:text-[11px]">Don&apos;t Die Club Bulgaria</p>
            </div>
            <div className="absolute right-3 top-3 rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.14em] text-white/65 min-[390px]:px-2.5 min-[390px]:py-1 min-[390px]:text-[9px] min-[430px]:text-[10px]">
              Message
            </div>
            <p className="max-w-[92%] font-heading text-[13px] font-bold leading-snug text-white min-[390px]:text-sm min-[430px]:text-[15px]">{item.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-white/70 min-[390px]:text-[13px] min-[430px]:text-sm">{item.label}</p>
          </motion.div>
        ))}
      </AnimatePresence>

      {typing && visibleCount < notifications.length && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="w-fit rounded-2xl border border-white/12 bg-white/10 backdrop-blur-2xl"
        >
          <TypingDots />
        </motion.div>
      )}

      <AnimatePresence>
        {showButton && (
          <motion.a
            href="#za-kogo"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 120, damping: 18 }}
            className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#74B9E8] px-6 py-3 text-[15px] font-bold text-[#102A3A] shadow-lg shadow-[#74B9E8]/20 transition-all hover:-translate-y-0.5 hover:bg-[#8ac6ed] min-[390px]:py-3.5 min-[390px]:text-base min-[430px]:py-4 min-[430px]:text-lg md:w-auto md:px-7 md:py-4 md:text-base"
          >
            <span>За кого е клубът?</span>
            <span>↓</span>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}
