"use client";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Logo from "../../assets/images/new-company-logo.png";
import { useEffect, useState } from "react";

const images = [
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
  const [isHovered, setIsHovered] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="opacity-80 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between md:gap-x-8 md:gap-y-11 gap-y-8 xl:gap-y-0">
          <h2
            className={`text-purple-gradient-5 text-4xl font-extrabold text-center mx-2 sm:mx-0 text-nowrap ${
              isRTL ? "2xl:mr-10 xl:mr-5 ml-0" : "2xl:ml-10 xl:ml-5 mr-0"
            }`}
          >
            {subTitle}
          </h2>

          <div
            className={`overflow-x-hidden w-full bg-[#38c295]/2 `}
            onMouseEnter={() => isLargeScreen && setIsHovered(true)}
            onMouseLeave={() => isLargeScreen && setIsHovered(false)}
          >
            <div
              className={`flex gap-14 items-center ${
                isRTL ? "pl-14" : "pr-14"
              }`}
            >
              {images.map((image, index) => (
                <motion.img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`flex-shrink-0 ${image.style}`}
                  animate={
                    isHovered
                      ? { translateX: isRTL ? "-30%" : "30%" }
                      : { translateX: isRTL ? "100%" : "-100%" }
                  }
                  transition={
                    isHovered
                      ? {
                          repeatDelay: 0,
                          duration: 0.01,
                        }
                      : {
                          repeat: Infinity,
                          repeatDelay: 0.75,
                        }
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
