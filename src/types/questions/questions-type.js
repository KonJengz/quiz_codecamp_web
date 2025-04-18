import { SubmissionsType } from "../submissions/submissions-type";

/**
 * @typedef
 */
export var QuestionListType;

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
