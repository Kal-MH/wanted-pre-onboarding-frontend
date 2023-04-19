import { useNavigate } from "react-router-dom";
import NewTodoForm from "../components/todo/NewTodoForm";
import TodoList from "../components/todo/TodoList";
import useLocalStorage from "../hooks/useLocalStorage";
import { useCallback, useEffect } from "react";
import {
  deleteTodos,
  getTodos,
  postCreateTodos,
  updateTodos,
} from "../apis/todos";
import TodoProvider from "../context/TodoProvider";

const Todo = () => {
  const navigate = useNavigate();
  const [token] = useLocalStorage("token", "");

  const handleCreateTodo = useCallback(async (content) => {
    try {
      const data = await postCreateTodos(content);

      return data;
    } catch (e) {
      alert(e);
    }
  }, []);

  const handleDeleteTodo = useCallback(async (id) => {
    try {
      await deleteTodos(id);
    } catch (e) {
      alert(e);
    }
  }, []);

  const handleUpdateTodo = useCallback(async (props) => {
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
      navigate("/signin");
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
