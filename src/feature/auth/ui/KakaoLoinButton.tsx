import { Button } from '@/shared/ui/shadcn/components/button';
import { useAuthStore } from '@/shared/store/useAuthStore';
import { userApi } from '@/entities/user/api/userApi';

export default function KakaoLoginButton() {
  const setUser = useAuthStore((state) => state.setUser);

  const handleKakaoLogin = async () => {
    try {
      const data = await userApi.getUserInfo();
      setUser(data);
      console.log(useAuthStore.getState().user);
    } catch {
      console.log('사용자 정보 가져오기 실패');
    }
    // window.location.href = '/oauth2/authorization/kakao';
  };

  return (
    <>
      <Button onClick={handleKakaoLogin}>카카오 로그인</Button>
    </>
  );
}
