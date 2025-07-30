"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function SwitchLangDropdown() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChangeLocale = (event) => {
    const targetLocale = event.target.value;

    if (targetLocale === currentLocale) {
      return;
    }

    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "");
    const newPath = `/${targetLocale}${
      pathWithoutLocale === "" ? "" : pathWithoutLocale
    }`;

    router.push(newPath);
  };

  return (
    <div className="relative">
      <select
        onChange={handleChangeLocale}
        value={currentLocale}
        className=" block appearance-none w-full border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-full shadow leading-tight focus:outline-none focus:shadow-outline text-white bg-transparent "
      >
        <option value="en" className="text-black text-sm">
          EN
        </option>
        <option value="ar" className="text-black text-sm">
          AR
        </option>
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}
