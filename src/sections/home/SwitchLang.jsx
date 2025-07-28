"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function SwitchLang() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const lang = currentLocale === "ar" ? "ع" : "E";
  const isArabic = currentLocale === "ar";

  const handleChangeLocale = () => {
    const targetLocale = currentLocale === "ar" ? "en" : "ar";

    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "");
    const newPath = `/${targetLocale}${
      pathWithoutLocale === "" ? "" : pathWithoutLocale
    }`;

    router.push(newPath);
  };

  return (
    <button
      onClick={handleChangeLocale}
      className="flex items-center arabic-char-fix justify-center text-center text-xl font-normal rounded-full w-10 h-10 border border-white hover:bg-white hover:text-[#4c0a7c] transition-all duration-200 ease-in-out"
    >
      <span className={isArabic ? "arabic-char-fix" : ""}>{lang}</span>
    </button>
  );
}
