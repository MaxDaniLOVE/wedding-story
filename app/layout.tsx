import type { Metadata, Viewport } from "next";
import { Meddon, Source_Serif_4 } from "next/font/google";
import "./globals.scss";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const ogImagePath = `${basePath.replace(/\/$/, "")}/og-image.jpg`;

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
  title: "Vladimir & Alina Wedding, 22 мая 2026",
  description: "Приглашаем вас на нашу уютную свадьбу в Грузии!",
  openGraph: {
    title: "Vladimir & Alina Wedding, 22 мая 2026",
    description: "Приглашаем вас на нашу уютную свадьбу в Грузии!",
    images: [ogImagePath],
  },
};

export const viewport: Viewport = {
  themeColor: '#100d1b'
}

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
// export const dynamic = 'force-dynamic';
