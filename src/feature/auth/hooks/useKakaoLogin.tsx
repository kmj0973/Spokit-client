import { useAuthStore } from '@/shared/store/useAuthStore';
import { loginWithKakao } from '../api/authApi';

export const useKakaoLogin = () => {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const setUser = useAuthStore((state) => state.setUser);

  const handleLogin = async () => {
    const data = await loginWithKakao();

    setAccessToken(data.accessToken);
    setUser(data.user);
  };

  return { handleLogin };
};
