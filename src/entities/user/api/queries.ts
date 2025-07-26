import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from './requests';
import { queryKeys } from '../model/constants';

export const useUserQuery = () => {
  return useQuery({
    queryKey: queryKeys.user.me(),
    queryFn: getCurrentUser,
    staleTime: 1000 * 60 * 5, // 5분 캐싱
    retry: false,
  });
};
