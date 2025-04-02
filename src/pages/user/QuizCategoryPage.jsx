import React from "react";
import Card from "../../components/Card";
import Jupiter from "../../icons/Jupiter";
import Rocket from "../../icons/Rocket";
import { useNavigate } from "react-router";

const data = [
  {
    name: "Variable",
    isSuccess: true,
    finish: 120,
    total: 120,
  },
  {
    name: "basic object",
    isSuccess: false,
    finish: 38,
    total: 120,
  },
  {
    name: "Loop",
    isSuccess: false,
    finish: 798,
    total: 1290,
  },
  {
    name: "basic array",
    isSuccess: false,
    finish: 20,
    total: 120,
  },
  {
    name: "basic array2",
    isSuccess: false,
    finish: 0,
    total: 180,
  },
  {
    name: "monaco",
    isSuccess: false,
    finish: 0,
    total: 180,
    path: "/monaco",
  },
];

function QuizCategoryPage() {
  const navigate = useNavigate();

  const hdlClick = (path) => {
    console.log("first");
    if (path) navigate(path);
  };

  return (
    <div className="grid grid-cols-1 gap-4 p-8 justify-items-center sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-8 2xl:grid-cols-5 2xl:gap-12">
      {data.map((item, index) => (
        <Card
          hdlClick={() => hdlClick(item.path ?? "")}
          key={index}
          finish={item.finish}
          total={item.total}
          name={item.name}
          icon={
            item.isSuccess ? (
              <Jupiter />
            ) : item.finish === 0 ? (
              <Rocket className={`w-25 fill-gray-q-2`} />
            ) : (
              <Rocket className={`w-25 fill-pink-q`} />
            )
          }
        />
      ))}
    </div>
  );
}

export default QuizCategoryPage;
