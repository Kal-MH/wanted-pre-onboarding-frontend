import { createContext, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TodoContext = createContext();

export const useTodos = () => useContext(TodoContext);

const TodoProvider = ({
  children,
  handleGetTodo,
  handleCreateTodo,
  handleDeleteTodo,
  handleUpdateTodo,
}) => {
  const [todos, setTodos] = useLocalStorage("todos", []);

  useEffect(() => {
    const initTodos = async () => {
      const data = await handleGetTodo();

      setTodos(data);
    };

    initTodos();
  }, []);

  const addTodo = async (content) => {
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

  const updateTodo = async ({ id, todo, isCompleted }) => {
    const filteredItem = todos.filter((item) => item.id === id)[0];
    const config = {
      id,
      todo: todo ? todo : filteredItem.todo,
      isCompleted:
        isCompleted === undefined ? filteredItem.isCompleted : isCompleted,
    };

    await handleUpdateTodo({ ...config });
    setTodos(todos.map((item) => (item.id === id ? { ...config } : item)));
  };

  const removeTodo = async (id) => {
    await handleDeleteTodo(id);
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
