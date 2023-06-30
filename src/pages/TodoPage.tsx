import { Fragment, useEffect, useState } from "react";

import { getTodos } from "../apis/todos";
import { Header } from "../components/base";
import NewTodoForm from "../components/todo/NewTodoForm";
import TodoList from "../components/todo/TodoList";
import { todoData } from "../interfaces/todo";

let id = 12993;

const TodoPage = () => {
  const [todos, setTodos] = useState([
    { id: "12990", todo: "hello", isCompleted: false },
    { id: "12991", todo: "hello1", isCompleted: false },
    { id: "12992", todo: "hello2", isCompleted: false },
  ] as todoData[]);

  useEffect(() => {
    const initTodos = async () => {
      const data = await getTodos();

      setTodos(data);
    };

    initTodos();
  }, []);

  const onTodoCreate = (inputValue: string) => {
    //Todo: button submit
    // 새로운 todo를 만들고, todoList를 가져와서 TodoList 컴포넌트에 넣어주기
    setTodos([
      ...todos,
      { id: id++ + "", todo: inputValue, isCompleted: false },
    ]);
  };

  const onToggleUpdate = (value: Pick<todoData, "id" & "isCompleted">) => {
    console.log(value);
  };

  const onContentUpdate = (value: Pick<todoData, "id" & "todo">) => {
    console.log(value);
  };

  const onRemoveClick = async (id: Pick<todoData, "id">) => {
    console.log(id);
  };

  return (
    <Fragment>
      <Header>Todo Page</Header>
      <main>
        <NewTodoForm onTodoCreate={onTodoCreate} />
        <TodoList
          todos={todos}
          onToggleUpdate={onToggleUpdate}
          onContentUpdate={onContentUpdate}
          onRemoveClick={onRemoveClick}
        />
      </main>
    </Fragment>
  );
};

export default TodoPage;
