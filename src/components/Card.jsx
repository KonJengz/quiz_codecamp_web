import { Award } from "lucide-react";

export default function Card({ name, finish, total, icon, hdlClick, id }) {
  const percentage = (finish / total) * 100;

  return (
    <div
      onClick={() => hdlClick(id)}
      className="w-full space-y-4 cursor-pointer"
    >
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
