import type { Metadata } from "next";
import { Meddon, Source_Serif_4 } from "next/font/google";
import "./globals.scss";

const metadataBaseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin", "cyrillic"],
});

const meddon = Meddon({
  variable: "--font-meddon",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: metadataBaseUrl ? new URL(metadataBaseUrl) : undefined,
  title: "Vladimir & Alina Wedding, 22 мая 2026",
  description: "Приглашаем вас на нашу уютную свадьбу в Грузии!",
  openGraph: {
    title: "Vladimir & Alina Wedding, 22 мая 2026",
    description: "Приглашаем вас на нашу уютную свадьбу в Грузии!",
    images: [`${basePath}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${sourceSerif4.variable} ${meddon.variable}`}>
      <body>{children}</body>
    </html>
  );
}
