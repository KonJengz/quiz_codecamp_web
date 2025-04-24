import questionApi from "../api/questionApi";
import { create } from "zustand";
import { TESTCASE_MATCHER } from "../types/test-cases/test-cases-type";
import {
  CreateQuestionDetailsType,
  UseQuestionStoreReturnValueType,
} from "./types/questionStore-type";

/**
 * @type {CreateQuestionDetailsType}
 */
export const INIT_CREATE_QUESTION_DETAILS = {
  title: "",
  categoryId: "",
  starterCode: "",
  description: "",
  solution: "",
  variableName: "",
  isFunction: true,
  testCases: [
    {
      input: [],
      expected: "",
      variable: "",
      matcher: TESTCASE_MATCHER.toBe,
      not: false,
    },
  ],
};

/**
 * @typedef {import("zustand").UseBoundStore<import("zustand").StoreApi<UseQuestionStoreReturnValueType>>}
 * UseQuestionStore
 */

/**
 * @type {UseQuestionStore}
 */
const useQuestionStore = create((set) => ({
  questions: [],
  /**
   * @property {CreateQuestionDetailsType} createQuestionDetails
   */
  createQuestionDetails: INIT_CREATE_QUESTION_DETAILS,
  isFetchNewQuestionsList: false,
  question: null,
  actionGetQuestions: async () => {
    const result = await questionApi.getQuestions();
    set({ questions: result.data.data });
    return result.data.data;
  },
  actionGetQuestionsByCategoryId: async (categoryId) => {
    const result = await questionApi.getQuestionsByCategoryId(categoryId);
    set({ questions: result.data.data });
  },
  actionGetQuestionById: async (questionId) => {
    const result = await questionApi.getQuestionById(questionId);
    set({ question: result.data.data });
  },
  actionGetQuestionsAndMeByCategoryId: async (categoryId) => {
    const result = await questionApi.getQuestionsAndMeByCategoryId(categoryId);
    set({ questions: result.data.data.questions });
    return result.data.data;
  },
  actionGetQuestionAndMySubmissionById: async (questionId) => {
    const result = await questionApi.getQuestionAndMySubmissionById(questionId);
    set({ question: result.data.data });
    return result.data.data;
  },
  actionCreateQuestion: async (input) => {
    const result = await questionApi.createQuestion(input);
    set((state) => ({
      questions: [...state.questions, result.data.data],
    }));
  },
  setCreateQuestionDetails(input, field) {
    set(({ createQuestionDetails }) => ({
      createQuestionDetails: {
        ...createQuestionDetails,
        [field]: input,
      },
    }));
  },
}));

export default useQuestionStore;
