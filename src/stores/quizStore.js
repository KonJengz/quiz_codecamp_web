import axios from "../config/axios";
import create from "zustand";

const useQuizStore = create((set) => ({
  quizzes: [],
  quiz: null,
  actionGetQuizzes: async () => {
    const response = await axios.get("/quizzes");
    set({ quizzes: response.data.quizzes });
  },
  actionGetQuiz: async (id) => {
    const response = await axios.get(`/quizzes/${id}`);
    set({ quiz: response.data.quiz });
  },
}));

export default useQuizStore;
