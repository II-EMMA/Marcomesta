import Mission from "../../../assets/icons/mission.svg";
import Vision from "../../../assets/icons/vision.svg";
import Morals from "../../../assets/icons/morals.svg";
import Link from "next/link";
import { IoStarSharp } from "react-icons/io5";
import SectionImage from "../../../assets/images/who-we-are.svg";
import { getLocale, getTranslations } from "next-intl/server";
import ContactContainer from "@/components/ContactContainer";

const cardsInfo = [
  {
    src: Mission.src,
    alt: "Mission",
    style: "max-w-[157px] max-h-[158px]",
  },
  {
    src: Vision.src,
    alt: "Vision",
    style: "max-w-[169px] max-h-[98px]",
  },
  {
    src: Morals.src,
    alt: "Morals",
    style: "max-w-[135px] max-h-[161px]",
  },
];

export default async function page() {
  const t = await getTranslations();
  const lang = await getLocale();
  const isArabic = lang === "ar";
  const { title, descriptions, helpText } = t.raw("About");
  const translatedCards = t.raw("About").cards;
  const smallCards = t.raw("About").smallCards;
  const {
    title: contactUsTitle,
    btnTextOne,
    btnTextTwo,
  } = t.raw("About").ContactUs;

  const updatedCardsInfo = cardsInfo.map((card, index) => {
    const translatedCardData = translatedCards[index];

    return {
      ...card,
      title: translatedCardData
        ? translatedCardData.title
        : "Translation missing",
      descriptions: translatedCardData ? translatedCardData.descriptions : [],
    };
  });

  return (
    <div className="overflow-x-hidden">
      <section className="flex flex-col py-20 max-w-[1500px] mx-auto px-7">
        <div className="flex lg:flex-row flex-col lg:justify-between items-center lg:gap-y-0 sm:gap-y-20">
          <div className="flex flex-col text-purple-gradient-5 gap-y-4">
            <h2 className="font-bold text-[40px]">{title}</h2>
            {descriptions.map((description, index) => (
              <p key={index} className="text-lg font-normal max-w-[494.5px]">
                {description}
              </p>
            ))}
          </div>

          <div
            className={`relative ${
              isArabic
                ? "lg:rounded-br-[50%] lg:rounded-tr-[50%] rounded-tl-[50%] rounded-tr-[50%] lg:rounded-tl-none"
                : "lg:rounded-bl-[50%] lg:rounded-tl-[50%] rounded-tl-[50%] rounded-tr-[50%] lg:rounded-tr-none"
            } lg:w-7/12 w-2/3 h-[520px] bg-gradient-image sm:block hidden`}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Link
                href={SectionImage.src}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="xl:max-w-[538px] lg:max-w-[430px] max-w-[350px] max-h-[475px]"
                  src={SectionImage.src}
                  alt="Section Image"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-40 grid lg:gap-x-96 gap-x-40 lg:gap-y-40 gap-y-32 items-center mx-auto md:grid-cols-2 place-items-center">
          {updatedCardsInfo.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between items-center
                  ${
                    updatedCardsInfo.length % 2 !== 0 &&
                    index === updatedCardsInfo.length - 1
                      ? "md:col-span-2"
                      : ""
                  }`}
            >
              <Link href={card.src} target="_blank" rel="noopener noreferrer">
                <img
                  className={`${card.style} self-center text-center`}
                  src={card.src}
                  alt={card.alt}
                />
              </Link>
              <div className="flex flex-col text-white">
                <h4 className="mt-2 text-purple-gradient-5 text-[40px] text-center">
                  {card.title}
                </h4>
                {card.descriptions.map((description, index) => (
                  <p
                    key={index}
                    className="max-w-[356px] text-purple-gradient-5 text-base text-center mt-5"
                  >
                    {description}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 grid md:gap-6 gap-10 items-center md:grid-cols-2 text-center md:text-start">
          {smallCards.map((card, index) => (
            <div key={index} className="flex flex-col gap-y-2">
              <h4 className="self-center md:self-start text-base font-bold flex flex-row items-center text-purple-gradient-5">
                <IoStarSharp size={11} />
                <span>{card.headingText}</span>
              </h4>
              <p className="text-sm font-normal text-purple-gradient-5">
                {card.subHeadingText}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-48 flex flex-col items-center">
          <h5 className="text-xl text-purple-gradient-5 leading-11 text-center max-w-[800px]">
            {helpText}
          </h5>
          <ContactContainer
            subTitle={contactUsTitle}
            btnTextOne={btnTextOne}
            btnTextTwo={btnTextTwo}
          />
        </div>
      </section>
    </div>
  );
}
