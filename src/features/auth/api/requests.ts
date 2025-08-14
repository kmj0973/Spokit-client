import { axiosInstance } from '@/shared/lib/axiosInstance';

export const logout = async (): Promise<void> => {
  await axiosInstance.post('/logout');
};
