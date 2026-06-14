import Image from "next/image";
import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/AnimatedSection";
import MeetupCalendar from "@/components/MeetupCalendar";
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Събирания | Don't Die Club Bulgaria",
  description: "Всяка неделя на Гребен канал, Пловдив. Групова тренировка, предизвикателства и споделяне на прогрес. Запиши се!",
};

export default function MeetupsPage() {
  return (
    <>
      <Navigation />

      <main>
        {/* HERO */}
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/stock/community.jpg" alt="Общност" fill sizes="100vw" className="object-cover" priority quality={85} />
            <div className="absolute inset-0 bg-gradient-to-b from-[#102A3A]/80 via-[#102A3A]/62 to-[#F5FAF7]" />
          </div>
          <div className="relative max-w-7xl mx-auto px-5 md:px-8">
            <AnimatedSection direction="left" delay={0.2}>
              <span className="text-[#E98B63] font-heading font-bold text-sm uppercase tracking-widest">Всяка неделя</span>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3 mb-4 leading-tight">
                Събираме <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E98B63] to-[#f0a580]">се</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
                Групова тренировка, нови предизвикателства, споделяне на прогрес — всяка неделя на Гребен канал, Пловдив.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* WHAT HAPPENS */}
        <section className="py-16 md:py-24 bg-[#F5FAF7]">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { text: "Групова тренировка", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                { text: "Предизвикателство", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
                { text: "Храна и дълголетие", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17" },
                { text: "Споделяне на прогрес", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10" },
              ].map((item, i) => (
                <AnimatedSection key={item.text} direction={i < 2 ? "left" : "right"} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-5 border border-[#4FBF82]/10 text-center hover:shadow-lg transition-all group hover:-translate-y-1">
                    <div className="w-12 h-12 bg-[#4FBF82]/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#4FBF82] transition-colors">
                      <svg className="w-5 h-5 text-[#4FBF82] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <p className="font-medium text-[#1D2B34] text-sm">{item.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* MAP + LOCATION */}
        <section className="py-16 md:py-24 bg-[#E2F4EA]">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <AnimatedSection direction="scale" delay={0.2}>
              <div className="bg-white rounded-3xl border border-[#4FBF82]/10 shadow-lg overflow-hidden mb-12">
                <div className="grid md:grid-cols-2">
                  <div className="h-72 md:h-auto md:min-h-[350px]">
                    <iframe src="https://maps.google.com/maps?q=Rowing+Canal+Plovdiv+Bulgaria&output=embed&z=15" className="w-full h-full border-0" loading="lazy" title="Място за събиране" />
                  </div>
                  <div className="p-7 md:p-10 flex flex-col justify-center">
                    <span className="mb-3 inline-flex w-fit rounded-full bg-[#4FBF82]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#4FBF82]">
                      Следваща среща
                    </span>
                    <h3 className="font-heading font-bold text-3xl text-[#1D2B34] mb-3">Неделя, 09:30 ч.</h3>
                    <p className="text-[#1D2B34]/65 leading-relaxed mb-5">
                      Срещаме се на Гребен канал, Пловдив. Започваме с лека загрявка, после групова тренировка, мобилност и кратък разговор за навиците през седмицата.
                    </p>
                    <div className="mb-5 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-[#F5FAF7] p-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#E98B63]">Място</p>
                        <p className="mt-1 font-heading font-bold text-[#1D2B34]">Гребен канал</p>
                      </div>
                      <div className="rounded-2xl bg-[#F5FAF7] p-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#E98B63]">Час</p>
                        <p className="mt-1 font-heading font-bold text-[#1D2B34]">09:30</p>
                      </div>
                    </div>
                    <ul className="space-y-2.5 mb-6">
                      {["Загрявка и мобилност", "Тренировка според нивото", "Предизвикателство за седмицата", "Разговор за прогрес и BioAge"].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-[#1D2B34]/70">
                          <div className="w-5 h-5 bg-[#4FBF82] rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a href="https://maps.google.com/?q=Rowing+Canal+Plovdiv+Bulgaria" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#4FBF82] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#3a9966]">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      Отвори в Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Calendar + Signup */}
            <div className="grid md:grid-cols-2 gap-6">
              <AnimatedSection direction="left" delay={0.2}>
                <MeetupCalendar />
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.3}>
                <SignupForm />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* SOCIAL MEDIA */}
        <section className="py-16 md:py-24 bg-[#102A3A] text-white">
          <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
            <AnimatedSection direction="up">
              <span className="text-[#74B9E8] font-heading font-bold text-sm uppercase tracking-widest">Следвай ни</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-8">Бъди част от общността</h2>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.2}>
              <div className="flex justify-center gap-4">
                <a href="https://www.instagram.com/dont.diebulgaria" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 px-6 py-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </div>
                  <span className="font-heading font-bold text-sm">Instagram</span>
                </a>
                <a href="https://www.tiktok.com/@dontdiebulgaria" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 px-6 py-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.16 8.16 0 005.58 2.18v-3.45a4.85 4.85 0 01-3.77-1.82V6.69h3.77z"/></svg>
                  </div>
                  <span className="font-heading font-bold text-sm">TikTok</span>
                </a>
                <a href="https://facebook.com/profile.php?id=61579515145935" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 px-6 py-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </div>
                  <span className="font-heading font-bold text-sm">Facebook</span>
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
    </>
  );
}
