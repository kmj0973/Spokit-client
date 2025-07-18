import { axiosInstance } from '@/shared/lib/axiosInstance';

export const userApi = {
  getUserInfo: async () => {
    const { data } = await axiosInstance.get('/user/info');
    return data;
  },
};
