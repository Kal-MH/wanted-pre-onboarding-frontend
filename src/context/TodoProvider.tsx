import { createContext, useContext, useEffect } from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import { todoData } from "../interfaces/todo";
import { STORAGE_KEYS } from "../utils/constants";

interface ITodoProviderProps {
  children: React.ReactNode;
  handleGetTodo: Function;
  handleCreateTodo: Function;
  handleDeleteTodo: Function;
  handleUpdateTodo: Function;
}

interface ITodoContext {
  todos: todoData[];
  addTodo: (content: string) => void;
  updateTodo: (todo: todoData) => void;
  removeTodo: (id: string) => void;
}

const TodoContext = createContext<ITodoContext>({} as ITodoContext);

export const useTodos = () => useContext(TodoContext);

const TodoProvider = ({
  children,
  handleGetTodo,
  handleCreateTodo,
  handleDeleteTodo,
  handleUpdateTodo,
}: ITodoProviderProps) => {
  const [todos, setTodos] = useLocalStorage<todoData[]>(STORAGE_KEYS.TODOS, []);

  useEffect(() => {
    const initTodos = async () => {
      const data = await handleGetTodo();

      setTodos(data);
    };

    initTodos();
  }, []);

  const addTodo = async (content: string) => {
    const { id, isCompleted, todo } = await handleCreateTodo(content);

    setTodos([
      ...todos,
      {
        id,
        todo,
        isCompleted,
      },
    ]);
  };

  const updateTodo = async ({ id, todo = "", isCompleted }: todoData) => {
    const filteredItem = todos.filter((item: todoData) => item.id === id)[0];
    const config = {
      id,
      todo: todo ? todo : filteredItem.todo,
      isCompleted:
        isCompleted === undefined ? filteredItem.isCompleted : isCompleted,
    };

    await handleUpdateTodo({ ...config });
    setTodos(
      todos.map((item: todoData) => (item.id === id ? { ...config } : item))
    );
  };

  const removeTodo = async (id: string) => {
    await handleDeleteTodo(id);
    setTodos(todos.filter((item: todoData) => item.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
