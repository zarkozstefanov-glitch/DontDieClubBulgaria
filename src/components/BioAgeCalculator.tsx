"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TestResult {
  pushups: string;
  sitRise: string;
  sitReach: string;
  singleLeg: string;
  waistHeight: string;
}

const pushupTargets = {
  women: [{ age: "20-29", target: 8 }, { age: "30-39", target: 8 }, { age: "40-49", target: 7 }, { age: "50-59", target: 5 }, { age: "60-99", target: 4 }],
  men: [{ age: "20-29", target: 23 }, { age: "30-39", target: 20 }, { age: "40-49", target: 16 }, { age: "50-59", target: 13 }, { age: "60-99", target: 12 }],
};

const sitReachTargets = {
  women: [{ age: "18-35", target: 48 }, { age: "36-45", target: 46 }, { age: "46-55", target: 43 }, { age: "56-65", target: 40 }],
  men: [{ age: "18-25", target: 46 }, { age: "26-35", target: 43 }, { age: "36-45", target: 38 }, { age: "46-55", target: 33 }],
};

function getTarget(age: number, gender: "men" | "women", test: "pushups" | "sitReach") {
  const targets = test === "pushups" ? pushupTargets[gender] : sitReachTargets[gender];
  for (const t of targets) {
    const [min, max] = t.age.split("-").map(Number);
    if (age >= min && age <= max) return t.target;
  }
  return targets[targets.length - 1].target;
}

function getScore(value: number, target: number, invert = false) {
  if (invert) {
    if (value <= target) return { label: "Отлично", color: "#2F5D50", bg: "bg-[#2F5D50]", pct: 100, emoji: "star" };
    if (value <= target * 1.1) return { label: "Добре", color: "#C9824A", bg: "bg-[#C9824A]", pct: 70, emoji: "ok" };
    return { label: "Работи над това", color: "#dc2626", bg: "bg-red-600", pct: 35, emoji: "work" };
  }
  const ratio = value / target;
  if (ratio >= 1.3) return { label: "Отлично!", color: "#2F5D50", bg: "bg-[#2F5D50]", pct: 100, emoji: "star" };
  if (ratio >= 1) return { label: "В целта", color: "#2F5D50", bg: "bg-[#2F5D50]", pct: 85, emoji: "check" };
  if (ratio >= 0.7) return { label: "Близо", color: "#C9824A", bg: "bg-[#C9824A]", pct: 55, emoji: "ok" };
  return { label: "Работи над това", color: "#dc2626", bg: "bg-red-600", pct: 30, emoji: "work" };
}

const emojiMap: Record<string, string> = { star: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z", check: "M5 13l4 4L19 7", ok: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", work: "M13 10V3L4 14h7v7l9-11h-7z" };

export default function BioAgeCalculator() {
  const [open, setOpen] = useState(true);
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<"men" | "women">("men");
  const [results, setResults] = useState<TestResult>({ pushups: "", sitRise: "", sitReach: "", singleLeg: "", waistHeight: "" });
  const [showResults, setShowResults] = useState(false);

  const tests = [
    { key: "pushups" as const, label: "Лицеви опори", unit: "бр.", placeholder: "20", desc: "Максимален брой без почивка" },
    { key: "sitRise" as const, label: "Сядане/ставане", unit: "точки", placeholder: "9", desc: "Точки от 0 до 10" },
    { key: "sitReach" as const, label: "Sit & Reach", unit: "см", placeholder: "40", desc: "Разстояние в сантиметри" },
    { key: "singleLeg" as const, label: "Стоене на един крак", unit: "сек.", placeholder: "10", desc: "Секунди със затворени очи" },
    { key: "waistHeight" as const, label: "Талия / Ръст", unit: "съотн.", placeholder: "0.48", desc: "Талия разделена на ръст" },
  ];

  const scores = showResults ? tests.map((t) => {
    if (!results[t.key]) return null;
    const value = Number(results[t.key]);
    const target = t.key === "pushups" ? getTarget(Number(age), gender, "pushups")
      : t.key === "sitReach" ? getTarget(Number(age), gender, "sitReach")
      : t.key === "sitRise" ? 9
      : t.key === "singleLeg" ? 5
      : 0.5;
    const invert = t.key === "waistHeight";
    const score = getScore(value, target, invert);
    return { ...t, value, target, score, invert };
  }).filter(Boolean) : [];

  const overallScore = scores.length > 0 ? Math.round(scores.reduce((acc, s) => acc + (s?.score.pct || 0), 0) / scores.length) : 0;

  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#2F5D50]/10 bg-white shadow-2xl shadow-[#2F5D50]/10">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-[#E8EFE3]/30 md:px-7 md:py-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2F5D50] to-[#4a8a7a] shadow-lg shadow-[#2F5D50]/25">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="text-left">
            <span className="font-heading text-xl font-bold text-[#1E2520] md:text-2xl">Твоят BioAge резултат</span>
            <p className="text-sm text-[#1E2520]/50">Попълни какво успя да направиш. Няма нужда от всички полета.</p>
          </div>
        </div>
        <motion.span animate={{ rotate: open ? 180 : 0 }} className="text-[#9CAF88]">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="6 9 12 15 18 9" /></svg>
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.4 }}>
            <div className="space-y-6 px-5 pb-5 md:px-7 md:pb-7">
              {/* Profile */}
              <div className="rounded-3xl border border-[#2F5D50]/10 bg-gradient-to-br from-[#E8EFE3] to-[#FAF7EF] p-4 md:p-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-[#2F5D50]">Профил</p>
                    <p className="text-xs text-[#1E2520]/50">За да сравним резултатите с правилната група.</p>
                  </div>
                  <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-bold text-[#2F5D50]">Стъпка 1</span>
                </div>
                <div className="grid gap-3 md:grid-cols-[0.8fr_1.2fr]">
                  <label className="rounded-2xl border border-[#2F5D50]/10 bg-white p-3 shadow-sm">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#1E2520]/45">Възраст</span>
                    <input type="number" value={age} onChange={(e) => { setAge(e.target.value); setShowResults(false); }} placeholder="25" className="w-full rounded-xl border border-[#2F5D50]/15 bg-[#FAF7EF] px-4 py-3 text-lg font-bold text-[#1E2520] outline-none transition focus:ring-2 focus:ring-[#2F5D50]/30" />
                  </label>
                  <div className="rounded-2xl border border-[#2F5D50]/10 bg-white p-3 shadow-sm">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#1E2520]/45">Пол</span>
                    <div className="grid grid-cols-2 gap-2">
                      {(["men", "women"] as const).map((g) => (
                        <button key={g} onClick={() => { setGender(g); setShowResults(false); }} className={`py-3 rounded-xl font-bold transition-all ${gender === g ? "bg-[#2F5D50] text-white shadow-lg shadow-[#2F5D50]/20 scale-[1.02]" : "bg-[#FAF7EF] border border-[#2F5D50]/10 text-[#1E2520] hover:bg-[#E8EFE3]"}`}>
                          {g === "men" ? "Мъж" : "Жена"}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Test inputs */}
              <div className="rounded-3xl border border-[#2F5D50]/10 bg-[#FAF7EF] p-4 md:p-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-[#2F5D50]">Резултати</p>
                    <p className="text-xs text-[#1E2520]/50">Въведи числата от тестовете. Празните полета се пропускат.</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#2F5D50]">Стъпка 2</span>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {tests.map((field) => (
                    <div key={field.key} className="flex items-center gap-3 rounded-2xl border border-[#2F5D50]/10 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-[#1E2520] mb-0.5">{field.label}</label>
                        <span className="text-[10px] text-[#1E2520]/40">{field.desc}</span>
                      </div>
                      <div className="w-24 flex-shrink-0">
                        <input type="number" step="any" value={results[field.key]} onChange={(e) => { setResults({ ...results, [field.key]: e.target.value }); setShowResults(false); }} placeholder={field.placeholder} className="w-full rounded-xl border border-[#2F5D50]/15 bg-[#FAF7EF] px-3 py-2 text-center font-bold text-[#1E2520] outline-none transition focus:ring-2 focus:ring-[#2F5D50]/30" />
                        <span className="mt-1 block text-center text-[10px] text-[#1E2520]/40">{field.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button onClick={() => { if (age) setShowResults(true); }} disabled={!age} className="w-full rounded-2xl bg-gradient-to-r from-[#2F5D50] to-[#4a8a7a] py-4 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#2F5D50]/25 disabled:translate-y-0 disabled:opacity-30 disabled:shadow-none">
                Покажи оценката
              </button>

              {/* Results */}
              <AnimatePresence>
                {showResults && scores.length > 0 && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-5">
                    {/* Overall score */}
                    <div className="bg-gradient-to-br from-[#1E2520] to-[#2F5D50] rounded-2xl p-6 text-white text-center">
                      <p className="text-sm text-white/50 uppercase tracking-wider mb-2">Обща оценка</p>
                      <div className="relative w-28 h-28 mx-auto mb-3">
                        <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="42" fill="none" stroke="white" strokeWidth="6" opacity="0.1" />
                          <motion.circle cx="50" cy="50" r="42" fill="none" stroke={overallScore >= 70 ? "#9CAF88" : overallScore >= 40 ? "#C9824A" : "#dc2626"} strokeWidth="6" strokeLinecap="round" strokeDasharray={264} initial={{ strokeDashoffset: 264 }} animate={{ strokeDashoffset: 264 - (264 * overallScore) / 100 }} transition={{ duration: 1.5, ease: "easeOut" }} />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-heading font-bold text-3xl">{overallScore}%</span>
                        </div>
                      </div>
                      <p className="text-white/70">{overallScore >= 80 ? "Страхотно! Ти си в отлична форма." : overallScore >= 60 ? "Добре се справяш! Има място за подобрение." : overallScore >= 40 ? "Продължавай да работиш. Всеки ден напредваш." : "Започни от малкото. Постоянството е ключът."}</p>
                    </div>

                    {/* Individual results */}
                    <div className="space-y-3">
                      {scores.map((s) => {
                        if (!s) return null;
                        return (
                          <motion.div key={s.key} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-[#FAF7EF] rounded-2xl p-4">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-3">
                                <div className={`w-9 h-9 ${s.score.bg} rounded-xl flex items-center justify-center`}>
                                  <svg className="w-4 h-4 text-white" fill={s.score.emoji === "star" ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d={emojiMap[s.score.emoji]} />
                                  </svg>
                                </div>
                                <div>
                                  <p className="font-heading font-bold text-sm text-[#1E2520]">{s.label}</p>
                                  <p className="text-[10px] text-[#1E2520]/40">Твой: {s.value} {s.unit} | Цел: {s.target} {s.unit}</p>
                                </div>
                              </div>
                              <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${s.score.bg}`}>{s.score.label}</span>
                            </div>
                            {/* Progress bar */}
                            <div className="h-2 bg-[#1E2520]/10 rounded-full overflow-hidden">
                              <motion.div initial={{ width: 0 }} animate={{ width: `${s.score.pct}%` }} transition={{ duration: 1, ease: "easeOut" }} className={`h-full rounded-full ${s.score.bg}`} />
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
