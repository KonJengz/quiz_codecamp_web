import { ChevronLeft } from "lucide-react";
import { useLocation, useNavigate, useParams } from "react-router";
import useQuestionStore from "../../stores/questionStore.js";
import { useEffect } from "react";

const questions = [
  {
    id: 1,
    title: "Variable",
  },
  {
    id: 2,
    title: "basic object",
  },
  {
    id: 3,
    title: "Loop",
  },
  {
    id: 4,
    title: "Function",
  },
  {
    id: 5,
    title: "basic array",
  },
  {
    id: 6,
    title: "basic array2",
  },
];

const question = {
  id: 1,
  name: "Variable",
  detail: `แปลงวินาทีเป็น รูปแบบชั่วโมง:นาที:วินาที\nคำอธิบาย: เขียนฟังก์ชันที่รับวินาทีเป็นจำนวนเต็ม\nแล้วแปลงเป็นเวลารูปแบบ ชั่วโมง:นาที:วินาที\n\nตัวอย่างที่ 1:\nInput: 3661\nOutput: "1:1:1"\n\nตัวอย่างที่ 2:\nInput: 75\nOutput: "0:1:15"\n\nตัวอย่างที่ 3:\nInput: 12345\nOutput: "3:25:45"`,
};
function SideBarMenu() {
  const actionGetQuestionsByCategoryId = useQuestionStore(
    (state) => state.actionGetQuestionsByCategoryId
  );
  // const questions = useQuestionStore((state) => state.questions);
  // const question = useQuestionStore((state) => state.question);
  const actionGetQuestionById = useQuestionStore(
    (state) => state.actionGetQuestionById
  );

  const { categoryId } = useParams();
  const navigate = useNavigate();

  console.log("categoryId", categoryId);

  const handleClick = async (questionId) => {
    try {
      console.log("questionId", questionId);
      // await actionGetQuestionById(questionId);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const fecthQuestions = async () => {
      try {
        await actionGetQuestionsByCategoryId(categoryId);
      } catch (error) {
        console.log("error", error);
      }
    };
    // fecthQuestions();
  }, [categoryId]);

  useEffect(() => {
    if (questions[0]?.id) {
      handleClick(questions[0]?.id);
    }
  }, []);

  return (
    <div className="flex flex-col flex-2/12 bg-gray-q-1/8 rounded-xl pb-6 h-full overflow-auto">
      <button
        onClick={() => navigate("/")}
        className="flex items-center hover:text-gray-q-1 hover:underline cursor-pointer m-4"
      >
        <ChevronLeft strokeWidth={1.5} />
        <span className="text-xs text-start">back to categories</span>
      </button>
      <div className="flex flex-col mt-2 gap-1">
        <h1 className="text-xs text-start pl-6 text-gray-q-1 font-semibold">
          Questions
        </h1>
        {questions.length > 0 &&
          questions.map((el, index) => {
            return (
              <button
                onClick={() => handleClick(el.id)}
                key={el.id}
                className={`pl-6 py-2 text-start hover:bg-gray-q-1/8 cursor-pointer ${
                  question?.id === el.id && "bg-gray-q-1/8"
                }`}
              >
                {index + 1}. {el.title}
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default SideBarMenu;
