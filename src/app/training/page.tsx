import Image from "next/image";
import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/AnimatedSection";
import TrainingTabs from "@/components/TrainingTabs";
import VideoPlayer from "@/components/VideoPlayer";
import Footer from "@/components/Footer";
import NextStepCTA from "@/components/NextStepCTA";

export const metadata = {
  title: "Тренировки | Don't Die Клуб България",
  description: "Програми за тренировки за начинаещи, средно напреднали и напреднали. Упражнения за стойка с видео инструкции.",
};

export default function TrainingPage() {
  return (
    <>
      <Navigation />

      <main>
        {/* HERO */}
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/stock/training.jpg" alt="Тренировка" fill sizes="100vw" className="object-cover" priority quality={85} />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f1c]/80 via-[#1a1f1c]/60 to-[#FAF7EF]" />
          </div>
          <div className="relative max-w-7xl mx-auto px-5 md:px-8">
            <AnimatedSection direction="left" delay={0.2}>
              <span className="text-[#9CAF88] font-heading font-bold text-sm uppercase tracking-widest">Програми</span>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3 mb-4 leading-tight">
                Тренировки за <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9CAF88] to-[#2F5D50]">всяко ниво</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
                Избери нивото си и виж упражненията. Всяка програма е структурирана по категории — от кардио до мобилност.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* TRAINING TABS */}
        <section className="py-16 md:py-24 bg-[#FAF7EF]">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <AnimatedSection direction="left">
                <div className="relative rounded-3xl overflow-hidden h-[300px] shadow-2xl">
                  <Image src="/images/stock/pushups.jpg" alt="Тренировка на открито" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white font-heading font-bold text-lg">От начинаещ до напреднал</p>
                    <p className="text-white/60 text-sm">Кардио, сила, HIIT, мобилност</p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.2}>
                <TrainingTabs />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* POSTURE */}
        <section className="py-20 md:py-28 bg-[#E8EFE3]">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <AnimatedSection direction="up">
              <div className="text-center mb-12">
                <span className="text-[#C9824A] font-heading font-bold text-sm uppercase tracking-widest">Стойка</span>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#1E2520] mt-3">Подобряване на стойката</h2>
              </div>
            </AnimatedSection>

            {/* Posture images */}
            <AnimatedSection direction="scale">
              <div className="grid grid-cols-3 gap-3 md:gap-5 mb-12 max-w-3xl mx-auto">
                {["/images/posture/posture1.png", "/images/posture/posture2.png", "/images/posture/posture3.png"].map((src, i) => (
                  <div key={i} className="rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                    <Image src={src} alt={`Стойка ${i + 1}`} width={380} height={480} className="w-full h-auto object-cover" />
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Exercise videos */}
            <div className="grid md:grid-cols-3 gap-5 mb-8">
              <AnimatedSection direction="left" delay={0.1}>
                <div className="bg-white rounded-3xl border border-[#2F5D50]/10 shadow-sm overflow-hidden h-full">
                  <VideoPlayer src="/videos/exercise1.mp4" title="Упражнение 1 — Натиск върху челото" />
                  <div className="p-5">
                    <h3 className="font-heading font-bold mb-2">Упражнение 1</h3>
                    <p className="text-sm text-[#1E2520]/60 leading-relaxed">
                      Представете си, че някой ви дърпа с връв отгоре. С едната ръка окажете натиск върху челото. Минимално усилие, без стягане на врата.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.2}>
                <div className="bg-white rounded-3xl border border-[#2F5D50]/10 shadow-sm overflow-hidden h-full">
                  <VideoPlayer src="/videos/exercise2.mp4" title="Упражнение 2 — Лакти назад" />
                  <div className="p-5">
                    <h3 className="font-heading font-bold mb-2">Упражнение 2</h3>
                    <p className="text-sm text-[#1E2520]/60 leading-relaxed">
                      Вратът изправен. Лактите леко свити и отзад. Траекторията — напред и леко нагоре. Раменете остават свити.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.3}>
                <div className="bg-white rounded-3xl border border-[#2F5D50]/10 shadow-sm overflow-hidden h-full">
                  <VideoPlayer src="/videos/trajectory.mp4" title="Траектория на движението" />
                  <div className="p-5">
                    <h3 className="font-heading font-bold mb-2">Траектория</h3>
                    <p className="text-sm text-[#1E2520]/60 leading-relaxed">
                      Правилната посока на движението е ключова. Дърпайте главата нагоре, не назад.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection direction="up" delay={0.3}>
              <div className="bg-gradient-to-r from-[#C9824A]/10 to-[#C9824A]/5 rounded-3xl p-6 md:p-8 border border-[#C9824A]/15 max-w-3xl mx-auto">
                <h4 className="font-heading font-bold text-[#3A2A22] mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#C9824A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  Правила за безопасност
                </h4>
                <ul className="text-sm text-[#3A2A22]/70 space-y-2">
                  <li className="flex items-start gap-2"><span className="text-[#C9824A]">&#8226;</span>Една серия до изтощаване, само 2 пъти седмично</li>
                  <li className="flex items-start gap-2"><span className="text-[#C9824A]">&#8226;</span>Минимално усилие, без стягане на врата</li>
                  <li className="flex items-start gap-2"><span className="text-[#C9824A]">&#8226;</span>60 дни за първи ефект, 5-9 месеца за по-добри резултати</li>
                  <li className="flex items-start gap-2"><span className="text-[#C9824A]">&#8226;</span>Навик: понеделник и петък сутрин (5-6 мин.)</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
      <NextStepCTA href="/bioage" label="Измери се" />
    </>
  );
}
