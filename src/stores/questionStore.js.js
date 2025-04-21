import questionApi from "../api/questionApi";
import { create } from "zustand";

const useQuestionStore = create((set) => ({
  questions: [],
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
}));

export default useQuestionStore;
