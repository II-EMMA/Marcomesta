import { TbArrowRightToArc } from "react-icons/tb";
export default function WhiteBtn({ className, text }) {
  return (
    <button
      className={`${className} flex items-center justify-between text-center bg-transparent text-white py-1 px-4 gap-x-2 rounded-[40px] text-lg font-normal border border-white hover:text-[#b52e94] transition-all duration-200 ease-in-out  hover:bg-white`}
    >
      {text}
      <TbArrowRightToArc />
    </button>
  );
}
