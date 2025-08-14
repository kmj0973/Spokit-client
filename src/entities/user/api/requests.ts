import { axiosInstance } from '@/shared/lib/axiosInstance';
import type { User } from './types';

export const getCurrentUser = async (): Promise<User> => {
  const res = await axiosInstance.get('/user/info');
  return res.data;
};
