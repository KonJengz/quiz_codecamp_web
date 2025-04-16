import { act } from "react";
import questionApi from "../api/questionApi";
import { create } from "zustand";

const useQuestionStore = create((set) => ({
  questions: [],
  question: null,
  actionGetQuestionsByCategoryId: async (categoryId) => {
    const result = await questionApi.getQuestionsByCategoryId(categoryId);
    set({ questions: result.data.data });
  },
  actionGetQuestionById: async (questionId) => {
    const result = await questionApi.getQuestionById(questionId);
    set({ question: result.data.data });
  },
  actionCreateQuestion: async (input) => {
    const result = await questionApi.createQuestion(input);
    set((state) => ({
      questions: [...state.questions, result.data.data],
    }));
  },
}));

export default useQuestionStore;
