import { todoData } from "../interfaces/todo";

interface IAction {
  type: string;
  id?: string;
  todo?: string;
  isCompleted?: boolean;
  initialData?: todoData[];
}

const todoReducer = (todos: todoData[], action: IAction): todoData[] => {
  switch (action.type) {
    case "Init": {
      return action.initialData as todoData[];
    }
    case "Create": {
      return [
        ...todos,
        {
          id: action.id || "DEFAULT_ID",
          todo: action.todo || "",
          isCompleted: action.isCompleted || false,
        },
      ];
    }
    case "Update": {
      return todos.map((todo: todoData) => {
        if (todo.id !== action.id) return todo;

        return {
          id: todo.id,
          todo: action.todo || todo.todo,
          isCompleted:
            action.isCompleted === undefined
              ? todo.isCompleted
              : action.isCompleted,
        };
      });
    }
    case "Remove": {
      return todos.filter((todo: todoData) => todo.id !== action.id);
    }
    default: {
      throw new Error("Unknown action type");
    }
  }
};

export default todoReducer;
