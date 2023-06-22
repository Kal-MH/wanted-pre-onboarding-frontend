import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  deleteTodos,
  getTodos,
  postCreateTodos,
  updateTodos,
} from "../apis/todos";
import NewTodoForm from "../components/todo/NewTodoForm";
import TodoList from "../components/todo/TodoList";
import TodoProvider from "../context/TodoProvider";
import useLocalStorage from "../hooks/useLocalStorage";
import { todoData } from "../interfaces/todo";

const SIGNIN = "/signin";

const Todo = () => {
  const navigate = useNavigate();
  const [token] = useLocalStorage("token", "");

  const handleCreateTodo = useCallback(async (content: string) => {
    try {
      const data = await postCreateTodos(content);

      return data;
    } catch (e) {
      alert(e);
    }
  }, []);

  const handleDeleteTodo = useCallback(async (id: string) => {
    try {
      await deleteTodos(id);
    } catch (e) {
      alert(e);
    }
  }, []);

  const handleUpdateTodo = useCallback(async (props: todoData) => {
    try {
      await updateTodos(props);
    } catch (e) {
      alert(e);
    }
  }, []);

  const handleGetTodo = useCallback(async () => {
    try {
      const data = await getTodos();

      return data;
    } catch (e) {
      return [];
    }
  }, []);

  useEffect(() => {
    if (!token) {
      navigate(SIGNIN);
    }
  }, [token, navigate]);

  return (
    <TodoProvider
      handleGetTodo={handleGetTodo}
      handleCreateTodo={handleCreateTodo}
      handleDeleteTodo={handleDeleteTodo}
      handleUpdateTodo={handleUpdateTodo}>
      <NewTodoForm />
      <TodoList />
    </TodoProvider>
  );
};

export default Todo;
