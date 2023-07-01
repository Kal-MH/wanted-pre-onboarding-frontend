import styled from "@emotion/styled";
import { ChangeEvent } from "react";

import useToggle from "../../hooks/useToggle";

interface IToggleProps {
  on?: boolean;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
}

const Toggle = ({ on, onChange }: IToggleProps) => {
  return (
    <S.ToggleContainer>
      <S.ToggleInput type='checkbox' onChange={onChange} checked={on} />
      <S.ToggleSwitch />
    </S.ToggleContainer>
  );
};

export default Toggle;

const S = {
  ToggleContainer: styled.label`
    display: inline-block;
    cursor: pointer;
    user-select: none;
  `,
  ToggleSwitch: styled.div`
    width: 64px;
    height: 30px;
    padding: 2px;
    border-radius: 15px;
    background-color: #ccc;
    box-sizing: border-box;
    transition: background-color 0.2s ease-in;

    &::after {
      content: "";
      width: 26px;
      height: 26px;
      display: block;
      position: relative;
      left: 0;
      border-radius: 50%;
      background-color: white;
      transition: left 0.2s ease-in-out;
    }
  `,
  ToggleInput: styled.input`
    display: none;

    &:checked + div {
      background-color: lightgreen;
    }

    &:checked + div::after {
      left: calc(100% - 26px);
    }
  `,
};
