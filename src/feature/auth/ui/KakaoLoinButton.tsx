import { Button } from '@/shared/ui/shadcn/components/button';
import { useKakaoLogin } from '../hooks/useKakaoLogin';

export default function KakaoLoginButton() {
  const { handleLogin } = useKakaoLogin();

  return (
    <>
      <Button onClick={handleLogin}>카카오 로그인</Button>
    </>
  );
}
