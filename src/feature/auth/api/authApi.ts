import { axiosInstance } from '@/shared/lib/axiosInstance';

export const loginWithKakao = async () => {
  const res = await axiosInstance.post('/auth/kakao/login');

  console.log(res.data);
  return res.data;
};

export const logout = async () => {
  await axiosInstance.post('/auth/logout');
};
