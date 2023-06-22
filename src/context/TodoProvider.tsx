import { createContext, useContext, useEffect } from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import { todoData } from "../interfaces/todo";
import { STORAGE_KEYS } from "../utils/constants";

interface TodoProviderProps {
  children: React.ReactNode;
  handleGetTodo: Function;
  handleCreateTodo: Function;
  handleDeleteTodo: Function;
  handleUpdateTodo: Function;
}

interface TodoContextProps {
  todos: todoData[];
  addTodo: (content: string) => Promise<void>;
  updateTodo: (tood: todoData) => Promise<void>;
  removeTodo: (id: string) => Promise<void>;
}

const TodoContext = createContext({} as TodoContextProps);

export const useTodos = () => useContext(TodoContext);

const TodoProvider = ({
  children,
  handleGetTodo,
  handleCreateTodo,
  handleDeleteTodo,
  handleUpdateTodo,
}: TodoProviderProps) => {
  const [todos, setTodos] = useLocalStorage(
    STORAGE_KEYS.TODOS,
    [] as todoData[]
  );

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

  const updateTodo = async ({ id, todo, isCompleted }: todoData) => {
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
