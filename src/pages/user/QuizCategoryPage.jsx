import { useCallback, useEffect } from "react";
import Card from "../../components/Card";
import Jupiter from "../../icons/Jupiter";
import Rocket from "../../icons/Rocket";
import { useLocation, useNavigate } from "react-router";
import useCategoriesStore from "../../stores/categoriesStore";

// const categories = [
//   {
//     id: 1,
//     name: "Variable",
//     isSuccess: true,
//     questions: [1, 2, 3, 4, 5],
//     finish: 120,
//     total: 120,
//   },
//   {
//     id: 2,
//     name: "basic object",
//     isSuccess: false,
//     questions: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     finish: 38,
//     total: 120,
//   },
//   {
//     id: 3,
//     name: "Loop",
//     isSuccess: false,
//     questions: [1, 2, 3, 4, 5, 6, 7],
//     finish: 798,
//     total: 1290,
//   },
//   {
//     id: 4,
//     name: "basic array",
//     isSuccess: false,
//     questions: [1, 2, 3, 4, 5],
//     finish: 20,
//     total: 120,
//   },
//   {
//     id: 5,
//     name: "basic array2",
//     isSuccess: false,
//     questions: [],
//     finish: 0,
//     total: 180,
//   },
//   {
//     id: 6,
//     name: "Function",
//     isSuccess: false,
//     questions: [1, 2, 3, 4, 5],
//     finish: 20,
//     total: 120,
//   },
//   {
//     id: 7,
//     name: "Function2",
//     isSuccess: false,
//     questions: [1, 2, 3, 4, 5],
//     finish: 0,
//     total: 120,
//   },
//   {
//     id: 8,
//     name: "Function3",
//     isSuccess: false,
//     questions: [1, 2, 3, 4, 5],
//     finish: 0,
//     total: 120,
//   },
//   {
//     id: 9,
//     name: "Function4",
//     isSuccess: false,
//     questions: [1, 2, 3, 4, 5],
//     finish: 0,
//     total: 120,
//   },
//   {
//     id: 10,
//     name: "Function5",
//     isSuccess: false,
//     questions: [1, 2, 3, 4, 5],
//     finish: 0,
//     total: 120,
//   },
//   {
//     id: 11,
//     name: "Function6",
//     isSuccess: false,
//     questions: [1, 2, 3, 4, 5],
//     finish: 0,
//     total: 120,
//   },
// ];

function QuizCategoryPage() {
  const categories = useCategoriesStore((state) => state.categories);
  const actionGetCategoriesQuery = useCategoriesStore(
    (state) => state.actionGetCategoriesQuery
  );
  const navigate = useNavigate();

  const hdlClick = useCallback((id) => {
    if (pathname === "/challenge") {
      navigate(`/challenge/${id}`);
    }
    if (pathname === "/") {
      navigate(`/quiz/${id}`);
    }
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    const fetchCategories = async () => {
      if (pathname === "/challenge") {
        await actionGetCategoriesQuery(true);
      }
      if (pathname === "/") {
        await actionGetCategoriesQuery(false);
      }
    };
    fetchCategories();
  }, [pathname, actionGetCategoriesQuery]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-8 2xl:grid-cols-5 2xl:gap-12 gap-4 p-8 justify-items-center ">
      {categories.length > 0 &&
        categories.map((item) => (
          <Card
            hdlClick={hdlClick}
            key={item.id}
            finish={item.solvedQuestions.length}
            total={item.questions.length}
            name={item.name}
            id={item.id}
            icon={
              item.questions.length === item.solvedQuestions.length ? (
                <Jupiter />
              ) : item.questions.length === 0 ? (
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
