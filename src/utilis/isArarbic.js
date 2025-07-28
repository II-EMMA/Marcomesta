"use client";
import { useLocale } from "next-intl";

export const GetLang = () => {
  const lang = useLocale();
  const isArabic = lang === "ar";
  return isArabic;
};
