export const TESTCASE_MATCHER = {
  toBe: "toBe",
  toBeDeepEqual: "toBeDeepEqual",
  toHaveType: "toHaveType",
};

/**
 * @type {CreateTestCaseType[]}
 */
export var CreateTestCaseListType;

/**
 * @typedef {{
 *  input : unknown[]
 *  expected: unknown
 *  variable? :string
 *  matcher :typeof TESTCASE_MATCHER[keyof typeof TESTCASE_MATCHER]
 *  not: boolean
 * }}
 */
export var CreateTestCaseType;
