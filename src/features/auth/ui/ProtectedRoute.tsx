import { useAuthStore } from '@/shared/store/useAuthStore';
import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const accessToken = useAuthStore((state) => state.accessToken);

  if (!accessToken) return <Navigate to='/login' replace />;

  return children;
}
