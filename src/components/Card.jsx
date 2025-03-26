import React from 'react';
import Rocket from '../icons/Rocket';

export default function Card({ name, finish, total, icon }) {
  const percentage = (finish / total) * 100;
  return (
    <div className="flex justify-center items-center flex-col gap-2 m-3 h-[300px] w-full">
      <div className="h-auto w-64 bg-[#261236] p-6 rounded-[12px] text-white font-bold shadow-lg flex flex-col items-center gap-4">
        <div className="flex justify-center items-center">{icon}</div>

        <div className="w-full bg-gray-300 h-2 rounded-full mt-2">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      <div className="flex justify-center items-end gap-1">
        <div className="text-center text-xl">{name}</div>
        <div className="text-center text-sm text-gray-500">{`(${finish}/${total})`}</div>
      </div>
    </div>
  );
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
