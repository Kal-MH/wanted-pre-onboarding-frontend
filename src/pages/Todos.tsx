import { Fragment, useState } from "react";

import { deleteTodos } from "../apis/todos";
import NewTodoForm from "../components/todo/NewTodoForm";
import TodoList from "../components/todo/TodoList";
import { todoData } from "../interfaces/todo";

let id = 12993;

const Todos = () => {
  const [todos, setTodos] = useState([
    { id: "12990", todo: "hello", isCompleted: false, userId: 246 },
    { id: "12991", todo: "hello1", isCompleted: false, userId: 247 },
    { id: "12992", todo: "hello2", isCompleted: false, userId: 248 },
  ] as todoData[]);

  const onTodoCreate = (inputValue: string) => {
    //Todo: button submit
    // 새로운 todo를 만들고, todoList를 가져와서 TodoList 컴포넌트에 넣어주기
    setTodos([
      ...todos,
      { id: id++ + "", todo: inputValue, isCompleted: false, userId: 246 },
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
      <NewTodoForm onTodoCreate={onTodoCreate} />
      <TodoList
        todos={todos}
        onToggleUpdate={onToggleUpdate}
        onContentUpdate={onContentUpdate}
        onRemoveClick={onRemoveClick}
      />
    </Fragment>
  );
};

export default Todos;
