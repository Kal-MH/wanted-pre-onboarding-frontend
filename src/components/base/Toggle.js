import styled from "@emotion/styled";
import useToggle from "../../hooks/useToggle";

const Toggle = ({ on = false, onChange, ...props }) => {
  const [checked, toggle] = useToggle(on);

  const handleChange = (e) => {
    toggle();
    onChange && onChange(e);
  };

  return (
    <ToggleContainer>
      <ToggleInput type='checkbox' checked={checked} onChange={handleChange} />
      <ToggleSwitch />
    </ToggleContainer>
  );
};

export default Toggle;

const ToggleContainer = styled.label`
  display: inline-block;
  cursor: pointer;
  user-select: none;
`;

const ToggleSwitch = styled.div`
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
`;

const ToggleInput = styled.input`
  display: none;

  &:checked + div {
    background-color: lightgreen;
  }

  &:checked + div::after {
    left: calc(100% - 26px);
  }
`;
