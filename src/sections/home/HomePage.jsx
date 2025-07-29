import Vector from "../../assets/icons/hero-section-vector.svg";
import HeroSectionImage from "../../assets/images/hero-section.svg";
import { getLocale, getTranslations } from "next-intl/server";
import CustomBtn from "@/components/CustomBtn";
import Link from "next/link";
import GradientScreen from "@/components/GradientScreen";

export default async function HomePage() {
  const t = await getTranslations();
  const lang = await getLocale();
  const isArabic = lang === "ar";
  const { title, subTitle, description, btnText } = t.raw("HomePage");

  return (
    <section className="relative z-40 w-screen left-1/2 -translate-x-1/2 bg-white">
      <GradientScreen />

      <div className="flex flex-col max-w-[1500px] mx-auto bg-gradient md:pt-10 -mt-1 md:mt-0 pb-20">
        <div
          className={`z-50 flex lg:flex-row flex-col md:gap-y-32 gap-y-24  lg:gap-y-0 items-center lg:gap-x-2 justify-between mt-10 ${
            isArabic ? "lg:ml-3 xl:mr-16 lg:mr-8" : "lg:mr-3 xl:ml-16 lg:ml-8"
          }`}
        >
          <div className="flex flex-col text-white items-center text-center lg:text-start lg:items-stretch md:mx-0 mx-5">
            <h1 className="sm:text-[90px] text-[75px] font-normal text-shadow-lg leading-28">
              {title}
            </h1>
            <h2
              className={`text-[40px] font-normal ${
                isArabic ? "leading-20 my-7 xl:my-0" : "leading-14 xl:my-0 my-4"
              }`}
            >
              {subTitle}
            </h2>
            <p className="max-w-[500px] text-xl font-normal leading-9">
              {description}
            </p>
            <span className="h-0.5 w-24 bg-white mt-6" />
            <CustomBtn className="self-center lg:self-start cursor-pointer mt-14 bg-[#b52e94] py-4 sm:px-32 w-full mx-2 sm:mx-0 text-xl border border-white hover:bg-white hover:text-[#b52e94] ">
              {btnText}
            </CustomBtn>
          </div>
          <div className="relative z-30 sm:mx-0 mx-4">
            <Link href={Vector.src} target="_blank" rel="noopener noreferrer">
              <img
                className="md:max-w-[650px] md:max-h-[700px] sm:max-w-[500px] sm:max-h-[600px] max-w-[350px] max-h-[500px]"
                src={Vector.src}
                alt="Object vector"
              />
            </Link>
            <div className="absolute z-40 right-[50%] bottom-[50%] translate-x-[50%] translate-y-[49%] flex justify-center items-center">
              <Link
                href={HeroSectionImage.src}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="md:max-w-[610px] md:max-h-[610px] sm:max-w-[420px] sm:max-h-[500px] max-w-[320px] max-h-[400px]"
                  src={HeroSectionImage.src}
                  alt="Home Page Image"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
