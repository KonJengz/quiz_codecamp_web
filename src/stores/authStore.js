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
        set({ accessToken: result.data.data.accessToken });
      },
      actionLogout: () => {
        set({ accessToken: "", user: null });
        localStorage.removeItem("accessToken");
      },
      actionGetMe: async () => {
        const result = await authApi.getMe();
        console.log("result actionGetMe", result);

        set({ user: result.data.data });
        return result;
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
