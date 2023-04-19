import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../components/base";
import useForm from "../hooks/useForm";
import { validateInput } from "../utils/validateInput";
import { postSignUp } from "../apis/sign";
import useLocalStorage from "../hooks/useLocalStorage";
import { useEffect } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [storedValue] = useLocalStorage("token", "");
  const { errors, handleInputChange, handleSubmit } = useForm({
    initialValue: [],
    validate: validateInput,
    onSubmit: async (values) => {
      try {
        await postSignUp(values);
        navigate("/signin");
      } catch (e) {
        alert(e);
      }
    },
  });

  useEffect(() => {
    if (storedValue) {
      navigate("/todo");
    }
  }, []);

  return (
    <Container>
      <Input
        data-testid='email-input'
        name='email'
        placeholder='email'
        onChange={handleInputChange}
      />
      <Input
        data-testid='password-input'
        type='password'
        name='password'
        placeholder='password'
        onChange={handleInputChange}
      />
      <Button
        data-testid='signup-button'
        disabled={errors}
        onClick={handleSubmit}>
        Sign Up
      </Button>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;
