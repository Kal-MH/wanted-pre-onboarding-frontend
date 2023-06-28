import styled from "@emotion/styled";

import Toggle from "../base/Toggle";

interface ITodoProps {
  id: string;
  todo: string;
  isCompleted: boolean;
}

const Todo = ({ id, todo, isCompleted, ...props }: ITodoProps) => {
  return (
    <ListItem {...props}>
      <Toggle on={isCompleted} />
      <div>
        <Content complete={isCompleted}>{todo}</Content>
        <Button data-testid='modify-button' color='blueviolet'>
          Update
        </Button>
        <Button data-testid='delete-button' color='red'>
          Remove
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
