import { create } from "zustand";
import categoiesApi from "../api/categoriesApi";

const useCategoriesStore = create((set) => ({
  categories: [],
  category: null,
  actionGetCategories: async () => {
    const result = await categoiesApi.getCategories();
    set({ categories: result.data.data });
  },
  actionGetCategoriesQuery: async (query) => {
    const result = await categoiesApi.getCategoriesQuery(query);
    set({ categories: result.data.data });
  },
  setCategory: (category) => {
    set({ category: category });
  },
}));

export default useCategoriesStore;
