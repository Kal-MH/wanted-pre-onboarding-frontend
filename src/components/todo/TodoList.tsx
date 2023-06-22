import styled from "@emotion/styled";

import { useTodos } from "../../context/TodoProvider";
import Todo from "./Todo";

const TodoList = () => {
  const { todos } = useTodos();

  return (
    <UnorderedList>
      {(todos || []).map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          todo={todo.todo}
          isCompleted={todo.isCompleted}
        />
      ))}
    </UnorderedList>
  );
};

export default TodoList;

const UnorderedList = styled.ul`
  width: 400px;
  margin-top: 10px 0;
  padding: 0px;

  & > li {
    &:not(:first-of-type) {
      margin-top: 8px;
    }
  }
`;
