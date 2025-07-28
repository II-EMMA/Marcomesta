import Link from "next/link";
import Logo from "../../assets/images/company-logo.svg";
import { getTranslations } from "next-intl/server";
import CustomBtn from "@/components/CustomBtn";

export default async function Read() {
  const t = await getTranslations();
  const { description, btnText } = t.raw("Read");
  return (
    <section className="full-bleed bg-white flex flex-col items-center justify-center max-w-[1500px] mx-auto pt-7 pb-14">
      <Link href={Logo.src} target="_blank" rel="noopener noreferrer">
        <img
          className="sm:max-w-[419px] max-w-[300px] max-h-[231px]"
          src={Logo.src}
          alt="Company Logo"
        />
      </Link>
      <p className="text-purple-gradient-5 font-bold text-2xl max-w-[750px] text-center md:mx-0 mx-4">
        {description}
      </p>
      <CustomBtn className="self-center md:mx-0 sm:mx-4 mt-12 bg-[#b52e94] py-4 sm:px-32 px-14 mx-2 text-xl  hover:border hover:border-[#b52e94] hover:text-[#b52e94] hover:bg-white outline-0 border shadow-lg shadow-black/25">
        {btnText}
      </CustomBtn>
    </section>
  );
}
