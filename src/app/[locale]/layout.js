import localFont from "next/font/local";
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/sections/header/Header";
import Footer from "@/sections/footer/Footer";

const dgaGnadeen = localFont({
  src: [
    {
      path: "../../fonts/DG_agnadeen/DGAgnadeen-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/DG_agnadeen/DGAgnadeen-Extrabold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../fonts/DG_agnadeen/DGAgnadeen-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../fonts/DG_agnadeen/DGAgnadeen-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/DG_agnadeen/DGAgnadeen-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/DG_agnadeen/DGAgnadeen-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../fonts/DG_agnadeen/DGAgnadeen-Ultralight.ttf",
      weight: "200",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata = {
  title: "Marcomista",
  description: "Marcomista Company",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  let messages;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  const direction = getDirection(locale);

  function getDirection(locale) {
    return locale === "ar" ? "rtl" : "ltr";
  }
  return (
    <html lang={locale} dir={direction} className="scroll-smooth">
      <body className={`${dgaGnadeen.className}`}>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
