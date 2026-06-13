import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import NextStepCTA from "@/components/NextStepCTA";

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="bg-[#FAF7EF]">
        {/* HERO */}
        <section className="relative min-h-[100svh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/stock/hero-outdoor-training.png"
              alt="Групова тренировка сред природата"
              fill
              sizes="100vw"
              className="object-cover object-[62%_center] md:object-center"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#1a1f1c]" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          </div>

          <div className="absolute top-20 right-10 hidden h-72 w-72 rounded-full bg-[#2F5D50]/20 blur-[100px] animate-pulse md:block" />
          <div className="absolute bottom-20 left-10 hidden h-96 w-96 rounded-full bg-[#C9824A]/15 blur-[120px] animate-pulse md:block" style={{ animationDelay: "2s" }} />

          <div className="relative mx-auto w-full max-w-7xl px-5 pt-24 pb-8 md:px-8 md:py-32">
            <div className="max-w-2xl">
              <AnimatedSection direction="left" delay={0.4}>
                <h1 className="mb-3 font-heading text-3xl font-bold leading-[1.02] text-white sm:text-5xl md:mb-5 md:text-7xl">
                  Живей здраво.
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9CAF88] to-[#C9824A]">
                    Заедно, навън.
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection direction="left" delay={0.6}>
                <p className="mb-5 max-w-lg text-base leading-relaxed text-white/72 md:mb-8 md:text-xl">
                  Клуб за движение, навици и хора, които искат повече енергия, спокойствие и живот в синхрон със себе си.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.8}>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href="/meetups" className="group w-full rounded-full bg-white px-7 py-3.5 text-center text-base font-bold text-[#1a1f1c] transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-white/20 md:w-auto md:px-8 md:py-4">
                    Присъедини се
                    <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                  <Link href="/training" className="w-full rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-center text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 md:w-auto md:px-8 md:py-4">
                    Виж протоколите
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={1}>
                <div className="mt-6 grid max-w-2xl grid-cols-3 gap-1.5 md:mt-10 md:gap-3">
                  {[
                    { title: "Навън", label: "парк и въздух" },
                    { title: "Заедно", label: "не сам" },
                    { title: "Просто", label: "повтаряш" },
                  ].map((feature) => (
                    <div key={feature.title} className="rounded-2xl border border-white/10 bg-white/10 p-2.5 backdrop-blur-md md:p-4">
                      <p className="font-heading text-sm font-bold text-white md:text-xl">{feature.title}</p>
                      <p className="text-[10px] text-white/50 md:text-sm">{feature.label}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 animate-bounce sm:flex">
            <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
            <svg className="w-5 h-5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* FOR WHOM */}
        <section className="py-20 md:py-32 bg-[#FAF7EF] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2F5D50]/20 to-transparent" />
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <AnimatedSection direction="left">
                  <span className="text-[#C9824A] font-heading font-bold text-sm uppercase tracking-widest">За кого е клубът</span>
                  <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#1E2520] mt-3 mb-6 leading-tight">
                    Събиранията са за хора, които искат
                    <span className="text-[#2F5D50]"> повече от живота</span>
                  </h2>
                </AnimatedSection>
                <div className="space-y-4">
                  {[
                    { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", text: "Искат да живеят по-дълго и здравословно" },
                    { icon: "M13 10V3L4 14h7v7l9-11h-7z", text: "Искат да подобрят навиците си" },
                    { icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", text: "Имат интерес към наука и антистареене" },
                    { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", text: "Липсва им група и мотивация" },
                  ].map((item, i) => (
                    <AnimatedSection key={i} direction="left" delay={i * 0.1}>
                      <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-colors group">
                        <div className="w-12 h-12 bg-[#2F5D50] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                          </svg>
                        </div>
                        <p className="font-medium text-[#1E2520] text-lg pt-2.5">{item.text}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
              <AnimatedSection direction="right" delay={0.3}>
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <Image src="/images/stock/running.jpg" alt="Тичане в природата" width={600} height={700} className="w-full h-[500px] object-cover" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl">
                    <p className="font-heading font-bold text-[#2F5D50] text-3xl">150+</p>
                    <p className="text-sm text-[#1E2520]/60">мин. движение/седмица</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section className="py-20 md:py-32 bg-[#2F5D50] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image src="/images/stock/nature.jpg" alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="relative max-w-5xl mx-auto px-5 md:px-8 text-center">
            <AnimatedSection direction="scale">
              <span className="text-[#9CAF88] font-heading font-bold text-sm uppercase tracking-widest">Нашата мисия</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-8 leading-tight">
                Превръщаме здравословните навици в <span className="text-[#C9824A]">социално преживяване</span>
              </h2>
              <blockquote className="text-xl md:text-2xl text-white/80 italic leading-relaxed max-w-3xl mx-auto mb-10">
                &ldquo;И така, ще изградим общност от хора, която да ни служи като добър пример и стимул, каквито много от нас нямат около себе си в днешно време.&rdquo;
              </blockquote>
              <div className="flex flex-wrap justify-center gap-3">
                {["Движение", "Сила", "Кардио", "Мобилност", "Хранене", "Био продукти", "Предизвикателства", "Мотивация", "Дълголетие"].map((tag, i) => (
                  <AnimatedSection key={tag} direction="up" delay={i * 0.05}>
                    <span className="px-5 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/10 hover:bg-white/20 transition-colors cursor-default">
                      {tag}
                    </span>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* BRYAN JOHNSON */}
        <section className="py-20 md:py-32 bg-[#FAF7EF]">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left">
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <Image src="/images/stock/meditation.jpg" alt="Медитация и дълголетие" width={600} height={500} className="w-full h-[450px] object-cover" />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-[#C9824A] text-white rounded-2xl p-4 shadow-xl">
                    <p className="font-heading font-bold text-lg">Blueprint</p>
                    <p className="text-xs text-white/70">Protocol</p>
                  </div>
                </div>
              </AnimatedSection>
              <div>
                <AnimatedSection direction="right">
                  <span className="text-[#C9824A] font-heading font-bold text-sm uppercase tracking-widest">Вдъхновението</span>
                  <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#1E2520] mt-3 mb-6 leading-tight">Bryan Johnson</h2>
                  <p className="text-[#1E2520]/70 text-lg leading-relaxed mb-6">
                    Клубът е вдъхновен от Bryan Johnson и неговия подход към измеримото здраве, дисциплината, храненето и дълголетието. Вземаме практичните идеи и ги адаптираме към реалния живот в България.
                  </p>
                </AnimatedSection>
                <AnimatedSection direction="right" delay={0.2}>
                  <div className="bg-[#C9824A]/10 rounded-2xl p-5 border border-[#C9824A]/20">
                    <p className="text-sm text-[#3A2A22]/80">
                      Don&apos;t Die Клуб България е независима общност, вдъхновена от публично споделени идеи. Съдържанието не представлява медицински съвет.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* FOUR PILLARS */}
        <section className="py-20 md:py-32 bg-[#1E2520] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#2F5D50/30,transparent_70%)]" />
          <div className="relative max-w-7xl mx-auto px-5 md:px-8">
            <AnimatedSection direction="up">
              <div className="text-center mb-16">
                <span className="text-[#9CAF88] font-heading font-bold text-sm uppercase tracking-widest">Какво правим</span>
                <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">Малко, но редовно</h2>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { title: "Тренировка", desc: "Сила, мобилност и кардио в човешко темпо.", img: "/images/stock/training.jpg", color: "from-[#2F5D50] to-[#4a8a7a]", href: "/training" },
                { title: "Храна", desc: "Практични избори, които можеш да повториш утре.", img: "/images/stock/food.jpg", color: "from-[#C9824A] to-[#e09b5c]", href: "/food" },
                { title: "BioAge тест", desc: "Лицеви, баланс, гъвкавост и талия/ръст. Мериш прогрес, не егото.", img: "/images/stock/balance.jpg", color: "from-[#9CAF88] to-[#b5c9a0]", href: "/bioage" },
                { title: "Срещи", desc: "Неделя е по-лесна, когато някой те чака там.", img: "/images/stock/community.jpg", color: "from-[#3A2A22] to-[#5a4a42]", href: "/meetups" },
              ].map((pillar, i) => (
                <AnimatedSection key={pillar.title} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.1}>
                  <Link href={pillar.href} className="group relative rounded-3xl overflow-hidden h-[320px] md:h-[400px] cursor-pointer block">
                    <Image src={pillar.img} alt={pillar.title} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${pillar.color} opacity-80 group-hover:opacity-90 transition-opacity`} />
                    <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                      <h3 className="font-heading font-bold text-xl md:text-2xl mb-2 text-white">{pillar.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{pillar.desc}</p>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CHALLENGES */}
        <section className="py-20 md:py-32 bg-[#2F5D50] text-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <AnimatedSection direction="up">
              <div className="text-center mb-14">
                <span className="text-[#9CAF88] font-heading font-bold text-sm uppercase tracking-widest">Действай</span>
                <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">Предизвикателства</h2>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { text: "7 дни ходене след хранене", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                { text: "30 дни без пропусната тренировка", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                { text: "2x седмично упражнения за стойка", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
                { text: "BioAge тест", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
                { text: "Зехтин етикет проверка", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
                { text: "Черен шоколад по критерии", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
              ].map((ch, i) => (
                <AnimatedSection key={ch.text} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.08}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all text-center h-full group hover:-translate-y-1">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C9824A] transition-colors">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={ch.icon} />
                      </svg>
                    </div>
                    <p className="font-medium text-sm">{ch.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="py-14 bg-[#FAF7EF]">
          <div className="max-w-3xl mx-auto px-5">
            <AnimatedSection direction="up">
              <div className="bg-gradient-to-r from-[#C9824A]/10 to-[#C9824A]/5 rounded-3xl p-7 border border-[#C9824A]/15">
                <h3 className="font-heading font-bold text-[#3A2A22] mb-2">Безопасност и отговорност</h3>
                <p className="text-sm text-[#3A2A22]/70 leading-relaxed">
                  Информацията в сайта е с образователна и мотивационна цел. Тя не е медицински съвет. Ако имате заболяване, травми или не сте тренирали отдавна, консултирайте се с медицински специалист.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
      <NextStepCTA href="/about" label="За нас" />
    </>
  );
}
