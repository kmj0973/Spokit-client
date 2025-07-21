import { axiosInstance } from '@/shared/lib/axiosInstance';

export const authApi = {
  logout: async () => {
    await axiosInstance.post('/logout');
  },
};
