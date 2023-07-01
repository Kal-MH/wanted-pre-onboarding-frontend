import styled from "@emotion/styled";

import { todoData } from "../../interfaces/todo";
import Todo from "./Todo";

interface ITodoListProps {
  todos: todoData[];
  onTodoUpdate: (value: todoData) => void;
  onTodoRemove: (id: string) => void;
}

const TodoList = ({ todos, onTodoUpdate, onTodoRemove }: ITodoListProps) => {
  return (
    <S.UnorderedList>
      {(todos || []).map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          todo={todo.todo}
          isCompleted={todo.isCompleted}
          onTodoUpdate={onTodoUpdate}
          onTodoRemove={onTodoRemove}
        />
      ))}
    </S.UnorderedList>
  );
};

export default TodoList;

const S = {
  UnorderedList: styled.ul`
    width: 400px;
    margin-top: 10px 0;
    padding: 0px;

    & > li {
      &:not(:first-of-type) {
        margin-top: 8px;
      }
    }
  `,
};
