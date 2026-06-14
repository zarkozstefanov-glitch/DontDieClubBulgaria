import Image from "next/image";
import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/AnimatedSection";
import BioAgeCalculator from "@/components/BioAgeCalculator";
import BioAgeTestsGrid from "@/components/BioAgeTestsGrid";
import Footer from "@/components/Footer";
import NextStepCTA from "@/components/NextStepCTA";

export const metadata = {
  title: "BioAge Тест | Don't Die Club Bulgaria",
  description: "Шест теста за биологична възраст с инструкции и интерактивен калкулатор. Измери реалната си физическа възраст.",
};

const bioAgeTests = [
  {
    title: "Лицеви опори",
    img: "/images/stock/pushups.jpg",
    instruction: "Докосни тиксото с гърдите, ръцете на ширината на раменете. Без почивка, без пауза — максимален брой с добра форма до отказ.",
    howTo: "Легни по корем, ръце на ширината на раменете. Изпъни тялото. Спусни се докато гърдите докоснат пода, изтласкай нагоре. Повтори до изтощаване.",
    targets: { women: "20's: 8+ | 30's: 8+ | 40's: 7+ | 50's: 5+ | 60's: 4+", men: "20's: 23+ | 30's: 20+ | 40's: 16+ | 50's: 13+ | 60's: 12+" },
  },
  {
    title: "Сядане и ставане",
    img: "/images/stock/squat.jpg",
    instruction: "От изправена позиция седни с кръстосани крака на пода и се изправи без да използваш ръце, лакти или колене за опора. Босо.",
    howTo: "Стартираш с 10 точки. Всяко докосване на пода с ръка/коляно/лакът = -1 точка. Леко залюляване = -0.5 точки. 3 опита, взимаш най-добрия резултат.",
    targets: { women: "Под 45 г.: 9+ точки (над 8 = топ 25%)", men: "Под 45 г.: 9+ точки (под 8 = долни 25%)" },
  },
  {
    title: "Sit & Reach",
    img: "/images/stock/sitreach.jpg",
    instruction: "Тест за гъвкавост. Без обувки. Краката на 38 см линия. С изправени колене се навеждаш напред и задържаш.",
    howTo: "Седни на пода, крака изпънати напред. Петите на 38 см маркировка. Бавно се навеждай напред с ръце, задръж 2-3 секунди при максимума.",
    targets: { women: "18-35: 48 см | 36-45: 46 см | 46-55: 43 см | 56-65: 40 см", men: "18-25: 46 см | 26-35: 43 см | 36-45: 38 см | 46-55: 33 см" },
  },
  {
    title: "Стоене на един крак",
    img: "/images/stock/balance.jpg",
    instruction: "Тест за баланс. Затвори очи и стой на един крак. Другият крак сгънат в коляното. Три опита на всеки крак.",
    howTo: "Застани прав. Затвори очи. Вдигни единия крак (коляно сгънато). Ръцете до тялото. Измери колко секунди издържаш без да залиташ.",
    targets: { women: "Цел: 5+ секунди (под 5 = повишен риск от падания)", men: "Цел: 5+ секунди (под 5 = повишен риск от падания)" },
  },
  {
    title: "Време за реакция",
    img: "/images/stock/reaction.jpg",
    instruction: "Изтегли приложение за тест на реакцията. Направи 5 опита за всяка ръка. Записваш средния резултат.",
    howTo: "Инсталирай 'Reaction Time & Reflex Test' от App Store / Google Play. Натисни екрана веднага щом цветът се промени. Повтори 5 пъти за всяка ръка.",
    targets: { women: "Средно: 200-250 мс (отличен: под 200 мс)", men: "Средно: 200-250 мс (отличен: под 200 мс)" },
  },
  {
    title: "Талия / Ръст",
    img: "/images/stock/waist.jpg",
    instruction: "Измери талията (най-тясната част между ребрата и ханша) и височината си. Без да прибираш корема. Раздели талия на ръст.",
    howTo: "С метър измери талията релаксирано. Измери височината. Раздели: напр. 80 см талия / 175 см ръст = 0.457. Целта е под 0.5.",
    targets: { women: "Цел: под 0.5 съотношение", men: "Цел: под 0.5 съотношение" },
  },
];

export default function BioAgePage() {
  return (
    <>
      <Navigation />

      <main>
        {/* HERO */}
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/stock/balance.jpg" alt="BioAge тест" fill sizes="100vw" className="object-cover" priority quality={85} />
            <div className="absolute inset-0 bg-gradient-to-b from-[#102A3A]/80 via-[#102A3A]/60 to-[#E2F4EA]" />
          </div>
          <div className="relative max-w-7xl mx-auto px-5 md:px-8">
            <AnimatedSection direction="left" delay={0.2}>
              <span className="text-[#74B9E8] font-heading font-bold text-sm uppercase tracking-widest">Измери се</span>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3 mb-4 leading-tight">
                BioAge <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#74B9E8] to-[#4FBF82]">тест</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
                Шест теста, които показват реалната ти физическа възраст. Снимки и инструкции за всеки тест.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* TESTS GRID */}
        <section className="py-16 md:py-24 bg-[#E2F4EA]">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <BioAgeTestsGrid tests={bioAgeTests} />

            {/* CALCULATOR */}
            <AnimatedSection direction="up" delay={0.3}>
              <div className="mt-12 max-w-4xl mx-auto">
                <BioAgeCalculator />
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
      <NextStepCTA href="/food" label="Виж храненето" />
    </>
  );
}
