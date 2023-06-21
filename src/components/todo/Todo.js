import styled from "@emotion/styled";
import { useState } from "react";

import { useTodos } from "../../context/TodoProvider";
import Toggle from "../base/Toggle";

const Todo = ({ id, todo, isCompleted, ...props }) => {
  const { updateTodo, removeTodo } = useTodos();
  const [updateContent, setUpdateContent] = useState(todo);
  const [updateFlag, setUpdateFlag] = useState(false);

  const handleUpdateClick = (e) => {
    e.preventDefault();
    setUpdateFlag((prev) => !prev);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setUpdateContent(todo);
    setUpdateFlag((prev) => !prev);
  };

  const handleUpdateSubmitClick = (e) => {
    e.preventDefault();

    if (updateFlag) {
      updateTodo({ id, todo: updateContent });
    }

    setUpdateFlag((prev) => !prev);
  };

  return (
    <ListItem {...props}>
      <Toggle
        on={isCompleted}
        onChange={(e) => updateTodo({ id, isCompleted: e.target.checked })}
      />
      {updateFlag ? (
        <div>
          <input
            data-testid='modify-input'
            type='text'
            value={updateContent}
            onChange={(e) => setUpdateContent(e.target.value)}
          />
          <Button
            data-testid='submit-button'
            color='blueviolet'
            onClick={handleUpdateSubmitClick}>
            Submit
          </Button>
          <Button
            data-testid='cancel-button'
            color='red'
            onClick={handleCancelClick}>
            Cancel
          </Button>
        </div>
      ) : (
        <div>
          <Content complete={isCompleted}>{todo}</Content>
          <Button
            data-testid='modify-button'
            color='blueviolet'
            onClick={handleUpdateClick}>
            Update
          </Button>
          <Button
            data-testid='delete-button'
            color='red'
            onClick={() => removeTodo(id)}>
            Remove
          </Button>
        </div>
      )}
    </ListItem>
  );
};

export default Todo;

const ListItem = styled.li`
  display: flex;
  width: 400px;
  height: 40px;
  align-items: center;
  padding: 0 8px;
  box-sizing: border-box;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  list-style: none;

  & > div {
    display: flex;
    flex: 1;
    align-items: center;
    padding: 0 5px;
  }
`;

const Content = styled.span`
  flex: 1;
  margin-left: 8px;
  font-size: 14px;
  text-decoration: ${({ complete }) => (complete ? "line-through" : "none")};
`;

const Button = styled.button`
  width: 60px;
  height: 24px;
  margin-left: 8px;
  color: white;
  border-radius: 8px;
  border: none;
  background-color: ${({ color }) => color};
  cursor: pointer;
`;
