import HumanSitUp from "../../../assets/icons/human-sit-up.svg";
import HumanSitDown from "../../../assets/icons/human-sit-down.svg";
import Screen from "../../../assets/icons/screen-contact-us.svg";
import Flowers from "../../../assets/icons/flowers.svg";
import Human from "../../../assets/icons/human-icon.svg";
import Email from "../../../assets/icons/mail-icon.svg";

import GradientScreenTopToBottom from "@/components/GradientScreenTopToBottom";
import { getTranslations } from "next-intl/server";
import CustomBtn from "@/components/CustomBtn";

export default async function page() {
  const t = await getTranslations();
  const { title, btnText } = t.raw("Contact");
  const { name, city, email, phone, more } = t.raw("Contact").placeholders;
  return (
    <div className="overflow-x-hidden">
      <section className="relative z-40 bg-gradient-to-top w-screen left-1/2 -translate-x-1/2 py-20">
        <GradientScreenTopToBottom />
        <div className="flex flex-col max-w-[1500px] mx-auto px-5">
          <h1 className="text-white font-bold text-[64px] xl:text-start text-center">
            {title}
          </h1>
          <div className="flex xl:flex-row xl:gap-x-20 flex-col gap-y-20 xl:gap-y-0 mt-5 xl:justify-between items-center xl:items-stretch mx-10">
            <form
              action=""
              className="flex text-white sm:text-3xl text-2xl flex-col xl:w-auto w-full flex-grow xl:gap-y-0 gap-y-16 mt-16 xl:mt-0"
            >
              <input
                type="text"
                id="name"
                name="name"
                placeholder={name}
                className="flex-grow border-b border-white placeholder:text-white outline-0 xl:text-base xl:pb-0 sm:text-3xl text-2xl pb-8"
              />
              <input
                type="text"
                id="city"
                name="city"
                placeholder={city}
                className="flex-grow border-b border-white placeholder:text-white outline-0 xl:text-base xl:pb-0 sm:text-3xl text-2xl pb-8"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder={email}
                className="flex-grow border-b border-white placeholder:text-white outline-0 xl:text-base xl:pb-0 sm:text-3xl text-2xl pb-8"
              />
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder={phone}
                className="flex-grow border-b border-white placeholder:text-white outline-0 xl:text-base xl:pb-0 sm:text-3xl text-2xl pb-8"
              />
              <input
                type="text"
                id="more"
                name="more"
                placeholder={more}
                className="flex-grow border-b border-white placeholder:text-white outline-0 xl:text-base xl:pb-0 sm:text-3xl text-2xl pb-8"
              />
              <CustomBtn className="self-center cursor-pointer mt-14 bg-[#b52e94] py-3 sm:px-40 w-full md:w-auto text-xl border border-white/25 hover:bg-white hover:text-[#b52e94] ">
                {btnText}
              </CustomBtn>
            </form>
            <div className="ml-20 z-30 md:flex flex-col mt-28 mb-[119px] relative  hidden">
              <img
                className="max-w-[536px] max-h-[325px]"
                src={Screen.src}
                alt="Screen"
              />
              <img
                className="absolute max-w-[155px] max-h-[125px] -bottom-1 -left-3"
                src={HumanSitDown.src}
                alt="Human Sit Down"
              />
              <img
                className="absolute max-w-[91px] max-h-[216px] -top-[108px] right-14"
                src={HumanSitUp.src}
                alt="Human Sit Up"
              />
              <img
                className="absolute max-w-[716px] max-h-[202px] bottom-0 -right-16 z-[-100]"
                src={Flowers.src}
                alt="Flowers"
              />
              <div className="absolute -bottom-1 -right-10 h-1 w-[calc(100%+100px)] bg-white block" />
            </div>
          </div>
          <div className="flex xl:flex-row flex-col xl:justify-between items-center xl:mx-72 mt-24 xl:gap-x-4 xl:gap-y-0 gap-y-10">
            <div className="flex flex-col gap-y-6 items-center">
              <img
                className="max-w-[97px] max-h-[51px]"
                src={Email.src}
                alt="Email"
              />
              <p className="text-white font-bold sm:text-2xl text-xl">
                info@marcomesta.com
              </p>
            </div>
            <div className="flex flex-col gap-y-4 items-center">
              <img
                className="max-w-[70px] max-h-[84px]"
                src={Human.src}
                alt="Human"
              />
              <p className="text-white font-bold sm:text-2xl text-xl">
                +(966) 553 22 88 58
              </p>
            </div>
          </div>
          <div className="h-[3px] w-8/12 bg-white/70 block self-center mt-24" />
        </div>
      </section>
    </div>
  );
}
