import { useUserQuery } from '@/entities/user/model/useUserQuery';
import type { ReactNode } from 'react';
import { Navigate } from 'react-router';

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { data: user, isLoading } = useUserQuery();

  if (isLoading) return <p>로딩 중...</p>;
  if (!user.accessToken) return <Navigate to='/login' replace />;

  return <>{children}</>;
}
