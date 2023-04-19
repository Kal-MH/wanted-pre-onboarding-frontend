import { createContext, useContext } from "react";
import { v4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

const TodoContext = createContext();

export const useTodos = () => useContext(TodoContext);

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage("todos", []);

  const addTodo = (content) => {
    setTodos([
      ...todos,
      {
        id: v4(),
        content,
        complete: false,
      },
    ]);
  };

  const updateTodo = (id, content) => {
    setTodos(
      todos.map((item) => (item.id === id ? { ...item, content } : item))
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const updateTodoToggle = (id, status) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, complete: status } : item
      )
    );
  };
  return (
    <TodoContext.Provider
      value={{ todos, addTodo, updateTodo, removeTodo, updateTodoToggle }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
