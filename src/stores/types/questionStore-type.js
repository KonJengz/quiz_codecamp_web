import {
  QuestionDetailAndMySubmissionType,
  QuestionListType,
  QuestionsDetailType,
} from "../../types/questions/questions-type";

/**
 * @typedef {{
 *  title: string
 *  description: string
 *  variableName: string
 *  testCases: CreateTestCaseListType
 *  isFunction: boolean
 *  categoryId: string
 *  starterCode: string
 *  solution: string
 * }}
 */
export var CreateQuestionDetailsType;

/**
 * @typedef {{
 *  questions: QuestionListType
 *  question: QuestionDetailAndMySubmissionType | QuestionsDetailType
 *  createQuestionDetails: CreateQuestionDetailsType
 *  filterQuestions: QuestionListType
 *  setFilterQuestions: (category: string) => void
 *  actionGetQuestions: () => Promise<void>
 *  actionGetQuestionsAndMeByCategoryId: () => Promise<void>
 *  actionGetQuestionAndMySubmissionById: () => Promise<void>
 *  setCreateQuestionDetails :(input:any, field: keyof CreateQuestionDetailsType) => void
 * }}
 */
export var UseQuestionStoreReturnValueType;
