export type Todo = {
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
// create와 update가 같은 타입을 요구하기 때문에 Post로 명했습니다.
export type PostTodoType = {
  parentsId: number;
  text: string;
  startTime: string;
  endTime: string;
  member: string[];
  color: string;
  isChecked: boolean;
  createdBy: string;
};

export type ReadTodosParams = {
  yearMonth: string;
  parentsId: number;
};
