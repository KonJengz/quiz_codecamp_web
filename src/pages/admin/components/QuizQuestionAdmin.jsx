import questionApi from "../../../api/questionApi";
import useQuestionStore from "../../../stores/questionStore.js";
import { QuestionListType } from "../../../types/questions/questions-type.js";
import Toggle from "./Toggle";
/**
 * @typedef {{
 *  filterByCategory: QuestionListType
 * hdlFilterQuestionByCategory: Function(question: QuestionListType):void
 * }}
 */
var QuizQuestionAdminPropType;

/**
 *
 * @param {QuizQuestionAdminPropType} param0
 * @returns
 */
function QuizQuestionAdmin({}) {
  // console.log(questions);
  const { filterQuestions, setFilterQuestions, actionGetQuestions } =
    useQuestionStore();

  const hdlClicktoggle = async (questionId) => {
    try {
      await questionApi.updateStatus(questionId);
      await actionGetQuestions();
      setFilterQuestions();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-4 bg-white rounded-3xl text-black">
      <table className="table">
        <thead>
          <tr className="flex items-center">
            <th className="flex-1 flex items-center gap-1 justify-center cursor-pointer">
              <span>No.</span>
            </th>
            <th className="flex-10">Question Name</th>
            <th className="flex-8 flex items-center gap-1 justify-center cursor-pointer">
              <span>Category</span>
            </th>
            <th className="flex-4 flex items-center gap-1 justify-center cursor-pointer">
              <span>Status</span>
            </th>
            <th className="flex-4"></th>
          </tr>
        </thead>
        <tbody className="text-purple-1">
          {filterQuestions?.length > 0 &&
            filterQuestions.map((question, index) => (
              <tr
                key={question.id}
                className="hover:bg-base-300 flex items-center"
              >
                <td className="flex-1 text-center">{index + 1}</td>
                <td className="flex-10">{question.title}</td>
                <td className="flex-8 text-center">
                  {question.category?.name}
                </td>
                <td className="flex-4 flex justify-center">
                  <Toggle
                    isToggle={!question.deletedAt}
                    hdlClicktoggle={() => hdlClicktoggle(question.id)}
                  />
                </td>
                <td className="flex-4">Edit</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default QuizQuestionAdmin;
