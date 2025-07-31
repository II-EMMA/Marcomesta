"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import Logo from "../../assets/icons/company-slogan.svg";
import WhiteBtn from "@/components/WhiteBtn";
import SwitchLang from "../home/SwitchLang";

export default function Header() {
  const pathname = usePathname();
  const currentLocale = useLocale();

  const headerRef = useRef(null);
  const t = useTranslations();

  const [toggle, setToggle] = useState(false);
  const { btnText, navigationBar } = t.raw("HomePage").header;

  const IsHomePageOrAbout =
    pathname === `/${currentLocale}` ||
    pathname.startsWith(`/${currentLocale}/about`);

  const toggleMenu = () => {
    setToggle((prev) => !prev);
  };

  const closeToggle = () => {
    setToggle(false);
  };

  const getLocalizedPath = (pathSegment) => {
    if (pathSegment === "/" || pathSegment === "./") {
      return `/${currentLocale}`;
    }
    if (pathSegment === "#read" || pathSegment === "#contact") {
      return `/${currentLocale}${pathSegment}`;
    }
    const cleanPathSegment = pathSegment.startsWith("/")
      ? pathSegment
      : `/${pathSegment}`;
    return `/${currentLocale}${cleanPathSegment}`;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeToggle();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && toggle) {
        closeToggle();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    document.body.style.overflow = toggle ? "hidden" : "";

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "";
    };
  }, [toggle]);

  return (
    <div
      className={`sticky mx-auto top-0 z-[3000] lg:py-0 ${
        IsHomePageOrAbout ? "bg-gradient" : "bg-[#4C0A7C]"
      } w-full`}
      dir="ltr"
    >
      <header
        ref={headerRef}
        className={`sticky top-0 z-[3000] max-w-[1600px] mx-auto px-4 ${
          toggle ? "py-4" : "lg:py-12 py-4"
        }
        left-0 right-0
        flex flex-row justify-between items-center lg:h-[50px]`}
      >
        <div className="flex items-center lg:gap-x-4 z-[3500]">
          <Link href={getLocalizedPath("/")} onClick={closeToggle}>
            <img
              className="max-w-[217px] max-h-[86px]"
              src={Logo.src}
              alt="Company logo"
            />
          </Link>
          <div className="hidden lg:block">
            <Link href={getLocalizedPath("/services")} onClick={closeToggle}>
              <WhiteBtn text={btnText} />
            </Link>
          </div>
        </div>

        <button
          onClick={toggleMenu}
          className={`menu ${
            toggle ? "opened" : ""
          } lg:invisible visible z-[4000] md:mr-4 lg:mr-0 mr-2`}
          aria-label="Toggle menu"
        >
          <svg width="40" height="40" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>

        <div
          className={`lg:static ${
            toggle ? "fixed inset-0 flex" : "hidden"
          } lg:w-auto w-full flex lg:flex-row flex-col lg:gap-x-[180px] justify-between lg:flex
          bg-[#4C0A7C]
          lg:h-auto overflow-y-auto
          z-[1000] lg:bg-transparent`}
        >
          <ul className="text-white flex lg:flex-row-reverse flex-col lg:gap-x-6 md:gap-y-12 gap-y-8 lg:gap-y-0 items-center justify-center w-full lg:w-auto lg:py-0 md:py-40 py-32 font-Inter font-normal lg:text-sm md:text-3xl sm:text-lg text-sm z-[200] bg-transparent">
            <div className="hidden lg:block">
              <SwitchLang />
            </div>

            <li>
              <Link
                href={getLocalizedPath("./")}
                onClick={closeToggle}
                className="hover:text-white/40 transition-all duration-200 ease-in-out"
              >
                {navigationBar[0]}
              </Link>
            </li>
            <span className="h-full w-[1px] bg-white lg:block hidden" />

            <li>
              <Link
                href={getLocalizedPath("./about")}
                onClick={closeToggle}
                className="hover:text-white/40 transition-all duration-200 ease-in-out"
              >
                {navigationBar[1]}
              </Link>
            </li>
            <span className="h-full w-[1px] bg-white lg:block hidden" />

            <li>
              <Link
                href={getLocalizedPath(`#${currentLocale}/read`)}
                onClick={closeToggle}
                className="hover:text-white/40 transition-all duration-200 ease-in-out"
              >
                {navigationBar[2]}
              </Link>
            </li>
            <span className="h-full w-[1px] bg-white lg:block hidden" />

            <li>
              <Link
                href={getLocalizedPath(`#${currentLocale}/clients`)}
                onClick={closeToggle}
                className="hover:text-white/40 transition-all duration-200 ease-in-out"
              >
                {navigationBar[3]}
              </Link>
            </li>
            <span className="h-full w-[1px] bg-white lg:block hidden" />

            <li>
              <Link
                href={getLocalizedPath("./contact")}
                onClick={closeToggle}
                className="hover:text-white/40 transition-all duration-200 ease-in-out"
              >
                {navigationBar[4]}
              </Link>
            </li>
            <div className="block lg:hidden lg:mt-0 mt-3.5">
              <SwitchLang />
            </div>
          </ul>
        </div>
      </header>
    </div>
  );
}
