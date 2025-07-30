import Email from "../../assets/icons/mail-black-icon.svg";
import Human from "../../assets/icons/human-black-icon.svg";
import FooterBG from "../../assets/images/footer-bg.svg";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Logo from "../../assets/images/company-logo.svg";

export default function Footer() {
  return (
    <>
      <div className="overflow-x-hidden max-w-[1440px] mx-auto">
        <div className="h-[3px] bg-[#D9D9D9] block" />
      </div>
      <footer className="flex flex-col mt-14 max-w-[1500px] mx-auto">
        <div className="lg:mx-28 mx-auto">
          <Link href={"./"}>
            <img
              className="max-w-[235px] max-h-[158px]"
              src={Logo.src}
              alt="Company Logo"
            />
          </Link>
        </div>
        <div className="mx-32 flex lg:flex-row flex-col lg:gap-x-44 gap-y-20 lg:gap-y-0 mt-14 lg:mt-0 items-center">
          <div className="flex items-center flex-row gap-x-7.5">
            <AiOutlineYoutube size={27} />
            <FaXTwitter size={19} />
            <FaInstagram size={23} />
            <FaFacebookF size={24} />
          </div>
          <div className="flex lg:flex-row flex-col xl:items-stretch items-center lg:gap-x-20 gap-y-16">
            <div className="flex xl:flex-row xl:gap-x-4 flex-col gap-y-7 xl:gap-y-0 items-center">
              <p className="text-black font-normal text-base ">
                info@marcomesta.com
              </p>
              <img
                className="max-w-[62px] max-h-[33px]"
                src={Email.src}
                alt="Email"
              />
            </div>
            <div className="flex xl:flex-row xl:gap-x-4 flex-col gap-y-7 xl:gap-y-0 items-center">
              <p className="text-black font-normal text-base " dir="ltr">
                +(966) 58 88 22 553
              </p>
              <img
                className="max-w-[45px] max-h-[45px]"
                src={Human.src}
                alt="Human"
              />
            </div>
          </div>
        </div>
        <Link href={FooterBG.src} target="_blank" rel="noopener noreferrer">
          <img
            className="max-w-full max-h-[320px]"
            src={FooterBG.src}
            alt="Footer Background"
          />
        </Link>
      </footer>
    </>
  );
}
