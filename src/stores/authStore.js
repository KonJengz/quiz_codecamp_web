import { create } from "zustand";
import { persist } from "zustand/middleware";
import authApi from "../api/authApi";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      accessToken: "",
      actionLogin: async (input) => {
        const result = await authApi.login(input);
        console.log("result", result.data.data.accessToken);
        set({ accessToken: result.data.data.accessToken });
        return result.data.data.accessToken;
      },
      actionLogout: () => {
        set({ accessToken: "", user: null });
        localStorage.removeItem("accessToken");
      },
    }),
    {
      name: "accessToken",
      getStorage: () => localStorage,
      partialize: (state) => ({
        accessToken: state.accessToken,
      }),
    }
  )
);

export default useAuthStore;
