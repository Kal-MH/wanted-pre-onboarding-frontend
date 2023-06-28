import styled from "@emotion/styled";

import { Button, Input } from "../base";

const NewTodoForm = () => {
  return (
    <Form>
      <Input data-testid='new-todo-input' type='text' />
      <Button data-testid='new-todo-add-button'>Add</Button>
    </Form>
  );
};

export default NewTodoForm;

const Form = styled.form`
  width: 400px;
`;
