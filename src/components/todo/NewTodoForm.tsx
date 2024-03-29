import styled from "@emotion/styled";
import { ChangeEvent, FormEvent, useState } from "react";

import { useTodoDispatchContext } from "../../context/TodoProvider";
import { Button, Input } from "../base";

const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const { onTodoCreate } = useTodoDispatchContext();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onTodoCreate(inputValue);
    setInputValue("");
  };

  return (
    <S.Form onSubmit={handleFormSubmit}>
      <Input
        data-testid='new-todo-input'
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        autoFocus
      />
      <Button data-testid='new-todo-add-button'>Add</Button>
    </S.Form>
  );
};

export default NewTodoForm;

const S = {
  Form: styled.form`
    width: 400px;
  `,
};
