import { CategoryType } from "../categories/categories-type";

/**
 * @typedef {QuestionsDetailType[]}
 */
export var QuestionListType;

/**
 * @typedef {{
 *  id: string
 *  title: string
 *  category: CategoryType
 *  createdAt: string
 *  updatedAt: string
 *  deletedAt :string
 * }}
 */
export var QuestionsDetailType;

/**
 * @typedef {
 *  {
 *      createdAt : Date,
 *      deletedAt : Date | null,
 *      description: String,
 *      id : String,
 *      solution : String,
 *      starterCode : String,
 *      submission : SubmissionsType,
 *      title : String,
 *      updatedAt: Date,
 *      variableName: String
 *  }
 * }
 */
export var QuestionDetailAndMySubmissionType;

/**
 * @typedef {{
 *  title: String
 *  questionId: String
 *  isSolved: boolean
 *  deletedAt: Date | null
 * }}
 */
export var MyQuestionInListType;

/**
 * @typedef {MyQuestionInListType[]}
 */
export var MyQuestionsListType;
