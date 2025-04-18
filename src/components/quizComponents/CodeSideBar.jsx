import useCategoriesStore from "../../stores/categoriesStore.js";
import useQuestionStore from "../../stores/questionStore.js";
import { QuestionDetailAndMySubmissionType } from "../../types/questions/questions-type";
import { CONST_SUBMISSIONS } from "../../types/submissions/submissions-type";
import { isObjectEmpty } from "../../utils/object-helper";
import EditorWrapper from "../monaco_test/layout/EditorLayout";
import Solution from "./Solution";

/**
 * @typedef {{
 *  question: QuestionDetailAndMySubmissionType
 * }}
 */
var CodeSideBarPropTypes;

/**
 *
 * @param {CodeSideBarPropTypes} props
 * @returns
 */
function CodeSideBar() {
  const { category } = useCategoriesStore();
  const { question, actionGetQuestionsAndMeByCategoryId } = useQuestionStore();

  if (!question || isObjectEmpty(question)) return <div>Loading...</div>;

  const { submission } = question || {};

  return (
    <div className="flex flex-col gap-2 flex-5/12">
      {submission && submission.status === CONST_SUBMISSIONS.PASSED && (
        <div className="flex flex-col text-sm">
          <Solution solution={question?.solution} />
        </div>
      )}

      <>
        <EditorWrapper
          defaultCode={submission?.code ?? question?.starterCode}
          submitStatusProps={submission?.status}
          questionId={question?.id}
          afterSubmitFunc={() =>
            actionGetQuestionsAndMeByCategoryId(category.id)
          }
        />
      </>
    </div>
  );
}

export default CodeSideBar;
