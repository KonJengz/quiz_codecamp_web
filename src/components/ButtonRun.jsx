export default function Button({ children }) {
  return (
    <button className="px-6 py-3  gap-2 rounded-[14px] text-white font-bold bg-[#3B1959] border border-amber-300  flex items-center cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 3l14 9-14 9V3z"
        />
      </svg>

      {children}
    </button>
  );
}
