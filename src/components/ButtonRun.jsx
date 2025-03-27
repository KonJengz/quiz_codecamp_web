// export default function Button({ children }) {
//   return (
//     <button className="px-6 py-3  gap-2 rounded-[14px] text-white font-bold bg-[#3B1959] flex items-center cursor-pointer">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={2}
//         stroke="currentColor"
//         className="w-5 h-5"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M5 3l14 9-14 9V3z"
//         />
//       </svg>

//       {children}
//     </button>
//   );
// }

export default function Button({ children }) {
  return (
    <button className="relative px-6 py-2 text-white font-bold flex items-center gap-2 rounded-lg">
      {/* เส้นขอบ Gradient */}
      <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 p-[1px]"></span>

      {/* เนื้อหาของปุ่ม */}
      <span className="relative flex items-center px-6 py-2 bg-[#090016] rounded-lg">
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
      </span>
    </button>
  );
}
