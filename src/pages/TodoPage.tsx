import {
  Fragment,
  useEffect,
  useLayoutEffect,
  useReducer,
  useState,
} from "react";

import {
  deleteTodos,
  getTodos,
  postCreateTodos,
  updateTodos,
} from "../apis/todos";
import { Header } from "../components/base";
import NewTodoForm from "../components/todo/NewTodoForm";
import TodoList from "../components/todo/TodoList";
import TodoProvider, { useTodoDispatchContext } from "../context/TodoProvider";
import { todoData } from "../interfaces/todo";

const TodoPage = () => {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    const initData = async () => {
      try {
        const data = await getTodos();

        setInitialData(data);
      } catch (e) {
        return [];
      }
    };

    initData();
  }, []);

  // const handleCreateTodo = async (inputValue: string) => {
  //   try {
  //     const data = await postCreateTodos(inputValue);
  //     return data;
  //   } catch (e) {
  //     alert(e);
  //   }
  // };

  // const handleUpdateTodo = async (value: todoData) => {
  //   try {
  //     await updateTodos(value);
  //   } catch (e) {
  //     alert(e);
  //   }
  // };

  // const handleDeleteTodo = async (id: string) => {
  //   try {
  //     await deleteTodos(id);
  //   } catch (e) {
  //     alert(e);
  //   }
  // };

  return (
    <Fragment>
      <Header>Todo Page</Header>
      <TodoProvider
        initialData={initialData}
        handleCreateTodo={postCreateTodos}
        handleUpdateTodo={updateTodos}
        handleDeleteTodo={deleteTodos}>
        <main>
          <NewTodoForm />
          <TodoList />
        </main>
      </TodoProvider>
    </Fragment>
  );
};

export default TodoPage;
