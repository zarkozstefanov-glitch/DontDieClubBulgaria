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
  title: "Don't Die Клуб България",
  description:
    "Общност за спорт, здравословни навици, дълголетие и групова мотивация. Вдъхновени от Bryan Johnson.",
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
