import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import NextStepCTA from "@/components/NextStepCTA";
import HeroNotifications from "@/components/HeroNotifications";

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="bg-[#F5FAF7]">
        {/* HERO */}
        <section className="relative min-h-[100svh] overflow-hidden bg-[#102A3A]">
          <div className="absolute inset-0">
            <Image
              src="/images/stock/hero-outdoor-training.png"
              alt="Групова тренировка сред природата"
              fill
              sizes="100vw"
              className="object-cover hero-pan-mobile md:object-center"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#102A3A]/65 via-[#102A3A]/45 to-[#102A3A]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#102A3A]/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pt-20 pb-6 md:px-8 md:pt-28 md:pb-10">
            <div className="max-w-2xl w-full">
              <AnimatedSection direction="left" delay={0.4}>
                <h1 className="mb-3 max-w-xl font-heading text-[2rem] font-bold leading-[1.02] text-white sm:text-4xl md:mb-5 md:text-7xl">
                  Влез във форма.
                  <span className="block text-[#74B9E8]">Изгради навици.</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection direction="left" delay={0.6}>
                <p className="mb-4 max-w-lg text-[15px] leading-relaxed text-white/76 sm:text-base md:mb-8 md:text-xl">
                  Общност за движение, здраве и дълъг активен живот. Тренираме навън, следим BioAge и изграждаме навици без крайности.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.8}>
                <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
                  <Link href="/about" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#4FBF82] px-6 py-3 text-[15px] font-bold text-[#102A3A] transition-all hover:-translate-y-0.5 hover:bg-[#5fcb90] hover:shadow-2xl hover:shadow-[#4FBF82]/25 sm:text-base md:w-auto md:px-7 md:py-4">
                    <span>Научи за нас</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                  <a href="#za-kogo" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/[0.18] bg-white/[0.08] px-6 py-3 text-[15px] font-bold text-white backdrop-blur-md transition-all hover:bg-white/[0.14] sm:text-base md:w-auto md:px-7 md:py-4">
                    <span>Как работим</span>
                    <span>→</span>
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={1}>
                <div className="mt-5">
                  <HeroNotifications />
                </div>
              </AnimatedSection>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 animate-bounce md:flex">
            <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
            <svg className="w-5 h-5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* FOR WHOM */}
        <section id="za-kogo" className="py-20 md:py-32 bg-[#F5FAF7] relative overflow-hidden scroll-mt-16">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4FBF82]/20 to-transparent" />
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <AnimatedSection direction="left">
                  <span className="text-[#E98B63] font-heading font-bold text-sm uppercase tracking-widest">За кого е клубът</span>
                  <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#1D2B34] mt-3 mb-4 leading-tight">
                    За хора, които искат да се чувстват
                    <span className="text-[#4FBF82]"> по-силни, по-леки и по-живи</span>
                  </h2>
                  <p className="text-[#1D2B34]/60 text-lg mb-6">
                    Не е нужно да си спортист. Нужно е само да искаш да започнеш — с движение, структура и хора, които те дърпат напред.
                  </p>
                </AnimatedSection>
                <div className="space-y-4">
                  {[
                    { icon: "M13 10V3L4 14h7v7l9-11h-7z", text: "Искаш повече енергия през деня, а не просто \"да отслабнеш\"." },
                    { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", text: "Искаш да тренираш, но ти липсва постоянство или среда." },
                    { icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", text: "Интересуваш се от дълголетие, биохакинг и измеримо здраве." },
                    { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", text: "Предпочиташ реални навици пред крайни диети и мотивационни клишета." },
                    { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", text: "Искаш хора около себе си, които също се опитват да живеят по-добре." },
                  ].map((item, i) => (
                    <AnimatedSection key={i} direction="left" delay={i * 0.1}>
                      <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-colors group">
                        <div className="w-12 h-12 bg-[#4FBF82] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                          </svg>
                        </div>
                        <p className="font-medium text-[#1D2B34] text-lg pt-2.5">{item.text}</p>
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
                    <p className="font-heading font-bold text-[#4FBF82] text-3xl">150+</p>
                    <p className="text-sm text-[#1D2B34]/60">мин. движение/седмица</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section className="py-20 md:py-32 bg-[#4FBF82] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image src="/images/stock/nature.jpg" alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="relative max-w-5xl mx-auto px-5 md:px-8 text-center">
            <AnimatedSection direction="scale">
              <span className="text-white/80 font-heading font-bold text-sm uppercase tracking-widest">Нашата мисия</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-8 leading-tight">
                Правим здравословния живот по-лесен, защото го правим <span className="text-[#102A3A]">заедно</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/85 leading-relaxed max-w-3xl mx-auto mb-6">
                Повечето хора не се провалят, защото не знаят какво да правят. Провалят се, защото са сами, нямат структура и губят инерция.
              </p>
              <blockquote className="text-lg md:text-xl text-white/70 italic leading-relaxed max-w-3xl mx-auto mb-10">
                &ldquo;Когато около теб има хора, които се движат, мерят прогрес и избират по-добре — става много по-лесно да правиш същото.&rdquo;
              </blockquote>
              <div className="flex flex-wrap justify-center gap-3">
                {["Движение", "Сила", "Кардио", "Мобилност", "Хранене", "Прогрес", "Предизвикателства", "Мотивация", "Дълголетие"].map((tag, i) => (
                  <AnimatedSection key={tag} direction="up" delay={i * 0.05}>
                    <span className="px-5 py-2 bg-white/15 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/15 hover:bg-white/25 transition-colors cursor-default">
                      {tag}
                    </span>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* BRYAN JOHNSON */}
        <section className="py-20 md:py-32 bg-[#F5FAF7]">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left">
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <Image src="/images/stock/meditation.jpg" alt="Медитация и дълголетие" width={600} height={500} className="w-full h-[450px] object-cover" />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-[#E98B63] text-white rounded-2xl p-4 shadow-xl">
                    <p className="font-heading font-bold text-lg">Blueprint</p>
                    <p className="text-xs text-white/70">Protocol</p>
                  </div>
                </div>
              </AnimatedSection>
              <div>
                <AnimatedSection direction="right">
                  <span className="text-[#E98B63] font-heading font-bold text-sm uppercase tracking-widest">Вдъхновението</span>
                  <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#1D2B34] mt-3 mb-6 leading-tight">Bryan Johnson</h2>
                  <p className="text-[#1D2B34]/70 text-lg leading-relaxed mb-4">
                    Клубът е вдъхновен от Bryan Johnson и идеята, че здравето може да се подобрява чрез измерими навици: движение, хранене, сън, дисциплина и редовна обратна връзка.
                  </p>
                  <p className="text-[#1D2B34]/70 text-lg leading-relaxed mb-6">
                    Ние не копираме екстремни протоколи. Вземаме практичните принципи и ги адаптираме към реалния живот в България — работа, семейство, градска среда, ограничено време и нормален бюджет.
                  </p>
                </AnimatedSection>
                <AnimatedSection direction="right" delay={0.2}>
                  <div className="bg-[#E98B63]/10 rounded-2xl p-5 border border-[#E98B63]/20">
                    <p className="text-sm text-[#1D2B34]/80">
                      Don&apos;t Die Club Bulgaria е независима общност, вдъхновена от публично споделени идеи. Не сме официално свързани с Bryan Johnson или Blueprint. Съдържанието е с образователна и мотивационна цел и не представлява медицински съвет.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="py-20 md:py-32 bg-[#102A3A] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#143D4F/40,transparent_70%)]" />
          <div className="relative max-w-7xl mx-auto px-5 md:px-8">
            <AnimatedSection direction="up">
              <div className="text-center mb-16">
                <span className="text-[#74B9E8] font-heading font-bold text-sm uppercase tracking-widest">Какво правим</span>
                <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">Практични навици, които можеш да повториш всяка седмица</h2>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { title: "Тренировка", desc: "Сила, мобилност и кардио на открито — с темпо, подходящо за реални хора, не за професионални атлети.", img: "/images/stock/training.jpg", color: "from-[#4FBF82] to-[#3a9966]", href: "/training" },
                { title: "Храна", desc: "Лесни избори за повече енергия: протеин, истинска храна, по-малко хаос и повече повторяемост.", img: "/images/stock/food.jpg", color: "from-[#E98B63] to-[#d47a55]", href: "/food" },
                { title: "BioAge тест", desc: "Проследяваме прогреса с прости тестове: лицеви опори, баланс, гъвкавост и съотношение талия/ръст.", img: "/images/stock/balance.jpg", color: "from-[#74B9E8] to-[#5a9fd4]", href: "/bioage" },
                { title: "Срещи", desc: "Седмични събирания, предизвикателства и общност, която ти помага да не започваш отначало всеки понеделник.", img: "/images/stock/community.jpg", color: "from-[#1D2B34] to-[#143D4F]", href: "/meetups" },
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
        <section className="py-20 md:py-32 bg-[#143D4F] text-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <AnimatedSection direction="up">
              <div className="text-center mb-6">
                <span className="text-[#74B9E8] font-heading font-bold text-sm uppercase tracking-widest">Действай</span>
                <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">Малки предизвикателства с реален ефект</h2>
              </div>
              <p className="text-center text-white/60 text-lg max-w-2xl mx-auto mb-14">
                Не гоним перфектен режим. Гоним навици, които можеш да изпълниш, повториш и надградиш.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { text: "7 дни ходене след хранене", desc: "10-15 мин. движение след основно хранене.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                { text: "30 дни без нулев ден", desc: "Всеки ден поне едно действие за тялото.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                { text: "2 тренировки седмично", desc: "Основни упражнения, мобилност и контрол.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
                { text: "BioAge проверка", desc: "Мерим прогреса, не егото.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
                { text: "По-добър избор в магазина", desc: "Учим се да четем етикети и да избираме по-умно.", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
                { text: "Храна без крайности", desc: "Повече протеин, по-малко хаос, по-лесно повторение.", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
              ].map((ch, i) => (
                <AnimatedSection key={ch.text} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.08}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all text-center h-full group hover:-translate-y-1">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#4FBF82] transition-colors">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={ch.icon} />
                      </svg>
                    </div>
                    <p className="font-bold text-sm mb-1">{ch.text}</p>
                    <p className="text-white/50 text-xs">{ch.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 md:py-28 bg-[#E2F4EA]">
          <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
            <AnimatedSection direction="scale">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#1D2B34] mb-6">Ела на следващото събиране</h2>
              <p className="text-[#1D2B34]/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
                Няма нужда да си в перфектна форма. Няма нужда да знаеш всичко за хранене, тренировки или дълголетие. Ела, движи се с нас и започни с една малка стъпка.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/meetups" className="group px-8 py-4 bg-[#4FBF82] text-[#102A3A] rounded-full font-bold text-base hover:shadow-2xl hover:shadow-[#4FBF82]/30 transition-all hover:-translate-y-0.5 text-center">
                  Виж следващото събиране
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
                <a href="https://www.instagram.com/dont.diebulgaria" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-[#1D2B34] border border-[#1D2B34]/10 rounded-full font-bold text-base hover:shadow-lg transition-all text-center">
                  Последвай ни в Instagram
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="py-14 bg-[#F5FAF7]">
          <div className="max-w-3xl mx-auto px-5">
            <AnimatedSection direction="up">
              <div className="bg-gradient-to-r from-[#E98B63]/10 to-[#E98B63]/5 rounded-3xl p-7 border border-[#E98B63]/15">
                <h3 className="font-heading font-bold text-[#1D2B34] mb-2">Безопасност и отговорност</h3>
                <p className="text-sm text-[#1D2B34]/70 leading-relaxed">
                  Информацията в сайта е с образователна и мотивационна цел. Тя не е медицински съвет. Ако имате заболяване, травми или не сте тренирали отдавна, консултирайте се с медицински специалист.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
      <NextStepCTA href="/about" label="Виж повече за нас" />
    </>
  );
}
