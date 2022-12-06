import { atom } from "recoil";

export interface Todo {
  todoId: string,
  name: string;
  completed: boolean;
}

const initialState: Todo[] = [];

export const todosState = atom({
  key: 'todos',
  default: initialState,
});