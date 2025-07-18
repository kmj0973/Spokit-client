import { useQuery } from '@tanstack/react-query';
import { userApi } from '../api/userApi';

export const useUserQuery = () =>
  useQuery({
    queryKey: ['user'],
    queryFn: userApi.getUserInfo,
    staleTime: 1000 * 60 * 5, // 5분 캐싱
  });
