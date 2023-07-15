import { createContext, useContext, useReducer } from "react";

import { todoData } from "../interfaces/todo";
import todoReducer from "../utils/todoReducer";

interface ITodoProviderProps {
  children: React.ReactNode;
  initialData: todoData[];
  handleCreateTodo: Function;
  handleDeleteTodo: Function;
  handleUpdateTodo: Function;
}

interface ITodoDispatchContext {
  onTodoCreate: (content: string) => void;
  onTodoUpdate: (todo: todoData) => void;
  onTodoRemove: (id: string) => void;
}

interface ITodoContext {
  todos: todoData[];
}

const TodoContext = createContext<ITodoContext>({} as ITodoContext);
const TodoDispatchContext = createContext<ITodoDispatchContext>(
  {} as ITodoDispatchContext
);

export const useTodoContext = () => useContext(TodoContext);
export const useTodoDispatchContext = () => useContext(TodoDispatchContext);

const TodoProvider = ({
  children,
  initialData,
  handleCreateTodo,
  handleDeleteTodo,
  handleUpdateTodo,
}: ITodoProviderProps) => {
  const [todos, dispatch] = useReducer(todoReducer, initialData);

  const onTodoCreate = async (inputValue: string) => {
    try {
      const data = await handleCreateTodo(inputValue);

      dispatch({
        type: "Create",
        ...data,
      });
    } catch (e) {
      alert(e);
    }
  };

  const onTodoUpdate = async (value: todoData) => {
    try {
      await handleUpdateTodo(value);

      dispatch({
        type: "Update",
        id: value.id,
        todo: value.todo,
        isCompleted: value.isCompleted,
      });
    } catch (e) {
      alert(e);
    }
  };

  const onTodoRemove = async (id: string) => {
    try {
      await handleDeleteTodo(id);

      dispatch({
        type: "Remove",
        id,
      });
    } catch (e) {
      alert(e);
    }
  };

  return (
    <TodoDispatchContext.Provider
      value={{ onTodoCreate, onTodoUpdate, onTodoRemove }}>
      <TodoContext.Provider value={{ todos }}>{children}</TodoContext.Provider>
    </TodoDispatchContext.Provider>
  );
};

export default TodoProvider;
