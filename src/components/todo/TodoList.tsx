import styled from "@emotion/styled";

import { todoData } from "../../interfaces/todo";
import Todo from "./Todo";

interface ITodoListProps {
  todos: todoData[];
  onToggleUpdate: (value: Pick<todoData, "id" & "isCompleted">) => void;
  onContentUpdate: (value: todoData) => void;
  onRemoveClick: (value: Pick<todoData, "id">) => void;
}

const TodoList = ({
  todos,
  onToggleUpdate,
  onContentUpdate,
  onRemoveClick,
}: ITodoListProps) => {
  return (
    <S.UnorderedList>
      {(todos || []).map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          todo={todo.todo}
          isCompleted={todo.isCompleted}
          onToggleUpdate={onToggleUpdate}
          onContentUpdate={onContentUpdate}
          onRemoveClick={onRemoveClick}
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
