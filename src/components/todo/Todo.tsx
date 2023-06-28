import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";

import { todoData } from "../../interfaces/todo";
import Toggle from "../base/Toggle";

interface ITodoProps {
  id: string;
  todo: string;
  isCompleted: boolean;
  onToggleUpdate: (value: Pick<todoData, "id" & "isCompleted">) => void;
  onContentUpdate: (value: Pick<todoData, "id" & "todo">) => void;
  onRemoveClick: (value: Pick<todoData, "id">) => void;
}

const Todo = ({
  id,
  todo,
  isCompleted,
  onToggleUpdate,
  onContentUpdate,
  onRemoveClick,
  ...props
}: ITodoProps) => {
  const [updateContent, setUpdateContent] = useState("");
  const isUpdate = updateContent !== "";

  const handleToggleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    onToggleUpdate({ id, isCompleted: e.target.checked });
  };

  const handleUpdateClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("update");

    setUpdateContent(todo);
  };

  const handleUpdateSubmitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("updateSubmit");

    onContentUpdate({ todo: updateContent });
  };

  const handleCancelClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUpdateContent("");
  };

  const handleRemoveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("remove");

    onRemoveClick({ id });
  };

  return (
    <ListItem {...props}>
      <Toggle on={isCompleted} onChange={handleToggleChange} />
      <div>
        {isUpdate ? (
          <input
            data-testid='modify-input'
            type='text'
            value={updateContent}
            onChange={(e) => setUpdateContent(e.target.value)}
          />
        ) : (
          <Content complete={isCompleted}>{todo}</Content>
        )}

        <Button
          data-testid='modify-button'
          color='blueviolet'
          onClick={isUpdate ? handleUpdateSubmitClick : handleUpdateClick}>
          {isUpdate ? "Submit" : "Update"}
        </Button>
        <Button
          data-testid='delete-button'
          color='red'
          onClick={isUpdate ? handleCancelClick : handleRemoveClick}>
          {isUpdate ? "Cancel" : "Remove"}
        </Button>
      </div>
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
  text-decoration: ${({ complete }: { complete: boolean }) =>
    complete ? "line-through" : "none"};
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
