import styled from "@emotion/styled";
import { Button, Input } from "../components/base";
import useForm from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { validateInput } from "../utils/validateInput";
import { postSignIn } from "../apis/sign";
import useLocalStorage from "../hooks/useLocalStorage";
import { useEffect } from "react";

const Signin = () => {
  const navigate = useNavigate();
  const [storedValue, setValue] = useLocalStorage("token", "");
  const { errors, handleInputChange, handleSubmit } = useForm({
    initialValue: [],
    validate: validateInput,
    onSubmit: async (values) => {
      try {
        const { access_token } = await postSignIn(values);

        setValue(access_token);
        navigate("/todo");
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
        name='password'
        type='password'
        placeholder='password'
        onChange={handleInputChange}
      />
      <Button
        data-testid='signin-button'
        disabled={errors}
        onClick={handleSubmit}>
        Sign In
      </Button>
    </Container>
  );
};

export default Signin;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;
