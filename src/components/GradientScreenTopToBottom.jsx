export default function GradientScreenTopToBottom() {
  return (
    <>
      <div
        className="
          absolute inset-0
          pointer-events-none
          before:content-['']
          before:absolute before:inset-0
          before:z-[-4]
          before:bg-gradient-to-b before:from-[#4c0a7c] before:to-[#b52e94]
        "
      ></div>

      <div
        className="
          absolute inset-0
          pointer-events-none
          after:content-['']
          after:absolute after:inset-y-1/2 after:left-0 after:right-0
          after:z-[-4]
          after:bg-[#b52e94]
        "
      ></div>
    </>
  );
}
