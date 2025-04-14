import { use, useCallback } from "react";
import Card from "../../components/Card";
import Jupiter from "../../icons/Jupiter";
import Rocket from "../../icons/Rocket";
import { useNavigate } from "react-router";
import useAuthStore from "../../stores/authStore";

const data = [
  {
    id: 1,
    name: "Variable",
    isSuccess: true,
    finish: 120,
    total: 120,
  },
  {
    id: 2,
    name: "basic object",
    isSuccess: false,
    finish: 38,
    total: 120,
  },
  {
    id: 3,
    name: "Loop",
    isSuccess: false,
    finish: 798,
    total: 1290,
  },
  {
    id: 4,
    name: "basic array",
    isSuccess: false,
    finish: 20,
    total: 120,
  },
  {
    id: 5,
    name: "basic array2",
    isSuccess: false,
    finish: 0,
    total: 180,
  },
];

function QuizCategoryPage() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  console.log("user QuizCategoryPage", user);

  const hdlClick = useCallback((id) => {
    navigate(`/quiz/${id}`);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 p-8 justify-items-center sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-8 2xl:grid-cols-5 2xl:gap-12">
      {data.map((item, index) => (
        <Card
          hdlClick={hdlClick}
          key={item.id}
          finish={item.finish}
          total={item.total}
          name={item.name}
          id={item.id}
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
