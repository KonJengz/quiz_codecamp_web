import CodeEditor from "../../../components/monaco_test/components/CodeEditor";
import { useState } from "react";
import executeApi from "../../../api/executeApi";
import submitApi from "../../../api/submitApi";
import { AxiosError } from "axios";
import { CONST_SUBMISSIONS } from "../../../types/submissions/submissions-type";
import { useEffect } from "react";
import { SubmissionStatus } from "../components/SubmissionStatus";
import ConsoleAndResultWrapper from "../components/ConsoleAndResultWrapper";
import CodeEditorBtnWrapper from "../components/CodeEditorBtnWrapper";

const DISPLAY_TAGS_INIT = {
  console: false,
  result: false,
};

export default function EditorWrapper({
  defaultCode = "",
  submitStatusProps,
  questionId,
  afterSubmitFunc = null,
}) {
  const [code, setCode] = useState(defaultCode);
  const [logs, setLogs] = useState([]);
  const [isError, setIsError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  // Submission state
  const [submitStatus, setSubmitStatus] = useState(null);
  const [testResult, setTestResult] = useState({});

  // State for controlling
  // console or test result display part
  const [displayTags, setDisplayTags] = useState({
    ...DISPLAY_TAGS_INIT,
    result: true,
  });

  /**
   *  Function for controlling which part to display
   * in Console/Test Result
   * @param {String} tag
   * @returns
   */
  function hdlChangeTag(tag) {
    const parsedTag = tag.toLowerCase();
    if (displayTags[parsedTag]) return;

    setDisplayTags({ ...DISPLAY_TAGS_INIT, [parsedTag]: true });
  }

  async function hdlExecute(code) {
    try {
      setIsLoading(true);
      if (!code || !code.trim()) return;
      const resp = await executeApi.execute({ code });
      if (!resp.data.isError && resp.data.logs) {
        setLogs(resp.data.logs);
        setIsError(false);
        return;
      }
      setLogs([resp.data.errMsg.split("\n")[0]]);
      setIsError(true);
    } catch (error) {
      console.log(error);

      if (error instanceof AxiosError) {
        setIsFailed(true);
      }
    } finally {
      setIsLoading(false);
    }
  }

  async function hdlSubmit(code) {
    try {
      setIsLoading(true);
      if (!code || !code.trim()) return;

      // Submit the code
      const { data: axiosData } = await submitApi.submit({ code, questionId });

      // Extract the submission field from API
      const submission = axiosData?.data;

      if (!submission) return;

      // If the submission passed all the test
      // we re-fetch the questions list
      // So, isSolved will be true
      if (submission.status === CONST_SUBMISSIONS.PASSED) {
        if (afterSubmitFunc && typeof afterSubmitFunc === "function") {
          await afterSubmitFunc();
        }
      }
      const { testResults } = submission;

      // Setting the submission status
      setSubmitStatus(submission.status);
      setTestResult(testResults);
      setDisplayTags({ ...DISPLAY_TAGS_INIT, result: true });

      // #NOT-TODO but TO-BE-EXTENDED
      // SERVER SENDING LOGS FOR SUBMIT PART
      // BUT THEY LOGS EVERY TEST CASE
      // SO MAYBE IT IS NOT THE BEST IDEA TO
      // RENDER LOG AFTER SUBMISSION
      // BUT BM COMMENT THIS JUST TO THINK OF LATER
      // WHEN NEEDED
    } catch (error) {
      console.log(error);

      if (error instanceof AxiosError) {
        setIsFailed(true);
      }
    } finally {
      setIsLoading(false);
    }
  }

  function handleEditCode(value) {
    setCode(value);
  }

  // Set local state--> code to be default code
  useEffect(() => {
    if (defaultCode.trim()) {
      setCode(defaultCode);
    }
  }, [defaultCode]);

  useEffect(() => {
    if (submitStatusProps) {
      setSubmitStatus(submitStatusProps);
    }
  }, [submitStatusProps]);

  return (
    <div className="flex flex-col gap-4">
      <CodeEditor defaultValue={code} code={code} hdlEdit={handleEditCode} />

      <div className="flex gap-2 justify-between">
        {/* Submission status */}
        <SubmissionStatus status={submitStatus} />

        {/* Execute and submit button */}
        <div className="flex gap-2">
          <CodeEditorBtnWrapper
            executeFunc={() => hdlExecute(code)}
            submitFunc={() => hdlSubmit(code)}
            isLoading={isLoading}
          />
        </div>
      </div>
      <ConsoleAndResultWrapper
        testResult={testResult}
        isError={isError}
        logs={logs}
        displayTags={displayTags}
        hdlChangeTag={hdlChangeTag}
      />
    </div>
  );
}
