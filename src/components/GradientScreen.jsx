export default function GradientScreen() {
  return (
    <>
      <div
        className="
      absolute inset-0
      pointer-events-none
      before:content-['']
      before:absolute before:inset-y-0 before:right-1/2 before:left-[-100vw]
      before:z-[-4]
      before:bg-[#b52e94]
      "
      ></div>

      <div
        className="
        absolute inset-0
        pointer-events-none
        after:content-['']
        after:absolute after:inset-y-0 after:left-1/2 after:right-[-100vw]
        after:z-[-400]
        after:bg-[#4c0a7c]
    "
      ></div>
    </>
  );
}
