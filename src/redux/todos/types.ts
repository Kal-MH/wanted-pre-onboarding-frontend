import { todoData } from "../../interfaces/todo";

export type ActionType = "ADD_TODO" | "UPDATE_TODO" | "REMOVE_TODO";
export type Action = { type: ActionType; payload: todoData };
