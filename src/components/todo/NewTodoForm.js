import styled from "@emotion/styled";
import { useState } from "react";
import { useTodos } from "../../context/TodoProvider";

const NewTodoForm = (props) => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
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

const Input = styled.input`
  width: 332px;
  height: 32px;
  padding: 4px 6px;
  border-radius: 8px;
  border: 2px solid black;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  width: 60px;
  height: 32px;
  padding: 4px 6px;
  margin-left: 8px;
  color: white;
  border-radius: 8px;
  border: none;
  background-color: black;
  box-sizing: border-box;
`;
