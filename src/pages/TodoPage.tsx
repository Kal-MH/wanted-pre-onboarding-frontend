import { Fragment } from "react";

import { deleteTodos, postCreateTodos, updateTodos } from "../apis/todos";
import { Header } from "../components/base";
import NewTodoForm from "../components/todo/NewTodoForm";
import TodoList from "../components/todo/TodoList";
import TodoProvider from "../context/TodoProvider";
import { useGetTodos } from "../hooks/useTodos";

const TodoPage = () => {
  const { data: initialData } = useGetTodos();

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
