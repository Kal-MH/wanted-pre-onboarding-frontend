import { todoData } from "../../interfaces/todo";
import { Action } from "./types";

export const addTodo = (inputValue: string): Action => {
  return {
    type: "ADD_TODO",
    payload: {
      id: "0",
      todo: inputValue,
      isCompleted: false,
    },
  };
};

export const updateTodo = (value: todoData): Action => {
  return {
    type: "UPDATE_TODO",
    payload: {
      ...value,
    },
  };
};

export const removeTodo = (id: string): Action => {
  return {
    type: "REMOVE_TODO",
    payload: {
      id,
      todo: "",
      isCompleted: false,
    },
  };
};
