import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Don't Die Club Bulgaria",
  description:
    "Don't Die Club Bulgaria е общност за движение, здравословни навици и измерим прогрес. Тренировки, BioAge тестове, предизвикателства и събирания на открито в България.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bg"
      data-scroll-behavior="smooth"
      className={`${sora.variable} ${inter.variable} min-h-full overflow-x-clip bg-[var(--color-warm-bg)] antialiased`}
    >
      <body className="min-h-screen overflow-x-clip bg-[var(--color-warm-bg)]">{children}</body>
    </html>
  );
}
