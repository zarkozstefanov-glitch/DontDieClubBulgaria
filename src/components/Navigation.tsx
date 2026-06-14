"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { href: "/", label: "Начало" },
  { href: "/training", label: "Тренировки" },
  { href: "/bioage", label: "BioAge" },
  { href: "/food", label: "Храна" },
  { href: "/meetups", label: "Събирания" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className="fixed left-0 right-0 top-0 z-[100] border-b border-white/10 bg-[#102A3A]/82 shadow-xl shadow-black/20 backdrop-blur-2xl"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-3 py-2.5 md:px-8 md:py-3">
          {/* Logo */}
          <Link href="/" className="group flex min-w-0 flex-1 items-center gap-2.5 md:flex-none md:gap-3">
            <Image
              src="/images/logo.jpg"
              alt="Don't Die България"
              width={38}
              height={38}
              className="h-9 w-9 flex-shrink-0 rounded-xl ring-1 ring-white/20 transition-all group-hover:ring-white/40 md:h-10 md:w-10"
            />
            <div className="min-w-0">
              <p className="truncate font-heading text-[12px] font-bold leading-tight text-white sm:text-[13px] md:text-base">
                Dont Die Club Bulgaria
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  pathname === href
                    ? "bg-white text-[#102A3A]"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="relative ml-auto inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/92 text-[#102A3A] shadow-lg shadow-black/20 transition hover:bg-white md:hidden"
            aria-label="Отвори меню"
            aria-expanded={menuOpen}
            type="button"
          >
            <span className="relative block h-4 w-6">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="absolute left-0 top-0 block h-0.5 w-6 origin-center rounded-full bg-current"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                className="absolute left-0 top-2 block h-0.5 w-6 rounded-full bg-current"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="absolute left-0 top-4 block h-0.5 w-6 origin-center rounded-full bg-current"
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-[#102A3A]/92 backdrop-blur-2xl"
          >
            <div className="flex flex-col items-center gap-2">
              {navItems.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-2xl font-heading font-bold px-8 py-3 rounded-2xl transition-colors block ${
                      pathname === href
                        ? "text-white bg-white/10"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
