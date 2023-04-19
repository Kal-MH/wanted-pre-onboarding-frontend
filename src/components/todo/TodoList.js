import styled from "@emotion/styled";
import { useTodos } from "../../context/TodoProvider";
import Todo from "./Todo";

const TodoList = (props) => {
  const { todos } = useTodos();

  return (
    <UnorderedList {...props}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          content={todo.content}
          complete={todo.complete}
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
