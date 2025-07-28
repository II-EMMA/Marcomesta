import Email from "../assets/icons/mail-icon.svg";
import Human from "../assets/icons/human-icon.svg";
import CustomBtn from "./CustomBtn";

export default function ContactContainer({ subTitle, btnTextOne, btnTextTwo }) {
  return (
    <div className="w-9/12 mx-auto rounded-[40px] bg-purple-gradient-5 xl:py-6 lg:py-16 md:py-32 py-20 mt-10 flex flex-col items-center">
      <h3 className="text-white text-[32px] font-normal text-center [text-shadow:4px_4px_2px_rgba(0,0,0,0.25)] bg-transparent">
        {subTitle}
      </h3>
      <div className="flex lg:flex-row lg:gap-x-9 flex-col gap-y-9 lg:gap-y-0 mt-10">
        <CustomBtn className=" bg-white text-gray-color py-3 sm:px-20 px-11 rounded-[23px] text-sm hover:border-2  outline-0 border-2 border-[#4C0A7C] hover:shadow-lg hover:shadow-black/30">
          {btnTextTwo}
        </CustomBtn>
        <CustomBtn className=" bg-[#b52e94] py-3 px-12 rounded-[23px] text-sm hover:border hover:border-[#b52e94] hover:text-[#b52e94] hover:bg-white outline-0 border border-[#4C0A7C] ">
          {btnTextOne}
        </CustomBtn>
      </div>
      <div className="flex lg:flex-row lg:gap-x-10 flex-col gap-y-6 lg:gap-y-0 mt-10 lg:items-stretch items-center">
        <div className="flex md:flex-row md:gap-x-4 flex-col gap-y-6 md:gap-y-0 items-center">
          <img
            className="max-w-[62px] max-h-[33px]"
            src={Email.src}
            alt="Email"
          />
          <p className="text-white font-normal ms:text-base text-sm">
            info@marcomesta.com
          </p>
        </div>
        <div className="flex md:flex-row md:gap-x-4 flex-col gap-y-6 md:gap-y-0 items-center">
          <img
            className="max-w-[45px] max-h-[45px]"
            src={Human.src}
            alt="Human"
          />
          <p className="text-white font-normal ms:text-base text-sm">
            +(966) 553 22 88 58
          </p>
        </div>
      </div>
    </div>
  );
}
