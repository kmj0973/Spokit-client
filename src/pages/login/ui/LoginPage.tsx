import KakaoLoginButton from '@/features/auth/ui/KakaoLoinButton';
import LogoutButton from '@/features/auth/ui/LogoutButton';

export const LoginPage = () => {
  return (
    <div>
      <div>로그인 페이지</div>
      <KakaoLoginButton />
      <LogoutButton />
    </div>
  );
};
