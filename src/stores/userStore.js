import { create } from "zustand";
import userApi from "../api/userApi";

const useUserStore = create((set) => ({
  users: [],
  actionGetUsers: async () => {
    const result = await userApi.getUsers();
    set({ users: result.data.data });
    return result.data.data;
  },
}));

export default useUserStore;
