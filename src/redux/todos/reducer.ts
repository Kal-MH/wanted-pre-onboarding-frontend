import { todoData } from "../../interfaces/todo";
import { Action } from "./types";

export const todoReducer = (state: todoData[] = [], action: Action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo = action.payload;
      return [
        ...state,
        {
          id: newTodo.id || "DEFAULT_ID",
          todo: newTodo.todo || "",
          isCompleted: newTodo.isCompleted || false,
        },
      ];
    }
    case "UPDATE_TODO": {
      const updatedTodo = action.payload;
      return state.map((todo: todoData) =>
        todo.id !== updatedTodo.id ? todo : updatedTodo
      );
    }
    case "REMOVE_TODO": {
      const removedTodo = action.payload;
      return state.filter((todo: todoData) => todo.id !== removedTodo.id);
    }
    default: {
      return state;
    }
  }
};
