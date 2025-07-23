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

export const createTodo = async (data: CreateTodoType): Promise<ApiResponse<Todo>> => {
  try {
    const res = await axios.post<ApiResponse<Todo>>('/api/schedule/todos', data);
    return res.data;
  } catch (e) {
    console.error(e);
    throw new Error('Todo 생성 실패');
  }
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

export const updateTodo = async (data: UpdateTodoType): Promise<ApiResponse<Todo>> => {
  try {
    const res = await axios.patch<ApiResponse<Todo>>(`/api/schedule/todos/${data.todoId}`, data);
    return res.data;
  } catch (e) {
    console.error(e);
    throw new Error('Todo 업데이트 실패');
  }
};

export const deleteTodo = async (todoId: number): Promise<ApiResponse<{ message: string }>> => {
  try {
    const res = await axios.delete<ApiResponse<{ message: string }>>(
      `/api/schedule/todos/${todoId}`,
    );
    return res.data;
  } catch (e) {
    console.error(e);
    throw new Error('Todo 삭제 실패');
  }
};

export const readTodos = async ({
  yearMonth,
  parentsId,
}: {
  yearMonth: string;
  parentsId: number;
}): Promise<ApiResponse<Todo[]>> => {
  try {
    const res = await axios.get<ApiResponse<Todo[]>>(
      `/api/schedule/todos/?yearMonth=${yearMonth}&parentsId=${parentsId}`,
    );
    return res.data;
  } catch (e) {
    console.error(e);
    throw new Error('Todo 목록 호출 실패');
  }
};
