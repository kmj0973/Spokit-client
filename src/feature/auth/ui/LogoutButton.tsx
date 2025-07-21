import { Button } from '@/shared/ui/shadcn/components/button';
import { authApi } from '../api/authApi';
import { useAuthStore } from '@/shared/store/useAuthStore';

export default function LogoutButton() {
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    try {
      await authApi.logout();
      logout();
      console.log('로그아웃되었습니다.');
    } catch {
      console.log('로그아웃 실패');
    }
  };

  return <Button onClick={handleLogout}>로그아웃</Button>;
}
