import { Award } from "lucide-react";

export default function Card({ name, finish, total, icon, hdlClick }) {
  const percentage = (finish / total) * 100;
  return (
    <div className="w-full space-y-4" onClick={hdlClick}>
      <div className="w-full space-y-4 bg-gray-q-1/8 rounded-2xl hover:shadow-2 transition-shadow duration-200 ease-in-out p-8">
        <div className="flex h-50 justify-center items-center">{icon}</div>

        <div className="w-full bg-gray-300 h-1 rounded-full">
          <div
            className="h-full bg-pink-q rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      <div className="text-center ">
        <div className="text-xl">{name}</div>
        <div className=" text-sm text-gray-q-2 flex justify-center items-center gap-1">
          {`(${finish}/${total})`}
          {finish === total && <Award className="stroke-pink-q w-5" />}
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="w-full h-80 bg-gray-q-1/10 rounded-2xl hover:shadow-2 transition-shadow duration-200 ease-in-out">
<div className="p-6 w-full rounded-[12px] text-white font-bold flex flex-col items-center gap-4">
  <div className="flex justify-center items-center">{icon}</div>

  <div className="w-full bg-gray-300 h-2 rounded-full mt-2">
    <div
      // className="h-full bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"
      className="h-full bg-[#D100D7] rounded-full"
      style={{ width: `${percentage}%` }}
    ></div>
  </div>
</div>
<div className="flex justify-center items-end gap-1">
  <div className="text-center text-xl">{name}</div>
  <div className="text-center text-sm text-gray-500">{`(${finish}/${total})`}</div>
</div>
</div> */
}

// export default function Card({ name, finish, total, icon }) {
//   const percentage = (finish / total) * 100;
//   return (
//     <div className="flex justify-center items-center flex-col gap-2 m-3">
//       <div className="h-auto w-64 bg-[#261236] p-6 rounded-[12px] text-white font-bold shadow-lg flex flex-col items-center gap-4">
//         <div className="flex justify-center items-center">{icon}</div>

//         <div className="w-full bg-gray-300 h-2 rounded-full mt-2">
//           <div
//             className="h-full bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"
//             style={{ width: `${percentage}%` }} // ตั้งค่าความกว้างของหลอด
//           ></div>
//         </div>
//       </div>
//       <div className="text-center text-xl">{name + ' ' + `(${finish})`}</div>

//       {/* <div className="text-center text-sm text-white">{`${finish}/${total} (${Math.round(
//         percentage
//       )}%)`}</div> */}
//     </div>
//   );
// }
