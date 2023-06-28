import styled from "@emotion/styled";

import Todo from "./Todo";

const todos = [
  { id: "12990", todo: "hello", isCompleted: false, userId: 246 },
  { id: "12991", todo: "hello1", isCompleted: false, userId: 247 },
  { id: "12992", todo: "hello2", isCompleted: false, userId: 248 },
];

const TodoList = () => {
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
