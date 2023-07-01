import { Fragment, ReducerState, useEffect, useReducer, useState } from "react";

import {
  deleteTodos,
  getTodos,
  postCreateTodos,
  updateTodos,
} from "../apis/todos";
import { Header } from "../components/base";
import NewTodoForm from "../components/todo/NewTodoForm";
import TodoList from "../components/todo/TodoList";
import { todoData } from "../interfaces/todo";
import todoReducer from "../utils/todoReducer";

const TodoPage = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    const initTodos = async () => {
      const data = await getTodos();

      dispatch({
        type: "Init",
        initialData: data,
      });
    };

    initTodos();
  }, []);

  const onTodoCreate = async (inputValue: string) => {
    try {
      dispatch({
        type: "Create",
        todo: inputValue,
      });
    } catch (e) {
      alert(e);
    }
  };

  const onTodoUpdate = async (value: todoData) => {
    try {
      dispatch({
        type: "Update",
        id: value.id,
        todo: value.todo,
        isCompleted: value.isCompleted,
      });
    } catch (e) {
      alert(e);
    }
  };

  const onTodoRemove = async (id: string) => {
    try {
      dispatch({
        type: "Remove",
        id,
      });
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Fragment>
      <Header>Todo Page</Header>
      <main>
        <NewTodoForm onTodoCreate={onTodoCreate} />
        <TodoList
          todos={todos}
          onTodoUpdate={onTodoUpdate}
          onTodoRemove={onTodoRemove}
        />
      </main>
    </Fragment>
  );
};

export default TodoPage;
