"use client";

import { usePathname } from "next/navigation";

export const useCurrentLocaleFromPath = () => {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const localeSegment = segments[0];

  if (localeSegment === "ar") {
    return "ar";
  }
  return "en";
};
