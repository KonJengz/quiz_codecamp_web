import { Play } from "lucide-react";
import ButtonEditor from "../../../components/ButtonEditor";
import { Send } from "lucide-react";

export default function CodeEditorBtnWrapper({
  executeFunc,
  submitFunc,
  isLoading,
}) {
  return (
    <>
      <ButtonEditor
        handleClick={executeFunc}
        btn="cancel"
        disableBtn={isLoading}
        LoaderComponent={function () {
          return <Play width={20} height={20} strokeWidth={1.5} />;
        }}
        isLoading={isLoading}
      >
        RUN!
      </ButtonEditor>

      <ButtonEditor
        handleClick={submitFunc}
        disableBtn={isLoading}
        LoaderComponent={() => (
          <Send width={20} height={20} strokeWidth={1.5} />
        )}
        isLoading={isLoading}
      >
        SUBMIT!
      </ButtonEditor>
    </>
  );
}
