"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

type BioAgeTest = {
  title: string;
  img: string;
  instruction: string;
  howTo: string;
  targets: {
    women: string;
    men: string;
  };
};

export default function BioAgeTestsGrid({ tests }: { tests: BioAgeTest[] }) {
  const [openCards, setOpenCards] = useState<string[]>([]);

  const toggleCard = (title: string) => {
    setOpenCards((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title]
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {tests.map((test, i) => {
        const isOpen = openCards.includes(test.title);

        return (
          <AnimatedSection key={test.title} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.08}>
            <motion.article
              layout
              animate={{
                y: isOpen ? -8 : 0,
                scale: isOpen ? 1.02 : 1,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className={`h-full overflow-hidden rounded-3xl border bg-white transition-shadow duration-300 ${
                isOpen
                  ? "border-[#9CAF88]/70 shadow-2xl shadow-[#2F5D50]/20 ring-1 ring-[#9CAF88]/50"
                  : "border-[#2F5D50]/5 shadow-sm hover:shadow-xl hover:shadow-[#2F5D50]/10"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleCard(test.title)}
                className="group relative block w-full overflow-hidden text-left"
                aria-expanded={isOpen}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={test.img}
                    alt={test.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className={`object-cover transition-transform duration-700 ${isOpen ? "scale-110" : "group-hover:scale-105"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f1c]/85 via-[#1a1f1c]/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">
                          BioAge test
                        </p>
                        <h3 className="font-heading text-2xl font-bold text-white">{test.title}</h3>
                      </div>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full border border-white/20 bg-white/15 text-2xl leading-none text-white backdrop-blur-md"
                      >
                        +
                      </motion.span>
                    </div>
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4 p-5">
                      <div>
                        <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[#C9824A]">Инструкция</p>
                        <p className="text-sm leading-relaxed text-[#1E2520]/75">{test.instruction}</p>
                      </div>
                      <div className="rounded-2xl bg-[#FAF7EF] p-4">
                        <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[#2F5D50]">Как се прави</p>
                        <p className="text-xs leading-relaxed text-[#1E2520]/65">{test.howTo}</p>
                      </div>
                      <div className="grid gap-3">
                        <TargetBlock title="Жени" value={test.targets.women} />
                        <TargetBlock title="Мъже" value={test.targets.men} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          </AnimatedSection>
        );
      })}
    </div>
  );
}

function TargetBlock({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#2F5D50]/10 bg-[#E8EFE3] p-4">
      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#2F5D50]">{title}</p>
      <p className="text-sm font-medium leading-relaxed text-[#1E2520]/75">{value}</p>
    </div>
  );
}
