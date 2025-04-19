import { TESTCASE_MATCHER } from "../test-cases/test-cases-type";

/**
 * @typedef {}
 */
export var SubmissionsType;

export const CONST_SUBMISSIONS = {
  PASSED: "PASSED",
  FAILED: "FAILED",
};

/**
 * @type {TestResultDetailType[]}
 */
export var TestResultDetailListType;

/**
 * @typedef {{
 *  actual : unknown
 *  expected: unknown
 *  input : unknown[]
 *  matcher: typeof TESTCASE_MATCHER[keyof typeof TESTCASE_MATCHER]
 *  not: Boolean
 *  status: typeof CONST_SUBMISSIONS[keyof typeof CONST_SUBMISSIONS]
 *  testCase: number
 * }}
 */
export var TestResultDetailType;

/**
 * @typedef {{
 *  details : TestResultDetailListType
 *  failed : number
 *  passed : number
 *  status: typeof CONST_SUBMISSIONS
 * }}
 */
export var TestResultType;
