"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const levels = [
  {
    id: "beginner",
    label: "Начинаещ",
    sections: [
      {
        title: "Кардио",
        content: "Ходене, плуване, каране на колело (във фитнеса или навън).",
      },
      {
        title: "Силови тренировки",
        content:
          "2 до 4 пъти седмично. Комплексни упражнения: лицеви опори, клекове без тежести, с дъмбели или пудовка, напади, набирания с ластици, russian twists, гребане с дъмбел.",
      },
      {
        title: "HIIT",
        content:
          "Jumping jacks, маршируване на място, клекове без тежести, планк, докосване на пръстите на краката от стоеж. Съотношение 1:1 или 1:2 (30 сек. упражнение / 30-60 сек. почивка).",
      },
      {
        title: "Баланс и мобилност",
        content:
          "Стойка «тандем», стоене на един крак с опора на стол, повдигане на петите от стоеж, странично накланяне, разтягане на подколянно сухожилие, въртене на врата и глезените.",
      },
    ],
  },
  {
    id: "intermediate",
    label: "Средно напреднал",
    sections: [
      {
        title: "Кардио",
        content: "Джогинг, гребен тренажор, кростренажор.",
      },
      {
        title: "Силови тренировки",
        content:
          "3 до 5 пъти седмично. Повече серии и повторения. Клякане с щанга, мъртва и румънска тяга, обръщане на щанга, набирания, притегляне на вертикален скрипец.",
      },
      {
        title: "HIIT",
        content:
          "Бърпи без лицева, високи колена, клек със скок, напади, бойни въжета, планк с разтваряне на краката, планински катерач. Съотношение 2:1.",
      },
      {
        title: "Баланс и мобилност",
        content:
          "Стоене на един крак без опора, поза дърво, ходене пета-пръсти в права линия, напади със завъртане, поза «гледащо надолу куче», поза «котка-крава».",
      },
    ],
  },
  {
    id: "advanced",
    label: "Напреднал",
    sections: [
      {
        title: "Кардио",
        content: "Тичане, изкачване на стълби.",
      },
      {
        title: "Силови тренировки",
        content:
          "5 до 6 пъти седмично. Висок обем, дни по мускулни групи. Кофички с тежест, френско разгъване, набирания с тежест, напади с ходене и тежести, клек на един крак, български клек, военна преса.",
      },
      {
        title: "HIIT",
        content:
          "Бърпита с лицева опора, скок върху кутия, напади със скок, клек с преса, силово изтласкване. Съотношение 2:1 или табата.",
      },
      {
        title: "Баланс и мобилност",
        content:
          "Румънска тяга с един крак, планк върху фитнес топка, пистолет клек, поза «Гълъб», поза «Гарван», стойка на ръце, задържане в дълбок клек с ротация.",
      },
    ],
  },
];

export default function TrainingTabs() {
  const [active, setActive] = useState("beginner");
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const currentLevel = levels.find((l) => l.id === active)!;

  return (
    <div>
      <div className="flex gap-2 mb-6">
        {levels.map((level) => (
          <button
            key={level.id}
            onClick={() => {
              setActive(level.id);
              setOpenAccordion(null);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              active === level.id
                ? "bg-green-primary text-white shadow-md"
                : "bg-white text-text-dark border border-green-soft/30 hover:border-green-primary/40"
            }`}
          >
            {level.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-3"
        >
          {currentLevel.sections.map((section) => {
            const isOpen = openAccordion === section.title;
            return (
              <div
                key={section.title}
                className="bg-white rounded-xl border border-green-soft/20 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenAccordion(isOpen ? null : section.title)
                  }
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-heading font-semibold text-green-primary">
                    {section.title}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-green-soft"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 pb-4 text-text-dark/80 leading-relaxed">
                        {section.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
