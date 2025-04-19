import { useState } from "react";
import Console from "../../../components/monaco_test/components/Console";
import { TestResultType } from "../../../types/submissions/submissions-type";
import { isObjectEmpty } from "../../../utils/object-helper";
import SubmissionTestResult from "./SubmissionTestResult";

/**
 * @typedef {{
 *  isError : Boolean
 *  logs: String[]
 *  testResult: TestResultType
 *  displayTags: {console: boolean, result: boolean}
 *  hdlChangeTag: () => void
 * }}
 */
var ConsoleAndResultWrapperPropTypes;

/**
 *
 * @param {ConsoleAndResultWrapperPropTypes} prop
 * @returns
 */
export default function ConsoleAndResultWrapper({
  isError,
  logs,
  testResult,
  hdlChangeTag,
  displayTags,
}) {
  const headerTag = ["Console", "Result"];

  if (!isObjectEmpty(testResult)) {
    return (
      <div className="bg-black-editor min-h-40">
        <div className="flex w-[30%] justify-between m-2">
          {headerTag.map((header, index) => (
            <div
              key={index}
              className="min-w-12 p-2 bg-gray-800 hover:bg-gray-600 rounded-lg cursor-pointer"
              onClick={() => hdlChangeTag(header)}
            >
              <h1 key={index} className="">
                {header}
              </h1>
            </div>
          ))}
        </div>
        {displayTags.result ? (
          <SubmissionTestResult testResult={testResult} />
        ) : (
          <Console
            header={function () {
              return null;
            }}
            isError={isError}
            logs={logs}
          />
        )}
      </div>
    );
  } else {
    return (
      <>
        <Console isError={isError} logs={logs} />
      </>
    );
  }
}
