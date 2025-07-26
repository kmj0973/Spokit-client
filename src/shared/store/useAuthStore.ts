import { create } from 'zustand';

type User = {
  id: string | null;
  nickname: string | null;
};

type AuthState = {
  accessToken: string | null;
  user: User | null;
  setAccessToken: (token: string) => void;
  setUser: (user: User) => void;
  setLogout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  user: null,
  setAccessToken: (token) => set({ accessToken: token }),
  setUser: (user) => set({ user }),
  setLogout: () => set({ accessToken: null, user: null }),
}));
