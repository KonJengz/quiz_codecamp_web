import { create } from "zustand";
import categoiesApi from "../api/categoriesApi";

const useCategoriesStore = create((set) => ({
  categories: [],
  quizzes: [],
  challenges: [],
  category: null,
  actionGetCategories: async () => {
    const result = await categoiesApi.getCategories();
    set({ categories: result.data.data });
    return result.data.data;
  },
  actionGetCategoriesQuery: async (query) => {
    const result = await categoiesApi.getCategoriesQuery(query);
    set({ categories: result.data.data });
  },
  actionGetCategoriesFilter: async () => {
    try {
      const result = await categoiesApi.getCategories();
      const categories = result.data.data;

      const quizzes = categories.filter((category) => !category.isChallenge);
      const challenges = categories.filter((category) => category.isChallenge);

      set({ quizzes, challenges });
    } catch (error) {
      console.log(error);
    }
  },
  setCategory: (category) => {
    set({ category: category });
  },
}));

export default useCategoriesStore;
