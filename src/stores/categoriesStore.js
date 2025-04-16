import { create } from "zustand";
import categoiesApi from "../api/categoriesApi";

const useCategoriesStore = create((set) => ({
  categories: [],
  actionGetCategories: async () => {
    const result = await categoiesApi.getCategories();
    set({ categories: result.data.data });
  },
}));

export default useCategoriesStore;
