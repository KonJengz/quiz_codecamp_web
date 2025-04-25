import CreateTestCase from "./CreateTestCase";
import useQuestionStore from "../../../../../stores/questionStore";

export default function CreateTestCaseList() {
  const { createQuestionDetails } = useQuestionStore();
  const { isFunction, testCases } = createQuestionDetails;
  return (
    <div className="grid">
      {testCases.map((_, index) => (
        <CreateTestCase
          key={Date.now() + Math.random() + index}
          isFunction={isFunction}
          testCaseIndex={index}
        />
      ))}
    </div>
  );
}
