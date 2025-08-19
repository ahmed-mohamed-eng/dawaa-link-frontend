import type { Metadata } from "next";

import localFont from "next/font/local";
import { Poppins, Cairo } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import "./globals.css";
import RoutingLangues from "@/types/Language.type";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const saudiRiyalSymbol = localFont({
  src: "./fonts/saudiriyalsymbol.woff",
  variable: "--font-saudi-riyal",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});

// const alexandria = Alexandria({
//   variable: "--font-alexandria",
//   weight: ["100", "200", "300", "400", "500", "600", "700"],
//   subsets: ["arabic", "latin"],
// });

const cairo = Cairo({
  variable: "--font-cairo",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["arabic", "latin"],
});

const handcrafts = localFont({
  src: "./fonts/TheYearOfHandcrafts.otf",
  variable: "--font-handcrafts",
  display: "swap",
});

// const effraArabic = localFont({
//   src: [
//     {
//       path: "./fonts/EffraArabic-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./fonts/EffraArabic-Medium.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "./fonts/EffraArabic-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-effra-arabic",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Dawaa Link",
  description: "Find All Drags.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale as RoutingLangues;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${
          poppins.variable
        } ${cairo.variable} ${handcrafts.variable} ${saudiRiyalSymbol.variable} antialiased ${
          locale === "ar" ? "font-cairo" : "font-poppins"
        }`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
