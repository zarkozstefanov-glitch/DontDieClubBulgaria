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
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (visibleCount >= notifications.length) {
      setTyping(false);
      return;
    }

    // Show typing indicator, then reveal message
    setTyping(true);
    const typingTimer = setTimeout(() => {
      setTyping(false);
      const showTimer = setTimeout(() => {
        setVisibleCount((c) => c + 1);
      }, 200);
      return () => clearTimeout(showTimer);
    }, 1200);

    return () => clearTimeout(typingTimer);
  }, [visibleCount]);

  return (
    <div className="mt-3 flex flex-col gap-2 min-[390px]:mt-4 min-[390px]:gap-2.5 min-[430px]:gap-3 md:hidden">
      <AnimatePresence mode="popLayout">
        {notifications.slice(0, visibleCount).map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 140, damping: 20 }}
            className="relative rounded-2xl border border-white/12 bg-white/10 p-2.5 pr-10 text-white shadow-[0_10px_22px_rgba(0,0,0,0.1)] backdrop-blur-2xl min-[390px]:rounded-2xl min-[390px]:p-3 min-[390px]:pr-12 min-[430px]:p-3.5 min-[430px]:pr-14"
          >
            <div className="mb-1 flex items-center gap-2 min-[390px]:mb-1.5 min-[390px]:gap-2.5">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/15 bg-white/15 shadow-sm min-[390px]:h-8 min-[390px]:w-8 min-[430px]:h-9 min-[430px]:w-9 min-[430px]:rounded-xl">
                <Image src="/images/logo.jpg" alt="Don't Die Club Bulgaria" width={44} height={44} className="h-full w-full object-cover" />
              </div>
              <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-white/55 min-[390px]:text-[9px] min-[430px]:text-[10px]">Don&apos;t Die Club Bulgaria</p>
            </div>
            <div className="absolute right-2.5 top-2.5 rounded-full border border-white/10 bg-white/10 px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-[0.14em] text-white/65 min-[390px]:px-2 min-[390px]:py-1 min-[390px]:text-[8px] min-[430px]:text-[9px]">
              Message
            </div>
            <p className="max-w-[92%] font-heading text-[11px] font-bold leading-snug text-white min-[390px]:text-xs min-[430px]:text-[13px]">{item.title}</p>
            <p className="mt-0.5 text-[10px] leading-snug text-white/65 min-[390px]:text-[11px] min-[430px]:text-xs">{item.label}</p>
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
    </div>
  );
}
