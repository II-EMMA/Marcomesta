import Link from "next/link";
import BootImage from "../../assets/images/boot.svg";
import Robot from "../../assets/images/robot.svg";
import CustomBtn from "@/components/CustomBtn";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Boot() {
  const t = await getTranslations();
  const lang = await getLocale();
  const isArabic = lang === "ar";
  const { title, subTitle, btnText } = t.raw("Boot");
  return (
    <>
      <section className="mx-auto max-w-[1500px] flex xl:flex-row flex-col gap-y-72 items-center xl:items-stretch xl:justify-between">
        <div className="flex flex-col xl:items-stretch items-center text-center xl:text-start mt-16 gap-y-4 mx-4">
          <h3 className="text-5xl font-normal leading-[59px] text-purple-gradient-5 max-w-[405px]">
            {isArabic ? (
              <>
                {title.split(" ").slice(0, 2).join(" ")}
                <br />
                {title.split(" ").slice(2).join(" ")}
              </>
            ) : (
              title
            )}
          </h3>
          <h4 className="text-gray-color text-2xl leading-12 font-normal max-w-[820px]">
            {subTitle}
          </h4>
          <div className="self-center xl:self-start">
            <Link
              href="./contact"
              className="lg:w-auto w-full py-4 sm:px-32 mx-2 sm:mx-0"
            >
              <CustomBtn className="mt-12 bg-[#b52e94] py-4 sm:px-32 px-14 mx-2 sm:mx-0 text-xl  hover:border hover:border-[#b52e94] hover:text-[#b52e94] hover:bg-white outline-0 border border-[#4C0A7C] shadow-lg shadow-black/25">
                {btnText}
              </CustomBtn>
            </Link>
          </div>
        </div>
        <div className="relative -mt-48 z-40">
          <Link href={BootImage.src} target="_blank" rel="noopener noreferrer">
            <img
              className="lg:max-w-[856px] lg:max-h-[856px] sm:max-w-[620px] sm:max-h-[620px] max-w-[4390px] max-h-[390px]"
              src={BootImage.src}
              alt="Boot"
            />
          </Link>
          <div className="absolute lg:bottom-[70px] lg:-right-2 md:bottom-[60px] md:right-9 sm:bottom-14 sm:right-10 bottom-10 right-8">
            <Link href={Robot.src} target="_blank" rel="noopener noreferrer">
              <img
                className="lg:max-w-[398px] lg:max-h-[302px] sm:max-w-[250px] sm:max-h-[250px] max-w-[150px] max-h-[150px]"
                src={Robot.src}
                alt="Robot"
              />
            </Link>
          </div>
        </div>
      </section>
      <span className="block h-[13px] w-screen bg-purple-gradient-5 mb-6" />
    </>
  );
}
