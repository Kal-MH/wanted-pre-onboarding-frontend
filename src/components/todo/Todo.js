import styled from "@emotion/styled";
import { useTodos } from "../../context/TodoProvider";
import Toggle from "../base/Toggle";
import { useState } from "react";

const Todo = ({ id, content, complete, ...props }) => {
  const { updateTodo, removeTodo, updateTodoToggle } = useTodos();
  const [updateContent, setUpdateContent] = useState(content);
  const [updateFlag, setUpdateFlag] = useState(false);

  const handleUpdateClick = (e) => {
    e.preventDefault();
    setUpdateFlag((prev) => !prev);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setUpdateContent(content);
    setUpdateFlag((prev) => !prev);
  };

  const handleUpdateSubmitClick = (e) => {
    e.preventDefault();

    if (updateFlag) {
      updateTodo(id, updateContent);
    }

    setUpdateFlag((prev) => !prev);
  };

  return (
    <ListItem {...props}>
      <Toggle
        on={complete}
        onChange={(e) => updateTodoToggle(id, e.target.checked)}
      />
      {updateFlag ? (
        <div>
          <input
            data-testid='modify-input'
            type='text'
            value={updateContent}
            onChange={(e) => setUpdateContent(e.target.value)}
          />
          <UpdateButton
            data-testid='submit-button'
            onClick={handleUpdateSubmitClick}>
            Submit
          </UpdateButton>
          <RemoveButton data-testid='cancel-button' onClick={handleCancelClick}>
            Cancel
          </RemoveButton>
        </div>
      ) : (
        <div>
          <Content complete={complete}>{content}</Content>
          <UpdateButton data-testid='modify-button' onClick={handleUpdateClick}>
            Update
          </UpdateButton>
          <RemoveButton
            data-testid='delete-button'
            onClick={() => removeTodo(id)}>
            Remove
          </RemoveButton>
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

const RemoveButton = styled.button`
  width: 60px;
  height: 24px;
  margin-left: 8px;
  color: white;
  border-radius: 8px;
  border: none;
  background-color: red;
  cursor: pointer;
`;

const UpdateButton = styled.button`
  width: 60px;
  height: 24px;
  margin-left: 8px;
  color: white;
  border-radius: 8px;
  border: none;
  background-color: blueviolet;
  cursor: pointer;
`;
