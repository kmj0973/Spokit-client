import { getErrorMessage } from '@/shared/lib/getErrorMessage';
import type { ApiResponse } from '@/shared/model/types';
import axios from 'axios';

type Todo = {
  id: number;
  parentsId: number;
  text: string;
  startTime: string;
  endTime: string;
  member: string[];
  color: string;
  isChecked: boolean;
  createdBy: string;
};

type CreateTodoType = {
  parentsId: number;
  text: string;
  startTime: string;
  endTime: string;
  member: string[];
  color: string;
  isChecked: boolean;
  createdBy: string;
};

export const createTodo = async (data: CreateTodoType): Promise<Todo> => {
  const res = await axios.post<ApiResponse<Todo>>('/api/schedule/todos', data);

  if (!res.data.success) {
    const message = getErrorMessage(res.data.status);
    throw new Error(message);
  }

  return res.data.data;
};

type UpdateTodoType = {
  todoId: number;
  text: string;
  startTime: string;
  endTime: string;
  member: string[];
  color: string;
  isChecked: boolean;
  createdBy: string;
};

export const updateTodo = async (data: UpdateTodoType): Promise<Todo> => {
  const res = await axios.patch<ApiResponse<Todo>>(`/api/schedule/todos/${data.todoId}`, data);

  if (!res.data.success) {
    const message = getErrorMessage(res.data.status);
    throw new Error(message);
  }

  return res.data.data;
};

export const deleteTodo = async (todoId: number): Promise<{ message: string }> => {
  const res = await axios.delete<ApiResponse<{ message: string }>>(`/api/schedule/todos/${todoId}`);

  if (!res.data.success) {
    const message = getErrorMessage(res.data.status);
    throw new Error(message);
  }

  return res.data.data;
};

export const readTodos = async ({
  yearMonth,
  parentsId,
}: {
  yearMonth: string;
  parentsId: number;
}): Promise<Todo[]> => {
  const res = await axios.get<ApiResponse<Todo[]>>(
    `/api/schedule/todos/?yearMonth=${yearMonth}&parentsId=${parentsId}`,
  );

  if (!res.data.success) {
    const message = getErrorMessage(res.data.status);
    throw new Error(message);
  }

  return res.data.data;
};
