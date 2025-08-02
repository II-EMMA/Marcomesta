"use client";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Logo from "../../assets/images/new-company-logo.png";

const images = [
  { src: Logo.src, alt: "Company Logo", style: "max-w-[180px] max-h-[180px]" },
  { src: Logo.src, alt: "Company Logo", style: "max-w-[180px] max-h-[180px]" },
  { src: Logo.src, alt: "Company Logo", style: "max-w-[180px] max-h-[180px]" },
  { src: Logo.src, alt: "Company Logo", style: "max-w-[180px] max-h-[180px]" },
  { src: Logo.src, alt: "Company Logo", style: "max-w-[180px] max-h-[180px]" },
  { src: Logo.src, alt: "Company Logo", style: "max-w-[180px] max-h-[180px]" },
  { src: Logo.src, alt: "Company Logo", style: "max-w-[180px] max-h-[180px]" },
  { src: Logo.src, alt: "Company Logo", style: "max-w-[180px] max-h-[180px]" },
  { src: Logo.src, alt: "Company Logo", style: "max-w-[180px] max-h-[180px]" },
  { src: Logo.src, alt: "Company Logo", style: "max-w-[180px] max-h-[180px]" },
];

export default function NewAnimation() {
  const lang = useLocale();
  const isRTL = lang === "ar";
  const t = useTranslations();
  const { subTitle } = t.raw("Clients");
  const duplicatedImages = [...images, ...images, ...images, ...images];

  return (
    <div className="opacity-80 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:gap-x-8 md:gap-y-11 gap-y-8 xl:gap-y-0">
          <h2
            className={`text-purple-gradient-5 text-4xl font-extrabold text-center mx-2 sm:mx-0 ${
              isRTL ? "2xl:mr-10 xl:mr-5 ml-0" : "2xl:ml-10 xl:ml-5 mr-0"
            }`}
          >
            {subTitle}
          </h2>

          <div
            className={`overflow-hidden w-full bg-[#38c295]/2 ${
              isRTL
                ? "[mask-image:linear-gradient(to_left,_transparent,_black_25%,_black_75%,_transparent)]"
                : "[mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]"
            }`}
          >
            <motion.div
              className={`flex gap-14 items-center ${
                isRTL ? "pl-14" : "pr-14"
              }`}
              animate={{
                translateX: isRTL ? "50%" : "-50%",
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {duplicatedImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`flex-shrink-0 ${image.style}`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
