import { getErrorMessage } from '@/shared/lib/getErrorMessage';
import type { ApiResponse } from '@/shared/model/types';
import axios from 'axios';
import type { Todo, PostTodoType, ReadTodosParams } from './types';

/**
 * 새로운 Todo를 생성합니다.
 * @param {CreateTodoType} data - 생성할 Todo 데이터
 * @returns {Promise<Todo>} 생성된 Todo 객체
 * @throws {Error} API 요청 실패 시 에러 메시지와 함께 에러를 발생시킵니다.
 */
export const createTodo = async (data: PostTodoType): Promise<Todo> => {
  const res = await axios.post<ApiResponse<Todo>>('/api/schedule/todos', data);

  if (!res.data.success) {
    const message = getErrorMessage(res.data.status);
    throw new Error(message);
  }

  return res.data.data;
};

/**
 * 기존 Todo를 수정합니다.
 * @param {UpdateTodoType} data - 수정할 Todo 데이터 (todoId 포함)
 * @returns {Promise<Todo>} 수정된 Todo 객체
 * @throws {Error} API 요청 실패 시 에러 메시지와 함께 에러를 발생시킵니다.
 */
export const updateTodo = async (data: PostTodoType): Promise<Todo> => {
  const res = await axios.patch<ApiResponse<Todo>>(`/api/schedule/todos/${data.parentsId}`, data);

  if (!res.data.success) {
    const message = getErrorMessage(res.data.status);
    throw new Error(message);
  }

  return res.data.data;
};

/**
 * Todo를 삭제합니다.
 * @param {number} todoId - 삭제할 Todo의 ID
 * @returns {Promise<{ message: string }>} 삭제 결과 메시지
 * @throws {Error} API 요청 실패 시 에러 메시지와 함께 에러를 발생시킵니다.
 */
export const deleteTodo = async (todoId: number): Promise<{ message: string }> => {
  const res = await axios.delete<ApiResponse<{ message: string }>>(`/api/schedule/todos/${todoId}`);

  if (!res.data.success) {
    const message = getErrorMessage(res.data.status);
    throw new Error(message);
  }

  return res.data.data;
};

/**
 * 특정 년월과 부모 ID에 해당하는 Todo 목록을 조회합니다.
 * @param {ReadTodosParams} params - 조회 조건
 * @param {string} params.yearMonth - 조회할 년월 (YYYY-MM 형식)
 * @param {number} params.parentsId - 부모 ID
 * @returns {Promise<Todo[]>} Todo 목록 배열
 * @throws {Error} API 요청 실패 시 에러 메시지와 함께 에러를 발생시킵니다.
 */
export const readTodos = async ({ yearMonth, parentsId }: ReadTodosParams): Promise<Todo[]> => {
  const res = await axios.get<ApiResponse<Todo[]>>(
    `/api/schedule/todos/?yearMonth=${yearMonth}&parentsId=${parentsId}`,
  );

  if (!res.data.success) {
    const message = getErrorMessage(res.data.status);
    throw new Error(message);
  }

  return res.data.data;
};
