export default function CustomBtn({ className, children }) {
  return (
    <button
      className={`${className} flex justify-center items-center text-center rounded-full text-white transition-all duration-200 ease-in-out`}
    >
      {children}
    </button>
  );
}
