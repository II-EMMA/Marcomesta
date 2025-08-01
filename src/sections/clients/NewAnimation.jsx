"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Logo from "../../assets/images/new-company-logo.png";
import { useEffect } from "react";

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

  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      x: isRTL ? ["100%", "-100%"] : ["-100%", "100%"],
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls, isRTL]);

  const handleHoverStart = () => {
    controls.stop();
  };

  const handleHoverEnd = () => {
    controls.start({
      x: isRTL ? ["100%", "-100%"] : ["-100%", "100%"],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      },
    });
  };

  return (
    <div className="bg-purple-200/10 opacity-80 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:gap-x-8 gap-y-11 xl:gap-y-0">
          <h2
            className={`text-[#38c295] text-4xl font-extrabold ${
              isRTL ? "lg:mr-10 ml-0" : "lg:ml-10 mr-0"
            }`}
          >
            {subTitle}
          </h2>

          <div
            className={`overflow-hidden w-full ${
              isRTL
                ? "[mask-image:linear-gradient(to_left,_transparent,_black_25%,_black_75%,_transparent)]"
                : "[mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]"
            }`}
          >
            <motion.div
              className={`flex gap-14 items-center ${
                isRTL ? "pl-14" : "pr-14"
              }`}
              animate={controls}
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
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
