import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import authApi from '../api/authApi';

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: '',
      actionLogin: async (input) => {
        const result = await authApi.login(input);
        console.log('result', result);
        set({ token: result.data.data.accessToken });
      },
      actionLogout: () => {
        set({ token: '', user: null });
        localStorage.removeItem('user-auth');
      }
    }),
    {
      name: 'user-auth',
      getStorage: () => localStorage,
      partialize: (state) => ({
        token: state.token
      })
    }
  )
);

export default useAuthStore;
