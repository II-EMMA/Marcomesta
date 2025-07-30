"use client";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
// import Othaim from "../../assets/icons/othaim.svg";
// import Almanea from "../../assets/icons/almanea.svg";
// import Est from "../../assets/icons/est.svg";
// import RoyalCommission from "../../assets/icons/royal-commission.svg";
// import Sinopec from "../../assets/icons/sinopec.svg";
import Logo from "../../assets/images/company-logo.svg";

const images = [
  // {
  //   src: Othaim.src,
  //   alt: "Othaim",
  //   style: "w-[92px] h-[126px]",
  // },
  // {
  //   src: Almanea.src,
  //   alt: "Almanea",
  //   style: "w-[268px] h-[148px]",
  // },
  // {
  //   src: Est.src,
  //   alt: "Est",
  //   style: "w-[182px] h-[95px]",
  // },
  // {
  //   src: RoyalCommission.src,
  //   alt: "Royal Commission",
  //   style: "w-[253px] h-[70px]",
  // },
  // {
  //   src: Sinopec.src,
  //   alt: "Sinopec",
  //   style: "w-[277px] h-[73px]",
  // },
  {
    src: Logo.src,
    alt: "Company Logo",
    style: "max-w-[250px] max-h-[231px]",
  },
  {
    src: Logo.src,
    alt: "Company Logo",
    style: "max-w-[250px] max-h-[231px]",
  },
  {
    src: Logo.src,
    alt: "Company Logo",
    style: "max-w-[250px] max-h-[231px]",
  },
  {
    src: Logo.src,
    alt: "Company Logo",
    style: "max-w-[250px] max-h-[231px]",
  },
  {
    src: Logo.src,
    alt: "Company Logo",
    style: "max-w-[250px] max-h-[231px]",
  },
];

export default function Animation() {
  const currentLocale = useLocale();
  const isRTL = currentLocale === "ar";
  const duplicatedImages = [...images, ...images];

  return (
    <div className="bg-purple-200/10 opacity-80">
      <div className="container mx-auto">
        <div
          className={`overflow-hidden ${
            isRTL
              ? "[mask-image:linear-gradient(to_left,_transparent,_black_25%,_black_75%,_transparent)]"
              : "[mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]"
          }`}
        >
          <motion.div
            className={`flex gap-14 items-center flex-none ${
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
  );
}
