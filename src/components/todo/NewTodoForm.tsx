import styled from "@emotion/styled";
import { useState } from "react";

import { useTodos } from "../../context/TodoProvider";
import { Button as SubmitButton, Input } from "../base";

const NewTodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addTodo(todo);
    setTodo("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        data-testid='new-todo-input'
        type='text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <SubmitButton data-testid='new-todo-add-button'>Add</SubmitButton>
    </Form>
  );
};

export default NewTodoForm;

const Form = styled.form`
  width: 400px;
`;
