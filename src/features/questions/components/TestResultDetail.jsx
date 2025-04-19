import { TestResultDetailType } from "../../../types/submissions/submissions-type";
import { TESTCASE_MATCHER } from "../../../types/test-cases/test-cases-type";
import { isObjectEmpty } from "../../../utils/object-helper";

/**
 *
 * @param {TestResultDetailType["matcher"] } matcher
 */
function testMatcherStrFormatter(matcher) {
  switch (matcher) {
    case TESTCASE_MATCHER.toBe:
      return "to be";
    case TESTCASE_MATCHER.toHaveType:
      return "to have type";
    case TESTCASE_MATCHER.toBeDeepEqual:
      return "to be deep equal";
    default:
      return "";
  }
}

/**
 * @typedef {{
 *  testResult: TestResultDetailType
 * }}
 */
var TestResultDetailPropType;

/**
 * @param {TestResultDetailPropType} prop
 */
export default function TestResultDetail({ testResult }) {
  if (!testResult || isObjectEmpty(testResult)) return;

  const { actual, expected, input, matcher, not, status, testCase } =
    testResult;

  const notValueDisplayStr = not ? "not" : "";
  const testDetailDisplayStr = `Expect ${actual} ${notValueDisplayStr} ${testMatcherStrFormatter(
    matcher
  )} ${expected}`;

  return (
    <div>
      {/* Test case number */}
      <h1>Test no. {testCase}</h1>
      <h2>{status}</h2>
      {/* Showing input of the test case */}
      {input.length > 0 && <h3>Input : {input.join(", ")}</h3>}

      <p>{testDetailDisplayStr}</p>
    </div>
  );
}
