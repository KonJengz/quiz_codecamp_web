import useQuestionStore from "../../../../../stores/questionStore";
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
  const { createQuestionDetails, setCreateQuestionDetails } =
    useQuestionStore();
  const { testCases, isFunction } = createQuestionDetails;
  const testCase = testCases[testCaseIndex];

  function onChange(value, index) {
    testCase.input[index] = value;
    setCreateQuestionDetails([...testCases], "testCases");
  }

  /**
   * Function for adding more input for test case
   */
  function hdlAddParameter() {
    testCases[testCaseIndex].input.push("");
    setCreateQuestionDetails([...testCases], "testCases");
  }

  /**
   * Function for remove specific test case input
   */
  function hdlRemoveInput(index) {
    testCases[testCaseIndex].input.splice(index, 1);
    setCreateQuestionDetails([...testCases], "testCases");
  }

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
              testCaseInput={testCase.input}
              onClickAdd={hdlAddParameter}
              hdlRemove={hdlRemoveInput}
            />
          )}
        </h4>
      </div>
    </div>
  );
}
