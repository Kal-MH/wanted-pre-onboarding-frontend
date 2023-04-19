import { useNavigate } from "react-router-dom";
import NewTodoForm from "../components/todo/NewTodoForm";
import TodoList from "../components/todo/TodoList";
import useLocalStorage from "../hooks/useLocalStorage";
import { useEffect } from "react";

const Todo = () => {
  const navigate = useNavigate();
  const [storedValue] = useLocalStorage("token", "");

  useEffect(() => {
    if (!storedValue) {
      navigate("/signin");
    }
  }, []);

  return (
    <div>
      <NewTodoForm />
      <TodoList />
    </div>
  );
};

export default Todo;
