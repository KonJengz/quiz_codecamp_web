import CodeEditor from "../components/CodeEditor";
import Console from "../components/Console";
import { useState } from "react";
import executeApi from "../../../api/executeApi";
import submitApi from "../../../api/submitApi";
import { CircleX, LoaderCircle, Play, Send } from "lucide-react";
import ButtonEditor from "../../ButtonEditor";
import { AxiosError } from "axios";
import ButtonNoti from "../../ButtonNoti";
import Checked from "../../../icons/Check";
import { CONST_SUBMISSIONS } from "../../../types/submissions/submissions-type";
import { useEffect } from "react";

export default function EditorWrapper({
  defaultCode = "",
  submitStatusProps,
  questionId,
  afterSubmitFunc = null,
}) {
  const [code, setCode] = useState(defaultCode);
  const [logs, setLogs] = useState([]);
  const [isError, setIsError] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

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
      const { data: axiosData } = await submitApi.submit({ code, questionId });
      const submission = axiosData?.data;

      if (submission.status === CONST_SUBMISSIONS.PASSED) {
        if (afterSubmitFunc) {
          await afterSubmitFunc;
        }
      }

      setSubmitStatus(submission.status);
      console.log(data);
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

  // Set local state-->code to be default code
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
        {!submitStatus ? (
          <div></div>
        ) : (
          <div>
            {submitStatus === CONST_SUBMISSIONS.FAILED && (
              <ButtonNoti btn="cancel" spring={true}>
                <CircleX
                  width={22}
                  height={22}
                  strokeWidth={1.5}
                  className="text-red-400"
                />
                Something went wrong, please try again.
              </ButtonNoti>
            )}
            {submitStatus === CONST_SUBMISSIONS.PASSED && (
              <ButtonNoti btn="cancel" spring={true}>
                <Checked />
                SUCCESS!
              </ButtonNoti>
            )}
          </div>
        )}
        <div className="flex gap-2">
          <ButtonEditor
            handleClick={() => hdlExecute(code)}
            btn="cancel"
            disableBtn={isLoading}
          >
            {isLoading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              <Play width={20} height={20} strokeWidth={1.5} />
            )}
            RUN!
          </ButtonEditor>

          <ButtonEditor
            handleClick={() => hdlSubmit(code)}
            disableBtn={isLoading}
          >
            {isLoading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              <Send width={20} height={20} strokeWidth={1.5} />
            )}
            SUBMIT!
          </ButtonEditor>
        </div>
      </div>
      <Console isError={isError} logs={logs} />
    </div>
  );
}
