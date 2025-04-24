import useQuestionStore from "../../../../../stores/questionStore";
import { CreateTestCaseType } from "../../../../../types/test-cases/test-cases-type";
import TestCaseInputItem from "./TestCaseInputItem";

/**
 * @typedef {{
 *  testCaseIndex: number
 * }}
 */
var CreateTeseCasePropType;

/**
 *
 * @param {CreateTeseCasePropType} prop
 * @returns
 */
export default function CreateTestCase({ testCaseIndex }) {
  const { createQuestionDetails, setCreateQuestionDetail } = useQuestionStore();
  const { testCases, isFunction } = createQuestionDetails;
  const testCase = testCases[testCaseIndex];

  function onChange(value, index) {
    testCase.input[index] = value;
    setCreateQuestionDetail([...testCases], "testCases");
  }

  function hdlAddParameter() {}

  return (
    <div className="flex">
      <div className="flex">
        <h4>
          Input
          <span
            className={`ml-2 ${isFunction ? "text-red-500" : "text-gray-500"}`}
          >
            {isFunction ? "*Required" : "(Optional)"}
          </span>
          {isFunction && (
            <TestCaseInputItem
              onChange={onChange}
              onClickAdd={hdlAddParameter}
              testCaseInput={testCase.input}
            />
          )}
        </h4>
      </div>
    </div>
  );
}
