import Hands from "../../assets/icons/hands.svg";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import Animation from "./Animation";
import NewAnimation from "./NewAnimation";
// import ContactContainer from "@/components/ContactContainer";

export default async function Clients() {
  const t = await getTranslations();
  const lang = await getLocale();
  const { title } = t.raw("Clients");
  // const {
  //   title: subTitle,
  //   btnTextOne,
  //   btnTextTwo,
  // } = t.raw("Clients").ContactUs;
  console.log(`${lang}#clients`);

  return (
    <section
      id={`${lang}/clients`}
      className="py-8 border-b-primary-gray border-t-primary-gray flex items-center justify-between mx-auto px-5 max-w-[1500px] flex-col xl:gap-y-16 gap-y-24 "
    >
      <div className="flex flex-col items-center justify-center mb-10">
        <h5 className="text-purple-gradient-5 text-5xl ">{title}</h5>
        <Link href={Hands.src} target="_blank" rel="noopener noreferrer">
          <img
            className="sm:max-w-[243px] max-w-[205px] max-h-[168px]"
            src={Hands.src}
            alt="Hands"
          />
        </Link>
      </div>
      <NewAnimation />
      {/* <Animation /> */}
      {/* <ContactContainer
        subTitle={subTitle}
        btnTextOne={btnTextOne}
        btnTextTwo={btnTextTwo}
      /> */}
    </section>
  );
}
