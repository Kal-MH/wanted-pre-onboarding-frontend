import styled from "@emotion/styled";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { RootType, store } from "../../redux";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useSelector((store: RootType) => store.todoReducer);

  return (
    <S.UnorderedList>
      {(todos || []).map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          todo={todo.todo}
          isCompleted={todo.isCompleted}
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
