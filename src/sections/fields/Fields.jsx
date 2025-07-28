import Link from "next/link";
import Idea from "../../assets/icons/idea.svg";
import { getLocale, getTranslations } from "next-intl/server";
import Cards from "./Cards";
import GradientScreenTopToBottom from "@/components/GradientScreenTopToBottom";

export default async function Fields() {
  const t = await getTranslations();
  const lang = await getLocale();
  const isArabic = lang === "ar";
  const { title, subTitle } = t.raw("Fields");

  return (
    <section className="relative z-40 w-screen left-1/2 -translate-x-1/2 bg-white">
      <GradientScreenTopToBottom />
      <div className="flex flex-col bg-gradient-to-top max-w-[1500px] mx-auto pb-64">
        <div className="flex flex-col justify-center items-center mt-24 text-white mx-20 sm:mx-0">
          <div className="flex sm:flex-row flex-col relative items-center md:mx-0 mx-6">
            <h2 className="md:text-[90px] sm:text-[75px] text-[50px] font-normal leading-[110px] text-shadow-lg">
              {title}
            </h2>
            <span>
              <Link href={Idea.src} target="_blank" rel="noopener noreferrer">
                <img
                  className={`sm:max-w-[156px] sm:max-h-[181px] max-w-[100px] max-h-[130px] ${
                    isArabic
                      ? "sm:mt-0 sm:mb-0 -mt-4 mb-12"
                      : "sm:mt-0 sm:mb-0 -mt-6 mb-[75px]"
                  }`}
                  src={Idea.src}
                  alt="Idea"
                />
              </Link>
            </span>
          </div>
          <h3
            className={`${
              isArabic
                ? "md:ml-36 lg:-mt-10 md:-mt-10 -mt-11"
                : "md:ml-10 lg:ml-36 lg:-mt-10 md:-mt-14 ml-4 -mt-[70px]"
            } md:text-5xl sm:text-4xl text-2xl font-normal sm:leading-[110px] leading-7 text-center text-shadow-lg`}
          >
            {subTitle}
          </h3>
        </div>
        <Cards />
      </div>
    </section>
  );
}
