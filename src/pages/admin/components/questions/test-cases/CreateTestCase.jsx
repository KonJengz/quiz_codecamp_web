import useQuestionStore, {
  INIT_CREATE_TESTCASE_QUESTION,
} from "../../../../../stores/questionStore";
import TestCaseInputItem from "./TestCaseInputItem";
import Button from "../../../../../components/Button";
import { Plus } from "lucide-react";

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

  function hdlAddParameter() {
    setCreateQuestionDetails(
      [...testCases, INIT_CREATE_TESTCASE_QUESTION],
      "testCases"
    );
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
            />
          )}
          <Button
            className="w-full min-w-[75px] p-2 rounded-2xl  flex items-center text-gray-400 bg-gray-300 max-w-2.5 cursor-pointer"
            icon={<Plus />}
            onClick={hdlAddParameter}
          >
            Add Argument
          </Button>
        </h4>
      </div>
    </div>
  );
}
