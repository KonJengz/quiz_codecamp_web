import questionApi from "../../../api/questionApi";
import useQuestionStore from "../../../stores/questionStore.js";
import Toggle from "./Toggle";

function QuizQuestionAdmin({ filterByCategory }) {
  // console.log(questions);

  const actionGetQuestions = useQuestionStore(
    (state) => state.actionGetQuestions
  );

  const hdlClicktoggle = async (questionId) => {
    try {
      await questionApi.updateStatus(questionId);
      await actionGetQuestions();
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
          {filterByCategory?.length > 0 &&
            filterByCategory.map((question, index) => (
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
