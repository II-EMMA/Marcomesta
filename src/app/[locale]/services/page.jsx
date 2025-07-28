import { BsFillEnvelopeFill } from "react-icons/bs";
import { IoIosLock } from "react-icons/io";
import CustomBtn from "@/components/CustomBtn";
import Anonymous from "../../../assets/icons/anonymous.svg";
import GradientScreenTopToBottom from "@/components/GradientScreenTopToBottom";
import { getLocale, getTranslations } from "next-intl/server";

export default async function page() {
  const t = await getTranslations();
  const lang = await getLocale();
  const isArabic = lang === "ar";
  const {
    placeholders: { email, password, checkbox, question },
    btnText,
  } = t.raw("Services");
  return (
    <div className="overflow-x-hidden">
      <section className="relative z-40 w-screen left-1/2 -translate-x-1/2 py-20">
        <GradientScreenTopToBottom />
        <div className="flex flex-col max-w-[1500px] mx-auto lg:px-5 bg-gradient-to-top 2xl:w-3/7 lg:w-4/7 sm:w-2/3 w-11/12 lg::rounded-[70px] md:rounded-[45px] rounded-[35px] bg-gradient-to-top-lighter py-20">
          <img
            src={Anonymous.src}
            alt="Anonymous"
            className="self-center fill-current text-white max-w-[728px] max-h-[120px] "
          />
          <form
            action=""
            className="flex flex-col flex-grow lg:mx-20 sm:mx-10 mx-8 gap-y-10 mt-10"
          >
            <div className="relative flex items-center border-b border-white pb-3 mb-4">
              <BsFillEnvelopeFill
                className={`absolute ${
                  isArabic ? "right-0" : "left-0"
                } text-white`}
                size={24}
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder={email}
                className={`${
                  isArabic ? "mr-10" : "ml-9 mt-0.5"
                } flex-grow bg-transparent text-white placeholder:text-white placeholder:text-base placeholder:font-light outline-none `}
              />
            </div>
            <div className="relative flex items-center border-b border-white pb-3 mb-4">
              <IoIosLock
                className={`absolute ${
                  isArabic ? "right-0" : "left-0"
                } text-white`}
                size={30}
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder={password}
                className={`${
                  isArabic ? "mr-9" : "ml-9 pt-1.5"
                } flex-grow bg-transparent text-white placeholder:text-white placeholder:text-base placeholder:font-light outline-none `}
              />
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-8 lg:items-stretch items-center justify-between">
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  name="myCheckbox"
                  className="h-5 w-5 border-gray-300 rounded"
                />
                <label htmlFor="myCheckbox" className="text-white font-light">
                  {checkbox}
                </label>
              </div>
              <span className="cursor-pointer text-white text-base">
                {question}
              </span>
            </div>
            <CustomBtn className="mb-6 self-center cursor-pointer mt-12 bg-[#c200c2] py-5 w-full md:text-xl text-base border border-white/25 hover:bg-white hover:text-[#c200c2] ">
              {btnText}
            </CustomBtn>
          </form>
        </div>
      </section>
    </div>
  );
}
