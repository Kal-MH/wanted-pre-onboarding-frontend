import styled from "@emotion/styled";
import { Button, Input } from "../components/base";
import useForm from "../hooks/useForm";

const Signup = () => {
  const { errors, handleInputChange, handleSubmit } = useForm({
    initialValue: [],
    validate: (values) => {
      const newError = {};
      const { email, password } = values;

      const passwordRegex = /^.{8,}$/;

      if (!email || email.indexOf("@") < 0)
        newError["email"] = "Invalid: Email with no '@'";
      if (!password || !passwordRegex.test(password))
        newError["password"] = "Invalid: Password under 8 length";

      return newError;
    },
    onSubmit: (values) => {
      console.log(values, "submit");
    },
  });
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
