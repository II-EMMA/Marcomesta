import Link from "next/link";
import Companies from "../../assets/icons/companies.svg";
import Education from "../../assets/icons/education.svg";
import MedicalField from "../../assets/icons/medical-field.svg";
import Ecommerce from "../../assets/icons/ecommerce.svg";
import Tourism from "../../assets/icons/tourism.svg";
import Media from "../../assets/icons/Media.svg";
import { getTranslations } from "next-intl/server";

const cardsInfo = [
  {
    src: Companies.src,
    alt: "Companies",
    width: "119px",
    height: "152px",
    cardHeight: "h-[252px]",
  },
  {
    src: Education.src,
    alt: "Education",
    width: "120px",
    height: "79px",
    cardHeight: "h-[210px] ",
  },
  {
    src: MedicalField.src,
    alt: "Medical Feild",
    width: "152px",
    height: "129px",
    cardHeight: "h-[218px]",
  },
  {
    src: Ecommerce.src,
    alt: "Ecommerce",
    width: "125px",
    height: "91px",
    cardHeight: "h-[220px]",
  },
  {
    src: Tourism.src,
    alt: "Tourism",
    width: "102px",
    height: "104px",
    cardHeight: "h-[223px]",
  },
  {
    src: Media.src,
    alt: "Media",
    width: "86px",
    height: "99px",
    cardHeight: "h-[230px]",
  },
];

export default async function Cards() {
  const t = await getTranslations();
  const { titles, descriptions } = t.raw("Fields").cards;

  const updatedCardsInfo = cardsInfo.map((card, index) => ({
    ...card,
    title: titles[index] || "Translation missing",
    description: descriptions[index] || "Translation missing",
  }));

  return (
    <div className="flex md:gap-x-5 gap-y-32 items-center md:flex-row flex-col lg:justify-between justify-center md:px-16 mt-40 flex-wrap mx-auto">
      {updatedCardsInfo.map((card, index) => (
        <div
          key={index}
          className={`self-center ${card.cardHeight} flex flex-col justify-between items-center`}
        >
          <Link href={card.src} target="_blank" rel="noopener noreferrer">
            <img
              className={`max-w-[${card.width}] max-h-[${card.height}]`}
              src={card.src}
              alt={card.alt}
            />
          </Link>
          <div className="flex flex-col md:self-start self-center text-center md:text-start text-white">
            <span className="bg-white md:w-[368px] w-full h-0.5 mt-3 mb-2" />
            <h4>{card.title}</h4>
            <p className="max-w-[356px]">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
