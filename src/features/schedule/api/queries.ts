import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../model/constants';
import { createTodo, updateTodo, deleteTodo, readTodos } from './requests';
import type { ReadTodosParams } from './types';

// Todo 목록 조회
export const useReadTodos = (params: ReadTodosParams) => {
  return useQuery({
    queryKey: queryKeys.todos.list(params),
    queryFn: () => readTodos(params),
  });
};

// Todo 생성
export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      // 모든 todos 쿼리 무효화
      queryClient.invalidateQueries({ queryKey: queryKeys.todos.all });
    },
    onError: (error: Error) => {
      console.error('Todo 생성 실패:', error.message);
    },
  });
};

// Todo 수정
export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      // 모든 todos 쿼리 무효화
      queryClient.invalidateQueries({ queryKey: queryKeys.todos.all });
    },
    onError: (error: Error) => {
      console.error('Todo 수정 실패:', error.message);
    },
  });
};

// Todo 삭제
export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      // 모든 todos 쿼리 무효화
      queryClient.invalidateQueries({ queryKey: queryKeys.todos.all });
    },
    onError: (error: Error) => {
      console.error('Todo 삭제 실패:', error.message);
    },
  });
};
