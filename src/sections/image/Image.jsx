import Link from "next/link";
import SectionImage from "../../assets/images/human-interact-with-ai.svg";
import AiImage from "../../assets/icons/ai.svg";
import CloudImage from "../../assets/icons/cloud.svg";
import WhatsAppImage from "../../assets/icons/whatsapp.svg";

export default function Image() {
  return (
    <section className="relative mx-auto max-w-[1440px] lg:mt-80 mt-72 w-full z-20">
      <div className="lg:absolute mx-auto lg:mx-0 lg:-top-24 flex lg:flex-row flex-col items-center justify-between lg:rounded-[40px] rounded-tl-[50px] rounded-tr-[50px] lg:left-1/2 lg:transform lg:-translate-x-1/2 py-10 xl:px-36 px-24 lg:w-2/3 w-1/3 bg-gradient-to-bottom z-30">
        <Link
          href={WhatsAppImage.src}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="max-w-[116px] max-h-[116px]"
            src={WhatsAppImage.src}
            alt="WhatsApp"
          />
        </Link>
        <span className="bg-white h-[141px] xl:w-[5px] w-[3px] lg:block hidden" />
        <Link href={CloudImage.src} target="_blank" rel="noopener noreferrer">
          <img
            className="max-w-[120px] max-h-[120px]"
            src={CloudImage.src}
            alt="Cloud"
          />
        </Link>
        <span className="bg-white h-[141px] xl:w-[5px] w-[3px] lg:block hidden" />
        <Link href={AiImage.src} target="_blank" rel="noopener noreferrer">
          <img
            className="max-w-[125px] max-h-[125px]"
            src={AiImage.src}
            alt="AI"
          />
        </Link>
      </div>
      <Link href={SectionImage.src} target="_blank" rel="noopener noreferrer">
        <img
          className="max-w-[1400px] max-h-[720px] rounded-t-4xl lg:block hidden"
          src={SectionImage.src}
          alt="Human Interact with AI"
        />
      </Link>
    </section>
  );
}
