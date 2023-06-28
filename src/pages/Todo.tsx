import { Fragment } from "react";

import NewTodoForm from "../components/todo/NewTodoForm";
import TodoList from "../components/todo/TodoList";

const Todo = () => {
  return (
    <Fragment>
      <NewTodoForm />
      <TodoList />
    </Fragment>
  );
};

export default Todo;
