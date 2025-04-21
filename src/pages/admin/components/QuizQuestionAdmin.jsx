import { PencilLine } from "lucide-react";
function QuizQuestionAdmin({ questions }) {
  return (
    <div className="p-4 bg-gray-q-1 rounded-3xl text-black">
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
          {questions?.length > 0 &&
            questions.map((question, index) => (
              <tr
                key={question.id}
                className="hover:bg-base-300 flex items-center"
              >
                <td className="flex-1 text-center">{index + 1}</td>
                <td className="flex-10">{question.title}</td>
                <td className="flex-8 text-center">
                  {question.category?.name}
                </td>
                <td className="flex-4 text-center">
                  <input
                    type="checkbox"
                    // checked={!question.deletedAt}
                    onChange={() => {}}
                    className="toggle theme-controller border-gray-q-1 bg-gray-q-2/30 checked:border-pink-q checked:bg-gradient-to-bl from-pink-q to-blue-q outline-0 ring-0"
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
