import { Button } from '@/shared/ui/shadcn/components/button';
import { logout } from '../api/requests';
import { useAuthStore } from '@/shared/store/useAuthStore';

export default function LogoutButton() {
  const setLogout = useAuthStore((state) => state.setLogout);
  const handleLogout = async () => {
    try {
      await logout();
      setLogout();
      console.log(useAuthStore.getState().user);

      console.log('로그아웃되었습니다.');
    } catch {
      console.log('로그아웃 실패');
    }
  };

  return <Button onClick={handleLogout}>로그아웃</Button>;
}
