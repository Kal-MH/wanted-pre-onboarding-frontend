import styled from "@emotion/styled";
import { ChangeEvent, FormEvent, useState } from "react";

import { userInput } from "../../interfaces/user";
import { Button, Input } from "../base";

interface ISearchFormProps {
  buttonTitle: string;
  onSubmit: (inputValue: userInput) => void;
}

const SearchForm = ({ buttonTitle, onSubmit }: ISearchFormProps) => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(inputValue);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Input
        data-testid='email-input'
        name='email'
        placeholder='email'
        onChange={handleInputChange}
      />
      <Input
        data-testid='password-input'
        name='password'
        type='password'
        placeholder='password'
        onChange={handleInputChange}
      />
      <Button data-testid='signin-button'>{buttonTitle}</Button>
    </Form>
  );
};

export default SearchForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;
