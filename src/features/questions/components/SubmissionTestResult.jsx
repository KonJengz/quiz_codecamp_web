import { TestResultType } from "../../../types/submissions/submissions-type";
import TestResultDetailList from "./TestResultDetailList";

/**
 * @typedef {{
 *  testResult : TestResultType
 * }}
 */
var SubmissionTestResultPropTypes;

/**
 *
 * @param {SubmissionTestResultPropTypes} prop
 * @returns
 */
export default function SubmissionTestResult({ testResult }) {
  const { passed, failed, details } = testResult;

  return (
    <div className="min-h-40">
      Test result
      <h1>Pass : {passed}</h1>
      {failed > 0 && <h1>Failed : {failed}</h1>}
      <TestResultDetailList testResultList={details} />
    </div>
  );
}
