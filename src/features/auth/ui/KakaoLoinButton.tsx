import { Button } from '@/shared/ui/shadcn/components/button';
import { useAuthStore } from '@/shared/store/useAuthStore';
import { getCurrentUser } from '@/entities/user/api/requests';
import { useNavigate } from 'react-router';

export default function KakaoLoginButton() {
  const setUser = useAuthStore((state) => state.setUser);
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const navigate = useNavigate();

  const handleKakaoLogin = async () => {
    try {
      const data = await getCurrentUser();
      setUser({ id: data.id, nickname: data.nickname });
      setAccessToken(data.accessToken);
      navigate('/calendar');
      console.log(useAuthStore.getState().accessToken);
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
