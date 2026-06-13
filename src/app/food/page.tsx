import Image from "next/image";
import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import NextStepCTA from "@/components/NextStepCTA";

export const metadata = {
  title: "Храна | Don't Die Клуб България",
  description: "Хранене за дълголетие. Протоколи за черен шоколад и зехтин. Къде да намерите качествени продукти в Пловдив.",
};

export default function FoodPage() {
  return (
    <>
      <Navigation />

      <main>
        {/* HERO */}
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/stock/food.jpg" alt="Здравословна храна" fill sizes="100vw" className="object-cover" priority quality={85} />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f1c]/80 via-[#1a1f1c]/60 to-[#1E2520]" />
          </div>
          <div className="relative max-w-7xl mx-auto px-5 md:px-8">
            <AnimatedSection direction="left" delay={0.2}>
              <span className="text-[#C9824A] font-heading font-bold text-sm uppercase tracking-widest">Хранене</span>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3 mb-4 leading-tight">
                Храна за <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9824A] to-[#e09b5c]">дълголетие</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
                Всяка калория трябва да се бори за живота си. Качествени продукти, проверени протоколи.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* FOOD CATEGORIES */}
        <section className="py-16 md:py-24 bg-[#1E2520] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image src="/images/stock/food.jpg" alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E2520] via-[#1E2520]/95 to-[#1E2520]" />
          <div className="relative max-w-7xl mx-auto px-5 md:px-8">
            <AnimatedSection direction="up">
              <blockquote className="text-center text-lg md:text-xl text-white/60 italic max-w-2xl mx-auto mb-16">
                &ldquo;Всяка калория трябва да се бори за живота си.&rdquo;
                <cite className="block mt-2 text-[#C9824A] not-italic text-base font-medium">&mdash; Брайън Джонсън</cite>
              </blockquote>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Въглехидрати и зеленчуци", items: "Горски плодове, леща, домати, гъби, тиквички, елда, киноа, ферментирали храни", gradient: "from-[#2F5D50] to-[#4a8a7a]" },
                { title: "Протеин", items: "Грах, бобови, пилешко филе, мазна риба, яйца, суроватка, неподсладено кисело мляко", gradient: "from-[#C9824A] to-[#e09b5c]" },
                { title: "Здравословни мазнини", items: "Екстра върджин зехтин, авокадо, макадамия, бадеми, орехи, ленено семе, какао", gradient: "from-[#9CAF88] to-[#b5c9a0]" },
              ].map((group, i) => (
                <AnimatedSection key={group.title} direction={i === 0 ? "left" : i === 2 ? "right" : "up"} delay={i * 0.15}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-7 border border-white/10 hover:bg-white/10 transition-all h-full group">
                    <div className={`w-14 h-14 bg-gradient-to-br ${group.gradient} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                      </svg>
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-3">{group.title}</h3>
                    <p className="text-white/60 leading-relaxed">{group.items}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* PROTOCOLS */}
        <section className="py-20 md:py-28 bg-[#FAF7EF]">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <AnimatedSection direction="up">
              <div className="text-center mb-16">
                <span className="text-[#3A2A22] font-heading font-bold text-sm uppercase tracking-widest">Протоколи</span>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#1E2520] mt-3">Продукти за дълголетие</h2>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Chocolate */}
              <AnimatedSection direction="left" delay={0.1}>
                <div className="bg-gradient-to-br from-[#3A2A22] to-[#5a4a3a] rounded-3xl p-7 md:p-9 text-white h-full">
                  <div className="relative h-44 -mx-7 -mt-7 md:-mx-9 md:-mt-9 mb-6 overflow-hidden rounded-t-3xl">
                    <Image src="/images/stock/chocolate.jpg" alt="Черен шоколад" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3A2A22] to-transparent" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-5">Черен шоколад</h3>
                  <div className="space-y-3 mb-6">
                    {["Чисто какао, без добавки", "Натурален (undutched)", "Тестван за тежки метали", "Богат на полифеноли"].map((c) => (
                      <div key={c} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#C9824A] rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="text-white/80">{c}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-white/50 text-sm mb-5">10 г/ден (прах) или ~15 г барче (1-2 квадратчета)</p>
                  <div className="space-y-2">
                    {["Benjaminissimo 100%", "Casa Kakau 100%", "Vivani 92%", "Terra Etica 98%"].map((p) => (
                      <div key={p} className="bg-white/10 rounded-xl px-4 py-2.5 text-sm font-medium">{p}</div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Olive Oil */}
              <AnimatedSection direction="right" delay={0.2}>
                <div className="bg-gradient-to-br from-[#2F5D50] to-[#4a8a6a] rounded-3xl p-7 md:p-9 text-white h-full">
                  <div className="relative h-44 -mx-7 -mt-7 md:-mx-9 md:-mt-9 mb-6 overflow-hidden rounded-t-3xl">
                    <Image src="/images/stock/oliveoil.jpg" alt="Зехтин" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2F5D50] to-transparent" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-5">Зехтин</h3>
                  <div className="space-y-3 mb-6">
                    {["Пресен (до 12-18 мес.)", "Студено пресован", "Полифеноли над 400 мг/кг", "Олеинова киселина над 67%", "3rd party tested", "В тъмно шише"].map((c) => (
                      <div key={c} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#9CAF88] rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="text-white/80">{c}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {["Terra Creta Grand Cru", "BioOrto Coratina", "BioOrto Grand Cru"].map((p) => (
                      <div key={p} className="bg-white/10 rounded-xl px-4 py-2.5 text-sm font-medium">{p}</div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* WHERE TO FIND */}
        <section className="py-20 md:py-28 bg-[#E8EFE3]">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <AnimatedSection direction="up">
              <div className="text-center mb-16">
                <span className="text-[#2F5D50] font-heading font-bold text-sm uppercase tracking-widest">Локации</span>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#1E2520] mt-3">Къде да ги намерим</h2>
              </div>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { name: "BoutiFoods", location: "Пловдив, кв. Мараша", address: 'бул. "Шести септември" 110 А', mapQuery: "BoutiFoods+Plovdiv+Bulgaria" },
                { name: "Зелен Пловдив", location: "Пловдив, кв. Смирненски", address: 'ул. "Рая" 3', mapQuery: "Зелен+Пловдив+ул+Рая+3" },
                { name: "Bio Market", location: "ул. Лейди Странгфорд 2 & Мол Плаза", address: "", mapQuery: "Bio+Market+Plovdiv+Lady+Strangford" },
              ].map((store, i) => (
                <AnimatedSection key={store.name} direction={i === 0 ? "left" : i === 2 ? "right" : "up"} delay={i * 0.1}>
                  <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full group hover:-translate-y-1">
                    <div className="h-44">
                      <iframe src={`https://maps.google.com/maps?q=${store.mapQuery}&output=embed&z=15`} className="w-full h-full border-0" loading="lazy" title={store.name} />
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading font-bold text-lg mb-1">{store.name}</h3>
                      <p className="text-sm text-[#1E2520]/50 mb-1">{store.location}</p>
                      {store.address && <p className="text-sm text-[#1E2520]/40 mb-3">{store.address}</p>}
                      <a href={`https://maps.google.com/?q=${store.mapQuery}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2F5D50] hover:text-[#2F5D50]/70 transition-colors">
                        Отвори в Maps <span>&rarr;</span>
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <NextStepCTA href="/meetups" label="Присъедини се" />
    </>
  );
}
