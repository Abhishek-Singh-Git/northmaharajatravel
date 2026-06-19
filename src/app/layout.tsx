import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "North Maharaja Travels | Premium Kashmir, Vaishno Devi & Ladakh Tours",
  description:
    "Discover affordable luxury travel to Kashmir, Vaishno Devi, Leh-Ladakh, Amritsar & Himachal. 30 years of trusted travel expertise with complete hotel, transport, and tour assistance.",
  keywords: [
    "Kashmir tours",
    "Vaishno Devi trip",
    "Leh Ladakh tour",
    "Amritsar travel",
    "Himachal tour",
    "North India travel",
    "luxury travel India",
    "Kashmir taxi service",
    "tempo traveller Katra",
  ],
  openGraph: {
    title: "North Maharaja Travels | Premium Kashmir & Ladakh Tours",
    description:
      "Affordable luxury travel to Kashmir, Vaishno Devi, Leh-Ladakh & more. 30 years trusted experience.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable}`}
    >
      <head>
        <meta name="theme-color" content="#0B1628" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
