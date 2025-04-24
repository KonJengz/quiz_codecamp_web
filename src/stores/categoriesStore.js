import { create } from "zustand";
import categoiesApi from "../api/categoriesApi";

const useCategoriesStore = create((set, get) => ({
  categories: [],
  quizzes: [],
  challenges: [],
  category: null,
  actionGetCategories: async (options = { status: "all", cha: "all" }) => {
    console.log;
    const { status, cha } = options;
    // console.log("Status:", status);
    // console.log("Challenge:", cha);
    const result = await categoiesApi.getCategories(status, cha);

    // console.log(
    //   "categoriesArray AT MOMENT OF LOG (Stringified):",
    //   JSON.stringify(result.data.data, null, 2) // Log the specific array
    // );
    // // Also log the reference for comparison
    // console.log("Original result object (Reference):", result);

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
  actionCreateCategory: async (input) => {
    await categoiesApi.createCategory(input);
    get().actionGetCategories({ status: "all", cha: "false" });
  },
  actionEditCategoryById: async (id, input) => {
    await categoiesApi.updateCategory(id, input);
    get().actionGetCategories({ status: "all", cha: "false" });
  },
}));

export default useCategoriesStore;
