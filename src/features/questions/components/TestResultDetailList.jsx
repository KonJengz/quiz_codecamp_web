import { Check } from "lucide-react";
import {
  CONST_SUBMISSIONS,
  TestResultDetailListType,
} from "../../../types/submissions/submissions-type";
import { X } from "lucide-react";
import { useState } from "react";
import TestResultDetail from "./TestResultDetail";

/**
 * @typedef {{testResultList: TestResultDetailListType}}
 */
var TestResultDetailListPropType;

/**
 * @param {TestResultDetailListPropType} prop
 */
export default function TestResultDetailList({ testResultList = [] }) {
  const [selectedTestCase, setSelectedTestCase] = useState(0);

  return (
    <>
      <div className="flex">
        {testResultList.map(({ testCase, status }, index) => (
          <div
            key={index}
            className="flex gap-2 mr-2 my-3 bg-gray-700 hover:bg-gray-500 cursor-pointer p-2 rounded-2xl"
            onClick={() => setSelectedTestCase(index)}
          >
            <h1>Test NO: {testCase}</h1>
            {status === CONST_SUBMISSIONS.PASSED ? (
              <Check className="bg-green-400 rounded-2xl" />
            ) : (
              <X className="bg-red-500" />
            )}
          </div>
        ))}
      </div>
      <TestResultDetail testResult={testResultList[selectedTestCase]} />
    </>
  );
}
