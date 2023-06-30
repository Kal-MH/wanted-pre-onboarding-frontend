import styled from "@emotion/styled";
import { ChangeEvent, useEffect, useRef, useState } from "react";

import { todoData } from "../../interfaces/todo";
import Toggle from "../base/Toggle";

interface ITodoProps {
  id: string;
  todo: string;
  isCompleted: boolean;
  onToggleUpdate: (value: Pick<todoData, "id" & "isCompleted">) => void;
  onContentUpdate: (value: todoData) => void;
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
  const [updatedContent, setUpdatedContent] = useState("");
  const ref = useRef<HTMLInputElement>(null);
  const isUpdate = updatedContent !== "";

  const handleToggleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    onToggleUpdate({ id, isCompleted: e.target.checked });
  };

  const handleUpdateClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("update");

    setUpdatedContent(todo);
  };

  const handleUpdateSubmitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("updateSubmit");

    onContentUpdate({ id, todo: updatedContent, isCompleted });
  };

  const handleCancelClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUpdatedContent("");
  };

  const handleRemoveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("remove");

    onRemoveClick({ id });
  };

  useEffect(() => {
    if (isUpdate) {
      ref.current?.focus();
    }
  }, [isUpdate]);

  return (
    <S.ListItem {...props}>
      <Toggle on={isCompleted} onChange={handleToggleChange} />
      <div>
        {isUpdate ? (
          <input
            data-testid='modify-input'
            type='text'
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
          />
        ) : (
          <S.Content complete={isCompleted}>{todo}</S.Content>
        )}
        <S.Button
          data-testid='modify-button'
          color='blueviolet'
          onClick={isUpdate ? handleUpdateSubmitClick : handleUpdateClick}>
          {isUpdate ? "Submit" : "Update"}
        </S.Button>
        <S.Button
          data-testid='delete-button'
          color='red'
          onClick={isUpdate ? handleCancelClick : handleRemoveClick}>
          {isUpdate ? "Cancel" : "Remove"}
        </S.Button>
      </div>
    </S.ListItem>
  );
};

export default Todo;

const S = {
  ListItem: styled.li`
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
  `,
  Content: styled.span`
    flex: 1;
    margin-left: 8px;
    font-size: 14px;
    text-decoration: ${({ complete }: { complete: boolean }) =>
      complete ? "line-through" : "none"};
  `,
  Button: styled.button`
    width: 60px;
    height: 24px;
    margin-left: 8px;
    color: white;
    border-radius: 8px;
    border: none;
    background-color: ${({ color }) => color};
    cursor: pointer;
  `,
};
