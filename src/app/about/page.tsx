import Image from "next/image";
import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/AnimatedSection";
import VideoCardPlayer from "@/components/VideoCardPlayer";
import Footer from "@/components/Footer";
import NextStepCTA from "@/components/NextStepCTA";

export const metadata = {
  title: "За нас | Don't Die Club Bulgaria",
  description: "Виж как изглеждат неделните срещи на Don't Die Club Bulgaria: движение, мобилност, хора и реални моменти от общността.",
};

const videos = [
  {
    src: "/videos/about/sunday-meetup.mp4",
    poster: "/images/posters/sunday-meetup.png",
    title: "Неделна среща",
    text: "Хора, движение и добра енергия. Това е основата.",
  },
  {
    src: "/videos/about/outdoor-cardio.mp4",
    poster: "/images/posters/outdoor-cardio.png",
    title: "Навън",
    text: "Парк, колела, бягане, разходки. Не всичко трябва да е зала.",
  },
  {
    src: "/videos/about/mobility-food.mp4",
    poster: "/images/posters/mobility-food.png",
    title: "След тренировката",
    text: "Мобилност, разговори и храна. Общността продължава след края.",
  },
];

const photos = [
  { src: "/images/stock/hero-outdoor-training.png", alt: "Групова тренировка навън" },
  { src: "/images/stock/running.jpg", alt: "Движение навън" },
  { src: "/images/stock/balance.jpg", alt: "Баланс и мобилност" },
  { src: "/images/stock/bryan-johnson.jpg", alt: "Bryan Johnson" },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="bg-[#FAF7EF]">
        <section className="relative min-h-[78svh] overflow-hidden pt-28 text-white md:min-h-[84vh] md:pt-36">
          <Image
            src="/images/stock/hero-outdoor-training.png"
            alt="Don't Die Club Bulgaria"
            fill
            sizes="100vw"
            priority
            className="object-cover object-[62%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f1c]/82 via-[#1a1f1c]/58 to-[#FAF7EF]/95" />

          <div className="relative mx-auto flex max-w-7xl flex-col justify-end px-5 pb-14 md:px-8 md:pb-16">
            <AnimatedSection direction="left">
              <div className="max-w-3xl">
                <p className="mb-3 font-heading text-sm font-bold uppercase tracking-[0.22em] text-[#9CAF88]">За нас</p>
                <h1 className="font-heading text-5xl font-bold leading-[0.98] md:text-7xl">
                  Не сме програма.
                  <span className="block text-[#C9824A]">Срещаме се.</span>
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/76 md:text-xl">
                  Don&apos;t Die Club Bulgaria е седмичен ритъм за хора, които искат повече енергия, по-добро здраве и общност, която ги държи в движение.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-14 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-5 lg:grid-cols-12">
              <AnimatedSection direction="left" className="lg:col-span-5">
                <MediaCard title="Мисия" text="Да направим здравословния живот социален, нормален и повторяем. Не кампания, а седмичен ритъм." />
              </AnimatedSection>
              <AnimatedSection direction="right" className="lg:col-span-7">
                <ImageCard src={photos[0].src} alt={photos[0].alt} kicker="Първо действие" title="Срещаме се навън" text="Открито място, реални хора и тренировка, която можеш да повториш." />
              </AnimatedSection>

              <AnimatedSection direction="right" className="lg:col-span-7">
                <VideoCardPlayer video={videos[0]} kicker="Реален кадър" title="Неделя сутрин" text="Хора, движение и добра енергия. Това е начинът да започнем седмицата." />
              </AnimatedSection>
              <AnimatedSection direction="left" className="lg:col-span-5">
                <MediaCard title="Метод" text="Започваме с движение, после тестове, после разговор. Базово, ясно, без излишен шум." bullets={["Загрявка и мобилност", "Групова тренировка", "BioAge и навици", "Седмично предизвикателство"]} />
              </AnimatedSection>

              <AnimatedSection direction="left" className="lg:col-span-5">
                <MediaCard title="Цел" text="Повече енергия, по-спокоен ум и хора около теб, които вървят в същата посока." />
              </AnimatedSection>
              <AnimatedSection direction="right" className="lg:col-span-7">
                <ImageCard src={photos[3].src} alt={photos[3].alt} kicker="Вдъхновение" title="Bryan Johnson" text="Вдъхновението зад идеята е дисциплина, измерване и грижа за всеки ден." />
              </AnimatedSection>

              <AnimatedSection direction="right" className="lg:col-span-7">
                <VideoCardPlayer video={videos[1]} kicker="Следващ пласт" title="Навън, не само в зала" text="Колела, бягане, разходки и мобилност. Реалният живот е навън." />
              </AnimatedSection>
              <AnimatedSection direction="left" className="lg:col-span-5">
                <MediaCard title="За кого е" text="За хора, които искат структура, но не искат да живеят по програма. За хора, които търсят общност, а не шум." />
              </AnimatedSection>

              <AnimatedSection direction="left" className="lg:col-span-5">
                <MediaCard title="Какво остава" text="Неща, които можеш да повториш следващата седмица. Ако не може да се повтори, не е работещо." />
              </AnimatedSection>
              <AnimatedSection direction="right" className="lg:col-span-7">
                <ImageCard src={photos[2].src} alt={photos[2].alt} kicker="Финал" title="Баланс и контрол" text="Тялото е инструмент. Ние работим за по-добър контрол, сила и устойчивост." />
              </AnimatedSection>

              <AnimatedSection direction="right" className="lg:col-span-7">
                <VideoCardPlayer video={videos[2]} kicker="Краят не е край" title="След тренировката" text="Мобилност, разговори и храна. Именно там се изгражда навикът." />
              </AnimatedSection>
              <AnimatedSection direction="left" className="lg:col-span-5">
                <MediaCard title="Обещание" text="Няма да те заливаме с теория. Ще ти дадем ритъм, място и хора, с които да се върнеш следващата неделя." />
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <NextStepCTA href="/training" label="Ела на тренировка" />
    </>
  );
}

function MediaCard({ title, text, bullets }: { title: string; text: string; bullets?: string[] }) {
  return (
    <div className="h-full rounded-[2rem] border border-[#2F5D50]/10 bg-white p-5 shadow-lg shadow-[#2F5D50]/6 md:p-6">
      <h2 className="font-heading text-xl font-bold text-[#1E2520] md:text-2xl">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-[#1E2520]/65 md:text-[15px]">{text}</p>
      {bullets ? (
        <div className="mt-5 grid gap-3">
          {bullets.map((bullet) => (
            <div key={bullet} className="rounded-2xl bg-[#FAF7EF] px-4 py-3 text-sm font-medium text-[#1E2520]/75">
              {bullet}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function ImageCard({ src, alt, kicker, title, text }: { src: string; alt: string; kicker: string; title: string; text: string }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#2F5D50]/10 bg-white shadow-lg shadow-[#2F5D50]/6">
      <div className="relative aspect-[4/3]">
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f1c]/60 via-[#1a1f1c]/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-white/60">{kicker}</p>
          <h3 className="font-heading text-2xl font-bold">{title}</h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/80">{text}</p>
        </div>
      </div>
    </div>
  );
}

