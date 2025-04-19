import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";
import useQuestionStore from "../../stores/questionStore.js";
import { useEffect } from "react";
import { MyQuestionsListType } from "../../types/questions/questions-type.js";

const question = {
  id: 1,
  name: "Variable",
  detail: `แปลงวินาทีเป็น รูปแบบชั่วโมง:นาที:วินาที\nคำอธิบาย: เขียนฟังก์ชันที่รับวินาทีเป็นจำนวนเต็ม\nแล้วแปลงเป็นเวลารูปแบบ ชั่วโมง:นาที:วินาที\n\nตัวอย่างที่ 1:\nInput: 3661\nOutput: "1:1:1"\n\nตัวอย่างที่ 2:\nInput: 75\nOutput: "0:1:15"\n\nตัวอย่างที่ 3:\nInput: 12345\nOutput: "3:25:45"`,
};

/**
 *
 * @typedef {{
 *  questions : MyQuestionsListType
 * }}
 */
var SideBarMenuPropTypes;

/**
 *
 * @param {SideBarMenuPropTypes} questions
 * @returns
 */
function SideBarMenu({ questions }) {
  const { actionGetQuestionAndMySubmissionById, question } = useQuestionStore();

  const navigate = useNavigate();

  /**
   *
   * function for Click event in each question button
   * and then fetch the question detail promptly set
   * the global question state
   *
   */
  const handleClick = async (questionId) => {
    try {
      await actionGetQuestionAndMySubmissionById(questionId);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (!question && questions[0]?.questionId) {
      handleClick(questions[0]?.questionId);
    }
  }, []);

  if (questions && questions.length > 0) {
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

          {questions.map((el, index) => {
            return (
              <button
                onClick={() => handleClick(el.questionId)}
                key={el.questionId}
                className={`pl-6 py-2 text-start hover:bg-gray-q-1/8 cursor-pointer ${
                  question?.id === el.questionId && "bg-gray-q-1/8"
                } ${el.isSolved && "text-pink-q"} `}
              >
                {index + 1}. {el.title}
              </button>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default SideBarMenu;
